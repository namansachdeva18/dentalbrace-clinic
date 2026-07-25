const fs = require('fs');
const path = require('path');

const appDir = path.join(process.cwd(), 'src', 'app');

function processFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Remove 'use client'
    content = content.replace(/['"]use client['"];?\n?/g, '');

    // 2. Remove framer-motion imports and motion.div wrappers
    content = content.replace(/import\s+\{\s*motion\s*\}\s+from\s+['"]framer-motion['"];?\n?/g, '');
    content = content.replace(/<motion\.div[^>]*>/g, '<div className="page-wrapper">');
    content = content.replace(/<\/motion\.div>/g, '</div>');

    // 3. Extract Helmet metadata
    const helmetRegex = /<Helmet>([\s\S]*?)<\/Helmet>/;
    const match = content.match(helmetRegex);
    
    if (match) {
        const helmetContent = match[1];
        
        // Extract title
        const titleMatch = helmetContent.match(/<title>(.*?)<\/title>/);
        const title = titleMatch ? titleMatch[1] : '';

        // Extract description
        const descMatch = helmetContent.match(/<meta\s+name=["']description["']\s+content=(["'])(.*?)\1/i) || 
                          helmetContent.match(/<meta\s+name=["']description["']\s+content=\{`?(.*?)`?\}/i) ||
                          helmetContent.match(/<meta\s+name=["']description["']\s+content=\{(.*?)\}/i);
        const description = descMatch ? descMatch[2] || descMatch[1] : '';

        // Extract canonical
        const canMatch = helmetContent.match(/<link\s+rel=["']canonical["']\s+href=(["'])(.*?)\1/i) ||
                         helmetContent.match(/<link\s+rel=["']canonical["']\s+href=\{`?(.*?)`?\}/i);
        const canonical = canMatch ? canMatch[2] || canMatch[1] : '';
        
        let metadataObj = `export const generateMetadata = () => {\n  return {\n`;
        if (title) metadataObj += `    title: ${title.startsWith('article') || title.startsWith('data') ? title : '"' + title.replace(/"/g, '\\"') + '"'},\n`;
        if (description) metadataObj += `    description: ${description.startsWith('article') || description.startsWith('data') ? description : '"' + description.replace(/"/g, '\\"') + '"'},\n`;
        if (canonical) metadataObj += `    alternates: { canonical: ${canonical.startsWith('`') || canonical.includes('$') ? canonical : '"' + canonical.replace(/"/g, '\\"') + '"'} },\n`;
        metadataObj += `  };\n};\n\n`;

        // We can't easily extract dynamic metadata if the page uses hooks (like useParams). 
        // If it uses useParams (like BlogPost), the component needs to be a Client component OR we use Next.js dynamic routes.
        // In Next.js, Server Components get `params` as props.
        
        // Remove Helmet from JSX
        content = content.replace(helmetRegex, '');
        content = content.replace(/import\s+\{\s*Helmet\s*\}\s+from\s+['"]react-helmet-async['"];?\n?/g, '');

        // Add metadata to top
        // If it's a dynamic route (TreatmentTemplate or BlogPost), we need to change how params work.
        // For now, prepend metadataObj if it's not a dynamic route.
        if (!content.includes('useParams')) {
            content = metadataObj + content;
        }
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
            if (file !== 'layout.jsx' && file !== 'TransitionWrapper.jsx') {
                processFile(fullPath);
            }
        }
    }
}

processDirectory(appDir);
console.log('Done processing metadata.');
