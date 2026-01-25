
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

function getRealPath(p) {
    try {
        return fs.realpathSync.native(p);
    } catch (e) {
        return null;
    }
}

async function strictCheck() {
    console.log('--- Strict Case-Sensitivity Audit ---');
    const codeFiles = await glob('src/**/*.{tsx,ts}', { ignore: 'node_modules/**' });

    for (const file of codeFiles) {
        const content = fs.readFileSync(file, 'utf8');
        // Match both imports and strings
        const matches = content.match(/['"]([^'"]+\.(webp|png|jpg|jpeg))['"]/gi);

        if (matches) {
            for (const m of matches) {
                const imgPath = m.replace(/['"]/g, '');
                let fullPath = null;

                if (imgPath.startsWith('@/')) {
                    fullPath = path.resolve('src', imgPath.substring(2));
                } else if (imgPath.startsWith('/APS/')) {
                    fullPath = path.resolve('public', imgPath.substring(5));
                } else if (imgPath.startsWith('/')) {
                    fullPath = path.resolve('public', imgPath.substring(1));
                } else if (imgPath.startsWith('.')) {
                    fullPath = path.resolve(path.dirname(file), imgPath);
                }

                if (fullPath) {
                    const real = getRealPath(fullPath);
                    if (!real) {
                        console.log(`[ABSENT]  ${imgPath} in ${path.basename(file)} (Expected: ${fullPath})`);
                    } else {
                        // Compare segment by segment for case sensitivity
                        const realNorm = path.normalize(real);
                        const expectedNorm = path.normalize(fullPath);

                        if (realNorm !== expectedNorm) {
                            console.log(`[CASE]   ${imgPath} in ${path.basename(file)}`);
                            console.log(`         Expected: ${expectedNorm}`);
                            console.log(`         Actual:   ${realNorm}`);
                        }
                    }
                }
            }
        }
    }
    console.log('Audit Complete.');
}

strictCheck();
