
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function diagnoseImages() {
    console.log('--- Image Diagnostic Tool ---');

    const codeFiles = await glob('src/**/*.{tsx,ts}', { ignore: 'node_modules/**' });
    const missing = [];
    const found = [];

    for (const file of codeFiles) {
        const content = fs.readFileSync(file, 'utf-8');
        // Find strings that look like image paths
        const matches = content.match(/['"]([^'"]+\.webp)['"]/g);

        if (matches) {
            for (const match of matches) {
                const imgPath = match.replace(/['"]/g, '');
                let fileOnDisk = null;

                if (imgPath.startsWith('/APS/images/')) {
                    fileOnDisk = path.join('public', 'images', imgPath.replace('/APS/images/', ''));
                } else if (imgPath.startsWith('@/assets/')) {
                    fileOnDisk = path.join('src', 'assets', imgPath.replace('@/assets/', ''));
                } else if (imgPath.startsWith('/images/')) {
                    fileOnDisk = path.join('public', 'images', imgPath.replace('/images/', ''));
                }

                if (fileOnDisk) {
                    if (!fs.existsSync(fileOnDisk)) {
                        missing.push({ file, imgPath, expected: fileOnDisk });
                    } else {
                        found.push(fileOnDisk);
                    }
                }
            }
        }
    }

    console.log(`Checked ${codeFiles.length} source files.`);
    console.log(`Found ${found.length} valid image references.`);

    if (missing.length > 0) {
        console.log(`\n❌ MISSING IMAGES (${missing.length}):`);
        missing.forEach(m => {
            console.log(`- ${m.imgPath} (in ${m.file})`);
            console.log(`  Expected at: ${m.expected}`);
        });
    } else {
        console.log('\n✅ All .webp references in code exist on disk!');
    }
}

diagnoseImages();
