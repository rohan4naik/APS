
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Configuration
const CODE_EXTENSIONS = ['.tsx', '.ts', '.css', '.html'];

async function fixBrokenImages() {
    console.log('Starting broken image link fix...');

    const codeFiles = await glob(`src/**/*+(${CODE_EXTENSIONS.join('|')})`, { ignore: 'node_modules/**' });

    // Regex to find image path strings: /... .(jpg|jpeg|png)
    // or relative paths, or imports
    // We'll look for any string ending in these extensions
    const imgRegex = /(['"])([^'"]+\.(jpg|jpeg|png))\1/gi;

    for (const file of codeFiles) {
        let content = fs.readFileSync(file, 'utf-8');
        let originalContent = content;
        let matches;
        let modified = false;

        // Reset regex index
        while ((matches = imgRegex.exec(content)) !== null) {
            const fullMatch = matches[0];
            const quote = matches[1];
            const imgPath = matches[2]; // e.g. /APS/images/foo.jpg or @/assets/foo.JPG

            // Determine potential file on disk
            let fileOnDisk = null;

            if (imgPath.startsWith('/APS/images/')) {
                // Map to public/images/
                fileOnDisk = path.join('public', 'images', imgPath.replace('/APS/images/', ''));
            } else if (imgPath.startsWith('@/assets/')) {
                // Map to src/assets/
                fileOnDisk = path.join('src', 'assets', imgPath.replace('@/assets/', ''));
            } else if (imgPath.startsWith('./') || imgPath.startsWith('../')) {
                // Relative path
                fileOnDisk = path.resolve(path.dirname(file), imgPath);
                // Make it relative to CWD for easier checking? No, just keep absolute
            } else if (imgPath.startsWith('/')) {
                // Root import (unlikely but possible if implicit public)
                fileOnDisk = path.join('public', imgPath.substring(1));
            }

            if (fileOnDisk) {
                // Check if original file DOES NOT exist
                if (!fs.existsSync(fileOnDisk)) {
                    // Check if .webp version exists
                    const dir = path.dirname(fileOnDisk);
                    const ext = path.extname(fileOnDisk);
                    const base = path.basename(fileOnDisk, ext);
                    const webpFile = path.join(dir, `${base}.webp`);

                    if (fs.existsSync(webpFile)) {
                        console.log(`Fixing broken link in ${file}: ${imgPath} -> .webp`);
                        // Replace extension in the original string
                        // We use a specific replacement to avoid replacing other things
                        // Construct new path with .webp extension (preserving original casing of base if needed? No, use webp)

                        const newImgPath = imgPath.substring(0, imgPath.lastIndexOf('.')) + '.webp';

                        // We need to trigger the replacement in the content string
                        // Since regex.exec is iterating, we shouldn't modify content in place immediately or indices mess up
                        // But valid replacing only this match is tricky with global regex loop

                        // Simplification: Just replace the specific string literal in the content
                        // We'll use split/join or replace.
                        // Be careful if multiple occurrences
                    }
                }
            }
        }

        // Better approach: replace using callback
        content = content.replace(imgRegex, (match, quote, imgPath) => {
            let fileOnDisk = null;
            if (imgPath.startsWith('/APS/images/')) {
                fileOnDisk = path.join('public', 'images', imgPath.replace('/APS/images/', ''));
            } else if (imgPath.startsWith('@/assets/')) {
                fileOnDisk = path.join('src', 'assets', imgPath.replace('@/assets/', ''));
            } else {
                // Skip relative paths for safety or handle simpler ones?
                // Let's assume most assets are absolute imports or aliased
                return match;
            }

            // Check file existence
            if (!fs.existsSync(fileOnDisk)) {
                const dir = path.dirname(fileOnDisk);
                const ext = path.extname(fileOnDisk);
                const base = path.basename(fileOnDisk, ext);
                // Check for webp
                const webpFile = path.join(dir, `${base}.webp`);

                if (fs.existsSync(webpFile)) {
                    console.log(`Fixing: ${imgPath} -> .webp`);
                    return `${quote}${imgPath.substring(0, imgPath.lastIndexOf('.'))}.webp${quote}`;
                }
            }
            return match;
        });

        if (content !== originalContent) {
            fs.writeFileSync(file, content, 'utf-8');
        }
    }

    console.log('Fix script complete.');
}

fixBrokenImages();
