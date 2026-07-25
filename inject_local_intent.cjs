const fs = require('fs');
const path = require('path');

const treatmentExtras = {
  'invisalign': {
    patientProblems: ['Embarrassed to smile in photos', 'Teeth are shifting and getting crooked', 'Cannot bite food properly due to overbite'],
    travelLogistics: { consultation: 'Same-day 3D iTero scanning and consultation available.', visitsRequired: 'Only 1 visit every 6-8 weeks for aligner delivery.', followUp: 'Virtual check-ins available. In-clinic visits minimal.' }
  },
  'dental-implants': {
    patientProblems: ['Missing a tooth and hate how it looks', 'Dentures keep slipping out', 'Cannot chew solid foods like apples or meat'],
    travelLogistics: { consultation: 'Same-day CBCT scan and surgical planning available.', visitsRequired: 'Typically 3-4 visits over 3-6 months.', followUp: 'Post-surgical checkup at 1 week, followed by final crown placement.' }
  },
  'all-on-4': {
    patientProblems: ['All my teeth are failing', 'Traditional dentures cause sores and slip', 'Want permanent teeth but lack bone density'],
    travelLogistics: { consultation: 'Comprehensive same-day 3D imaging and full arch planning.', visitsRequired: 'Intensive planning phase (2 visits), followed by surgery and immediate provisional delivery.', followUp: 'Soft diet protocol monitoring and final prosthesis delivery after 4-6 months.' }
  },
  'smile-makeover': {
    patientProblems: ['My smile is asymmetrical or gummy', 'Teeth are deeply stained and chipped', 'Want a completely new smile for my wedding'],
    travelLogistics: { consultation: 'Same-day digital photography and initial facial analysis.', visitsRequired: 'Variable (3 to 6 visits) depending on the combination of therapies.', followUp: 'Aesthetic review and nightguard delivery to protect ceramics.' }
  },
  'braces': {
    patientProblems: ['Severe crookedness or crowding', 'Jaw pain from a bad bite', 'Teeth are sticking out (protruding)'],
    travelLogistics: { consultation: 'Same-day OPG/Ceph X-rays and initial bracket placement possible.', visitsRequired: 'Monthly adjustments (every 4-6 weeks) required.', followUp: 'Regular adjustments are mandatory for continuous tooth movement.' }
  },
  'root-canal': {
    patientProblems: ['Severe, throbbing tooth pain keeping me awake', 'Extreme sensitivity to hot or cold drinks', 'Swollen gums or pimple near the tooth'],
    travelLogistics: { consultation: 'Emergency same-day pain relief and treatment initiation often available.', visitsRequired: 'Often completed in a single sitting using rotary endodontics. Complex cases may take 2 visits.', followUp: 'Crown placement recommended within 1-2 weeks.' }
  },
  'teeth-whitening': {
    patientProblems: ['Yellow or stained teeth from tea/coffee', 'Want a brighter smile for an upcoming event', 'Dull looking teeth making me look older'],
    travelLogistics: { consultation: 'Same-day consultation and treatment completion available.', visitsRequired: 'Single 45-minute clinic visit.', followUp: 'Take-home touch-up kits provided for maintenance.' }
  },
  'veneers': {
    patientProblems: ['Small chips or cracks on front teeth', 'Stubborn discoloration that bleaching won\'t fix', 'Small gaps between front teeth'],
    travelLogistics: { consultation: 'Same-day smile design consultation and mockup.', visitsRequired: 'Typically 2 to 3 visits (Preparation, Trial, and Final Bonding).', followUp: 'Occlusion check 1 week after placement.' }
  },
  'dental-crown-bridge': {
    patientProblems: ['Broken or severely decayed tooth', 'Missing a single tooth between two healthy teeth', 'Tooth feels weak after a root canal'],
    travelLogistics: { consultation: 'Same-day tooth preparation and temporary crown placement.', visitsRequired: '2 visits (Preparation & Impression, followed by Final Cementation).', followUp: 'Bite adjustment if necessary within the first week.' }
  },
  'wisdom-tooth-removal': {
    patientProblems: ['Severe pain at the back of the jaw', 'Difficulty opening mouth fully', 'Swollen gums behind the last molar'],
    travelLogistics: { consultation: 'Same-day OPG X-ray and extraction available in most non-complex cases.', visitsRequired: 'Single surgical visit.', followUp: 'Suture removal and healing check after 7 days.' }
  },
  'gum-treatment': {
    patientProblems: ['Gums bleed when brushing', 'Bad breath that won\'t go away', 'Teeth look longer because gums are receding'],
    travelLogistics: { consultation: 'Same-day periodontal assessment and deep cleaning initiation.', visitsRequired: 'Multiple visits may be required depending on disease severity (quadrant scaling).', followUp: 'Strict 3-month maintenance cleanings required.' }
  },
  'dentofacial-orthopedics': {
    patientProblems: ['Child has a severely receding lower jaw', 'Child breathes through their mouth constantly', 'Upper jaw is too narrow'],
    travelLogistics: { consultation: 'Same-day growth analysis using lateral cephalograms.', visitsRequired: 'Visits every 4-8 weeks to monitor appliance progress.', followUp: 'Long-term growth monitoring until skeletal maturity.' }
  },
  'maxillofacial-prosthetics': {
    patientProblems: ['Missing facial structures due to surgery/trauma', 'Cleft palate making eating/speaking difficult', 'Need specialized obturator after tumor removal'],
    travelLogistics: { consultation: 'Extensive multi-disciplinary consultation and digital scanning required.', visitsRequired: 'Multiple meticulous impression and trial visits.', followUp: 'Frequent adjustments required for optimal fit and comfort.' }
  },
  'digital-dentistry': {
    patientProblems: ['Gag reflex makes traditional molds impossible', 'Want a highly precise and faster treatment', 'Want to see digital simulations before starting'],
    travelLogistics: { consultation: 'Immediate 3D digital impressions (no messy putty).', visitsRequired: 'Significantly reduces overall chair time and required visits.', followUp: 'Digital records kept for precise future reference.' }
  },
  'composite-bonding': {
    patientProblems: ['Small chip on front tooth', 'Slight gap between teeth', 'Uneven tooth edges'],
    travelLogistics: { consultation: 'Same-day consultation and complete procedure.', visitsRequired: 'Completed in a single visit without local anesthesia in most cases.', followUp: 'No specific follow-up required unless chipping occurs.' }
  },
  'kids-dentistry': {
    patientProblems: ['Child has a toothache', 'First dental visit checkup', 'Child lost a baby tooth too early'],
    travelLogistics: { consultation: 'Same-day acclimatization visit and fluoride treatment.', visitsRequired: 'Varies based on treatment. Focus is on child comfort.', followUp: 'Routine 6-month preventive checkups.' }
  },
  'smile-designing': {
    patientProblems: ['Want to preview my new smile before committing', 'Unhappy with overall facial aesthetics', 'Teeth look asymmetrical'],
    travelLogistics: { consultation: 'Extensive initial photography, scanning, and video analysis.', visitsRequired: '2 visits for design phase (Records, then Mockup Trial).', followUp: 'Transitions into specific treatment phases (veneers/aligners).' }
  },
  'sedation-dentistry': {
    patientProblems: ['Extreme fear or anxiety of the dentist', 'Need multiple complex procedures done at once', 'Severe gag reflex'],
    travelLogistics: { consultation: 'Pre-anesthetic evaluation required prior to procedure day.', visitsRequired: 'Consolidates multiple treatments into a single long visit.', followUp: 'Patient must be escorted home by a companion.' }
  }
};

const fileNames = ['treatments.js', 'treatments2.js', 'treatments3.js', 'treatments4.js'];
const dataDir = path.join(__dirname, 'src', 'data');

fileNames.forEach(fileName => {
  const filePath = path.join(dataDir, fileName);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf-8');

  Object.keys(treatmentExtras).forEach(slug => {
    const extra = treatmentExtras[slug];
    if (!extra) return;

    // Find the end of the object for this slug
    // We look for:   'slug': { ... \n  },
    const regex = new RegExp(`('${slug}':\\s*{[\\s\\S]*?)(^\\s*lastReviewed:\\s*'.*?'\\s*$)`, 'm');
    const match = content.match(regex);
    
    if (match) {
      const patientProblemsStr = JSON.stringify(extra.patientProblems);
      const travelLogisticsStr = JSON.stringify(extra.travelLogistics);
      
      const newProperties = `patientProblems: ${patientProblemsStr},\n    travelLogistics: ${travelLogisticsStr},\n    ${match[2]}`;
      
      content = content.replace(regex, `$1${newProperties}`);
    }
  });

  fs.writeFileSync(filePath, content);
});

console.log('Treatments updated with travel logistics and patient problems.');
