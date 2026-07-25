const fs = require('fs');
const path = require('path');

const transparencyData = {
  'invisalign': {
    financialData: { startingPrice: "₹1,50,000", paymentOptions: ["0% Interest EMI Available", "Bajaj Finserv Health Cards Accepted"] },
    clinicalRisks: { successRate: "98% with strict compliance", complications: ["Relapse if retainers are not worn", "Mild speech lisp for first 48 hours", "Root resorption in extremely rare cases"] }
  },
  'dental-implants': {
    financialData: { startingPrice: "₹25,000 per implant", paymentOptions: ["Phased Payment Plans", "Health Insurance (if accident-related)"] },
    clinicalRisks: { successRate: "95-98%", complications: ["Implant failure due to smoking or poor hygiene", "Temporary nerve tingling (rare)", "Peri-implantitis (gum disease around implant)"] }
  },
  'braces': {
    financialData: { startingPrice: "₹35,000", paymentOptions: ["Monthly Installment Plans", "Custom Orthodontic Packages"] },
    clinicalRisks: { successRate: "99%", complications: ["White spot lesions (if brushing is poor)", "Root shortening", "Soft tissue ulcers from brackets"] }
  },
  'root-canal': {
    financialData: { startingPrice: "₹3,500 (Excluding Crown)", paymentOptions: ["Direct Payment", "Credit/Debit Cards"] },
    clinicalRisks: { successRate: "90-95%", complications: ["Tooth fracture if crown is delayed", "Re-infection requiring retreatment", "Instrument separation (rare)"] }
  },
  'all-on-4': {
    financialData: { startingPrice: "₹1,50,000 per arch", paymentOptions: ["Medical Loans", "Multi-Phase Payments"] },
    clinicalRisks: { successRate: "94-98%", complications: ["Prosthesis fracture under extreme bite force", "Implant non-integration", "Speech adaptation required"] }
  },
  'smile-makeover': {
    financialData: { startingPrice: "Custom quote based on case", paymentOptions: ["Bespoke Financing Options"] },
    clinicalRisks: { successRate: "Highly dependent on maintenance", complications: ["Porcelain chipping if nightguard is not worn", "Slight thermal sensitivity initially"] }
  }
};

const defaultData = {
  financialData: { startingPrice: "Consultation Required", paymentOptions: ["Cash", "UPI", "All Major Cards", "EMI Options"] },
  clinicalRisks: { successRate: "High predictability", complications: ["Standard surgical/clinical risks apply. Discussed during consultation."] }
};

const fileNames = ['treatments.js', 'treatments2.js', 'treatments3.js', 'treatments4.js'];
const dataDir = path.join(__dirname, 'src', 'data');

fileNames.forEach(fileName => {
  const filePath = path.join(dataDir, fileName);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf-8');

  // Match all slugs
  const slugRegex = /'([^']+)':\s*{/g;
  let match;
  const slugsToProcess = [];
  while ((match = slugRegex.exec(content)) !== null) {
    slugsToProcess.push(match[1]);
  }

  slugsToProcess.forEach(slug => {
    const dataToInject = transparencyData[slug] || defaultData;
    
    // Find the end of the object for this slug
    const regex = new RegExp(`('${slug}':\\s*{[\\s\\S]*?)(^\\s*lastReviewed:\\s*'.*?'\\s*$)`, 'm');
    const matchObj = content.match(regex);
    
    if (matchObj) {
      const financialStr = JSON.stringify(dataToInject.financialData);
      const clinicalStr = JSON.stringify(dataToInject.clinicalRisks);
      
      const newProperties = `financialData: ${financialStr},\n    clinicalRisks: ${clinicalStr},\n    ${matchObj[2]}`;
      
      content = content.replace(regex, `$1${newProperties}`);
    }
  });

  fs.writeFileSync(filePath, content);
});

console.log('Treatments updated with Radical Transparency fields (Financial & Clinical Risks).');
