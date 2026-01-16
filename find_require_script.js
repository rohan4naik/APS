
import fs from 'fs';
import path from 'path';

function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filepath = path.join(dir, file);
        const stat = fs.statSync(filepath);
        if (stat.isDirectory()) {
            if (file !== 'node_modules' && file !== 'dist' && file !== '.git') walk(filepath);
        } else {
            if (filepath.endsWith('.ts') || filepath.endsWith('.tsx') || filepath.endsWith('.js')) {
                const content = fs.readFileSync(filepath, 'utf8');
                const lines = content.split('\n');

                // Check line 135 (index 134) specifically as per error hint
                if (lines.length >= 135) {
                    if (lines[134].includes('require')) {
                        console.log(`Found 'require' at line 135 in: ${filepath}`);
                        console.log(`Line 135: ${lines[134].trim()}`);
                    }
                }

                // General search for "require("
                if (content.includes('require(') || content.includes(' require ')) {
                    console.log(`Found generic 'require' usage in: ${filepath}`);
                    // Print where
                    lines.forEach((l, i) => {
                        if (l.includes('require')) console.log(`  Line ${i + 1}: ${l.trim()}`);
                    });
                }
            }
        }
    }
}

walk('.');
