const fs = require('fs');
const path = require('path');

const componentsDir = path.join(process.cwd(), 'src', 'components');
const pagesDir = path.join(process.cwd(), 'src', 'pages');

function replaceInFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace react-router-dom imports
    content = content.replace(/import\s+\{\s*Link\s*\}\s+from\s+['"]react-router-dom['"];?/g, "import Link from 'next/link';");
    
    // If useNavigate or useLocation are used
    if (content.includes('useNavigate') || content.includes('useLocation') || content.includes('useParams') || content.includes('Navigate')) {
        content = content.replace(/import\s+\{([^}]+)\}\s+from\s+['"]react-router-dom['"];?/g, (match, p1) => {
            let imports = [];
            let nextNavImports = [];
            let reactRouterImports = [];
            const items = p1.split(',').map(i => i.trim()).filter(i => i);
            
            items.forEach(item => {
                if (item === 'Link') imports.push("import Link from 'next/link';");
                else if (item === 'useNavigate') nextNavImports.push('useRouter');
                else if (item === 'useLocation') nextNavImports.push('usePathname');
                else if (item === 'useParams') nextNavImports.push('useParams');
                else if (item === 'Navigate') nextNavImports.push('redirect');
                else reactRouterImports.push(item);
            });
            
            let res = imports.join('\n') + (imports.length > 0 ? '\n' : '');
            if (nextNavImports.length > 0) {
                res += `import { ${nextNavImports.join(', ')} } from 'next/navigation';\n`;
            }
            if (reactRouterImports.length > 0) {
                res += `import { ${reactRouterImports.join(', ')} } from 'react-router-dom';\n`; // just in case
            }
            return res;
        });
        
        content = content.replace(/const\s+navigate\s*=\s*useNavigate\(\)/g, "const router = useRouter()");
        content = content.replace(/navigate\(/g, "router.push(");
        content = content.replace(/const\s+location\s*=\s*useLocation\(\)/g, "const pathname = usePathname()");
        content = content.replace(/location\.pathname/g, "pathname");
        content = content.replace(/<Navigate\s+to=(.*?)\s*(?:replace)?\s*\/>/g, "(() => { redirect($1); return null; })()");
    }

    // Replace <a href> to internal links with <Link href> where appropriate (simplification: skip for now or do manually)
    
    // Replace to= with href= in <Link>
    content = content.replace(/<Link\s+(.*?)to=/g, "<Link $1href=");

    // Add 'use client' to interactive components
    if (
        (content.includes('useState') || content.includes('useEffect') || content.includes('useRef') || 
         content.includes('gsap') || content.includes('framer-motion') || content.includes('next/navigation') || content.includes('useRouter') || content.includes('usePathname')) 
        && !content.includes("'use client'") && !content.includes('"use client"')
    ) {
        content = "'use client';\n" + content;
    }

    fs.writeFileSync(filePath, content, 'utf8');
}

function processDirectory(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
            replaceInFile(fullPath);
        }
    }
}

processDirectory(componentsDir);
processDirectory(pagesDir);
console.log('Done migrating components and pages.');
