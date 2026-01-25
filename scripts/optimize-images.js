
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Configuration
const QUALITY = 80;
const MAX_WIDTH = 1920;
const TARGET_DIRS = ['src/assets', 'public/images'];
const SOURCE_EXTENSIONS = ['.jpg', '.jpeg', '.png'];
const CODE_EXTENSIONS = ['.tsx', '.ts', '.css', '.html'];
const IGNORE_DIRS = ['node_modules', 'dist', '.git'];

async function optimizeImages() {
    console.log('Starting image optimization...');

    // 1. Find all image files
    let imageFiles = [];
    for (const dir of TARGET_DIRS) {
        const files = await glob(`${dir}/**/*+(${SOURCE_EXTENSIONS.join('|')})`, { ignore: 'node_modules/**' });
        imageFiles = [...imageFiles, ...files];
    }

    console.log(`Found ${imageFiles.length} images to optimize.`);

    // 2. Process each image
    for (const file of imageFiles) {
        const dir = path.dirname(file);
        const ext = path.extname(file);
        const name = path.basename(file, ext);
        const newFile = path.join(dir, `${name}.webp`);

        console.log(`Optimizing: ${file} -> ${newFile}`);

        try {
            const image = sharp(file);
            const metadata = await image.metadata();

            let pipeline = image.webp({ quality: QUALITY });

            if (metadata.width && metadata.width > MAX_WIDTH) {
                pipeline = pipeline.resize({ width: MAX_WIDTH });
            }

            await pipeline.toFile(newFile);

            // 3. Update references in code
            await updateCodeReferences(file, newFile);

            // 4. Delete original file (optional, keeping it clean)
            fs.unlinkSync(file);

        } catch (error) {
            console.error(`Error processing ${file}:`, error);
        }
    }

    console.log('Image optimization complete!');
}

async function updateCodeReferences(oldFile, newFile) {
    // Normalize paths for replacement logic
    // We want to replace "foo.png" with "foo.webp" in the code
    // But we need to be careful. Code might reference:
    // - "@/assets/foo.png"
    // - "/APS/images/foo.png"
    // - "./foo.png"

    const oldBaseName = path.basename(oldFile);
    const newBaseName = path.basename(newFile);

    // Find all code files
    const codeFiles = await glob(`src/**/*+(${CODE_EXTENSIONS.join('|')})`, { ignore: 'node_modules/**' });

    for (const codeFile of codeFiles) {
        let content = fs.readFileSync(codeFile, 'utf-8');

        // Simple replacement: find the filename string
        // This handles most cases like: import x from ".../foo.png" or src=".../foo.png"
        if (content.includes(oldBaseName)) {
            console.log(`Updating reference in ${codeFile}: ${oldBaseName} -> ${newBaseName}`);
            // Replace all occurrences
            const regex = new RegExp(oldBaseName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
            content = content.replace(regex, newBaseName);
            fs.writeFileSync(codeFile, content, 'utf-8');
        }
    }
}

optimizeImages();
