const fs = require('fs');
const path = require('path');
function check(dir) {
    const files = fs.readdirSync(dir);
    for (const f of files) {
        const p = path.join(dir, f);
        if (fs.statSync(p).isDirectory()) {
            check(p);
        } else if (p.endsWith('.jsx')) {
            let c = fs.readFileSync(p, 'utf8');
            if (c.includes('<motion.') && !c.includes('framer-motion')) {
                c = "import { motion } from 'framer-motion';\n" + c;
                fs.writeFileSync(p, c, 'utf8');
                console.log('Fixed', p);
            }
        }
    }
}
check('./src');
