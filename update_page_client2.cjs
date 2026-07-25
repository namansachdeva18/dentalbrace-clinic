const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'app', 'treatments', '[id]', 'PageClient.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Remove highlightKeywords definition (from line 13 to 45)
// Let's use a regex to carefully remove it
content = content.replace(/\/\/\s*─── Keyword Highlighter Helper[\s\S]*?};\s*\n/, '');

// 2. Inject imports at the top
const importsToInject = `import { AutoLinker } from '@/components/AutoLinker';\nimport ContinueExploring from '@/components/ContinueExploring';\n`;
content = content.replace(/(import '.\/TreatmentTemplate.css';\nimport treatmentData from '@\/data';\n)/, `$1\n${importsToInject}`);

// 3. Replace {highlightKeywords(variable)} with <AutoLinker text={variable} />
// We have to be careful with the mapping inside JSX
content = content.replace(/{highlightKeywords\(([^)]+)\)}/g, '<AutoLinker text={$1} />');

// 4. Update Sidebar "Other Treatments" section to be empty, or replace the hardcoded "Other Treatments" card
// Since we have ContinueExploring, we can remove the "Other Treatments" card in the sidebar entirely, 
// OR we can inject ContinueExploring at the bottom of the main content column.
// Let's inject ContinueExploring at the bottom of the main content column, before the closing </div> of "treatment-main"
// Let's find: </div>\n          </div>\n\n          {/* Sidebar */}
const continueExploringInjection = `
            {/* Semantic Knowledge Panel */}
            <ContinueExploring data={data} currentSlug={slug} />
          </div>

          {/* Sidebar */}`;
content = content.replace(/<\/div>\s*<\/div>\s*{\/\* Sidebar \*\/}/, continueExploringInjection);

// 5. Remove the old "Other Treatments" card from the sidebar since ContinueExploring handles it
const otherTreatmentsCardRegex = /{\/\* Other Treatments \*\/}[\s\S]*?(<\/aside>)/;
content = content.replace(otherTreatmentsCardRegex, '$1');

fs.writeFileSync(filePath, content);
console.log('Update script completed successfully!');
