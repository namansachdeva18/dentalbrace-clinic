const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'app', 'treatments', '[id]', 'PageClient.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

// Inject Import
if (!content.includes('TreatmentSnapshot')) {
  const importsToInject = `import TreatmentSnapshot from '@/components/TreatmentSnapshot';\n`;
  content = content.replace(/(import ContinueExploring from '@\/components\/ContinueExploring';\n)/, `$1${importsToInject}`);
}

// Inject Component below Hero
// Look for `</section>\n\n      <section className="section-padding bg-white relative">`
// Wait, let's inject it inside the `container treatment-content` but BEFORE the `treatment-main` grid.
// That way it spans the full width or sits neatly on top of the content.
// Look for:
/*
      <section className="section-padding bg-white relative">
        <div className="container treatment-content">
          <div className="treatment-main">
*/
const insertionPointRegex = /(<div className="container treatment-content">\s*)(<div className="treatment-main">)/;
const injectionString = `$1<TreatmentSnapshot data={data} />\n          $2`;

if (!content.includes('<TreatmentSnapshot')) {
  content = content.replace(insertionPointRegex, injectionString);
  fs.writeFileSync(filePath, content);
  console.log('PageClient.jsx updated with TreatmentSnapshot.');
} else {
  console.log('TreatmentSnapshot already exists in PageClient.jsx.');
}
