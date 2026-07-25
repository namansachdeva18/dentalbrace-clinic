const fs = require('fs');
const path = require('path');

const applyAutoLinkerToDoctor = (filePath, bioParagraphs) => {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Inject import
  if (!content.includes('AutoLinker')) {
    content = content.replace(/(import Link from 'next\/link';)/, "$1\nimport { AutoLinker } from '@/components/AutoLinker';");
  }

  // Replace bio section
  // We'll look for `<div className="page-wrapper">\n              <h2 className="heading-secondary">About` to `</div>\n\n            <div className="page-wrapper">\n              <h2 className="heading-secondary">Qualifications & Training</h2>`
  
  const bioRegex = /(<h2 className="heading-secondary">About Dr\. [^<]+<\/h2>)[\s\S]*?(<\/div>\s*<div className="page-wrapper">\s*<h2 className="heading-secondary">Qualifications)/;
  
  const newBio = `$1\n${bioParagraphs.map(p => `              <p className="text-secondary text-lg leading-relaxed mt-4">\n                <AutoLinker text={"${p}"} />\n              </p>`).join('\n')}\n            </div>\n\n            <div className="page-wrapper">\n              <h2 className="heading-secondary">Qualifications`;
  
  content = content.replace(bioRegex, newBio);
  fs.writeFileSync(filePath, content);
};

// Dr. Sandeep
const sandeepBio = [
  "Dr. Sandeep Kumar is Bathinda's most experienced orthodontist, with over a decade of specialized practice in braces, clear aligners, and dentofacial orthopedics. He completed his MDS in Orthodontics & Dentofacial Orthopedics from Banaras Hindu University (BHU) Varanasi — one of India's most prestigious dental institutions — and further refined his expertise as a resident at AIIMS New Delhi, the country's premier medical institute.",
  "A certified Invisalign provider, Dr. Sandeep has completed over 5,500 braces and aligner cases — making him one of the most experienced aligner specialists in Punjab. His deep understanding of facial growth patterns and bite mechanics allows him to deliver not just straight teeth, but a perfectly balanced smile that complements your face.",
  "Patients travel from Ludhiana, Amritsar, Faridkot, Mansa, and even abroad to seek treatment from him — a testament to the trust and results he delivers consistently."
];
applyAutoLinkerToDoctor(path.join(__dirname, 'src', 'app', 'doctors', 'dr-sandeep-kumar', 'page.jsx'), sandeepBio);

// Dr. Ritu
const rituBio = [
  "Dr. Ritu Saneja is a highly esteemed Prosthodontist and Implantologist, renowned for her unparalleled precision in complex full mouth rehabilitations, digital smile designing, and advanced implant prosthetics. She earned her MDS from PGIMER Chandigarh and completed her Senior Residency at the prestigious AIIMS New Delhi, making her one of the most rigorously trained dental specialists in Punjab.",
  "As a Gold Medalist in her field, Dr. Ritu brings a level of academic and clinical excellence that is rarely found outside metropolitan centers. She specializes in restoring missing or completely broken down teeth using world-class Titanium implants, All-on-4 systems, and highly aesthetic Zirconia and E-max restorations.",
  "Her philosophy marries the science of biomechanics with the art of facial aesthetics, ensuring that every crown, veneer, or denture she creates functions flawlessly and looks indistinguishable from natural teeth."
];
applyAutoLinkerToDoctor(path.join(__dirname, 'src', 'app', 'doctors', 'dr-ritu-saneja', 'page.jsx'), rituBio);

console.log('Doctors updated successfully');
