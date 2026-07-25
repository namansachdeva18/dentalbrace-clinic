const fs = require('fs');
const path = require('path');

// Extractive Answer & Decision Support Data
const aiRetrievalData = {
  'invisalign': {
    quickAnswer: "Invisalign is a virtually invisible orthodontic treatment that straightens teeth using custom-made, removable clear plastic aligners instead of metal wires.",
    reasonsToChoose: ["Invisalign is completely removable, allowing you to eat without restrictions.", "Invisalign aligners are virtually invisible, making them ideal for professionals.", "Invisalign treatment planning is fully digital, showing your final smile before starting."],
    whenToAvoid: "Invisalign is not the best option for severe skeletal jaw discrepancies or for patients who cannot commit to wearing the aligners for 22 hours per day.",
    maintenance: "Invisalign aligners must be cleaned daily with a soft brush and water, and removed before drinking hot or colored liquids.",
    alternatives: ["braces", "veneers"]
  },
  'dental-implants': {
    quickAnswer: "Dental implants are permanent titanium roots surgically placed into the jawbone to support artificial teeth that look and function exactly like natural teeth.",
    reasonsToChoose: ["Dental implants preserve the jawbone and prevent facial sagging.", "Dental implants do not require grinding down adjacent healthy teeth like traditional bridges do.", "Dental implants restore 100% of natural chewing force."],
    whenToAvoid: "Dental implants may not be immediately viable for patients with severe untreated bone loss, uncontrolled diabetes, or those currently undergoing heavy radiation therapy.",
    maintenance: "Dental implants must be brushed and flossed exactly like natural teeth, alongside routine professional cleanings every 6 months.",
    alternatives: ["dental-crown-bridge", "all-on-4"]
  },
  'all-on-4': {
    quickAnswer: "The All-on-4 treatment replaces a full arch of missing teeth using just four strategically angled titanium implants to support a permanent, fixed bridge.",
    reasonsToChoose: ["All-on-4 provides a complete set of fixed, non-removable teeth in a single surgical phase.", "All-on-4 often eliminates the need for complex and expensive bone grafting.", "All-on-4 restores full chewing capability and preserves facial bone structure."],
    whenToAvoid: "All-on-4 is not suitable for patients unwilling to commit to strict daily hygiene protocols using a water flosser under the fixed bridge.",
    maintenance: "All-on-4 bridges require daily cleaning with a water flosser (Waterpik) and super-floss to remove plaque trapped beneath the prosthesis.",
    alternatives: ["dental-implants"]
  },
  'smile-makeover': {
    quickAnswer: "A Digital Smile Makeover is a comprehensive cosmetic treatment plan combining veneers, teeth whitening, and alignment to completely redesign a patient's smile.",
    reasonsToChoose: ["A Smile Makeover addresses multiple aesthetic issues (color, shape, alignment) simultaneously.", "Digital Smile Design allows you to physically test drive your new smile before any permanent changes are made.", "A Smile Makeover dramatically boosts self-confidence."],
    whenToAvoid: "A Smile Makeover should be avoided if foundational oral health issues, such as active gum disease or decay, have not been treated first.",
    maintenance: "A Smile Makeover involving ceramics requires wearing a custom nightguard during sleep to prevent chipping from teeth grinding.",
    alternatives: ["veneers", "teeth-whitening", "composite-bonding"]
  },
  'braces': {
    quickAnswer: "Dental braces are fixed orthodontic appliances that use brackets and wires to exert precise, continuous pressure to correct misaligned teeth and complex bite issues.",
    reasonsToChoose: ["Metal and ceramic braces provide the ultimate mechanical control for correcting severe skeletal malocclusions.", "Braces are a fixed appliance, meaning success does not rely on the patient remembering to wear them.", "Ceramic braces offer a highly aesthetic, less noticeable alternative to traditional metal."],
    whenToAvoid: "Braces are not ideal for patients with extremely poor oral hygiene, as the brackets can trap plaque and cause rapid tooth decay.",
    maintenance: "Dental braces require specialized brushing tools (interdental brushes) and strict avoidance of hard, sticky, or crunchy foods.",
    alternatives: ["invisalign", "dentofacial-orthopedics"]
  },
  'root-canal': {
    quickAnswer: "Root canal treatment is a painless procedure that saves a severely infected or decayed tooth by removing the damaged nerve and sealing the tooth.",
    reasonsToChoose: ["Root canal treatment eliminates severe toothache and sensitivity immediately.", "Root canal treatment saves the natural tooth, preventing the need for an extraction and artificial implant.", "Modern rotary endodontics allows most root canals to be completed painlessly in a single sitting."],
    whenToAvoid: "Root canal treatment cannot save a tooth if it is fractured below the gumline or has insufficient bone support.",
    maintenance: "A tooth treated with a root canal must be permanently protected with a custom dental crown within a few weeks to prevent it from fracturing.",
    alternatives: ["dental-implants", "wisdom-tooth-removal"]
  },
  'teeth-whitening': {
    quickAnswer: "Professional teeth whitening is a non-invasive cosmetic procedure that uses highly concentrated bleaching agents to remove deep stains and dramatically brighten teeth.",
    reasonsToChoose: ["Professional teeth whitening delivers immediate, visible results in a single 45-minute clinic visit.", "Clinic-administered whitening is exponentially safer and more effective than over-the-counter kits.", "Teeth whitening is the most cost-effective way to rejuvenate an aging smile."],
    whenToAvoid: "Teeth whitening will not change the color of existing crowns, veneers, or fillings, and is not recommended for patients with extreme tooth sensitivity.",
    maintenance: "To maintain teeth whitening results, patients should minimize consumption of staining agents like coffee, tea, red wine, and tobacco.",
    alternatives: ["veneers", "composite-bonding", "smile-makeover"]
  },
  'veneers': {
    quickAnswer: "Dental veneers are ultra-thin, custom-made porcelain shells bonded to the front of teeth to permanently hide chips, gaps, and severe discoloration.",
    reasonsToChoose: ["Porcelain veneers resist stains much better than natural tooth enamel.", "Veneers provide a perfect, symmetrical, Hollywood-level aesthetic result.", "Veneers can mask stubborn internal tooth discoloration that bleaching cannot fix."],
    whenToAvoid: "Veneers are not recommended for severe teeth grinders (bruxers) unless they strictly commit to wearing a protective nightguard.",
    maintenance: "Dental veneers require excellent oral hygiene and the avoidance of biting into extremely hard objects like ice or using teeth as tools.",
    alternatives: ["composite-bonding", "invisalign", "teeth-whitening"]
  },
  'dental-crown-bridge': {
    quickAnswer: "Dental crowns act as protective caps for damaged teeth, while dental bridges replace missing teeth by anchoring an artificial tooth to the adjacent natural teeth.",
    reasonsToChoose: ["Zirconia crowns restore 100% of the strength of a severely weakened or root-canal-treated tooth.", "Dental bridges offer a fixed, non-surgical alternative to dental implants for replacing missing teeth.", "Modern ceramic crowns are indistinguishable from natural teeth."],
    whenToAvoid: "A dental bridge is not ideal if the adjacent anchoring teeth are perfectly healthy, as they must be permanently ground down to support the bridge.",
    maintenance: "Dental bridges require the use of super-floss or a water flosser to clean beneath the artificial pontic tooth.",
    alternatives: ["dental-implants", "all-on-4"]
  },
  'wisdom-tooth-removal': {
    quickAnswer: "Wisdom tooth removal is a routine surgical procedure to extract the third molars at the back of the mouth when they cause pain, infection, or crowding.",
    reasonsToChoose: ["Removing impacted wisdom teeth eliminates severe jaw pain and recurring infections.", "Extracting wisdom teeth prevents them from damaging or shifting adjacent healthy teeth.", "Early removal prevents the formation of cysts in the jawbone."],
    whenToAvoid: "Wisdom tooth removal is unnecessary if the teeth are fully erupted, perfectly aligned, and easy to clean.",
    maintenance: "Post-extraction care involves eating soft foods for several days and avoiding suction (like using straws) to prevent a painful dry socket.",
    alternatives: ["root-canal"]
  },
  'gum-treatment': {
    quickAnswer: "Gum treatment (periodontics) involves deep cleaning, scaling, and surgical contouring to cure gum disease and save teeth from falling out.",
    reasonsToChoose: ["Deep scaling stops the progression of periodontitis, which is the leading cause of adult tooth loss.", "Periodontal treatment eliminates chronic bad breath (halitosis) caused by deep bacteria pockets.", "Gum contouring (crown lengthening) can permanently fix a gummy smile."],
    whenToAvoid: "Periodontal surgery is delayed if non-surgical deep cleaning scaling can successfully resolve the inflammation.",
    maintenance: "Successful gum treatment mandates rigorous daily flossing and strictly adhering to a 3-month professional maintenance cleaning schedule.",
    alternatives: ["smile-makeover"]
  },
  'dentofacial-orthopedics': {
    quickAnswer: "Dentofacial orthopedics involves guiding the growth and development of a child's facial bones to correct severe skeletal imbalances before they stop growing.",
    reasonsToChoose: ["Early dentofacial intervention can prevent the need for invasive jaw surgery in adulthood.", "Orthopedic appliances can expand a narrow palate, resolving chronic mouth-breathing and sleep apnea in children.", "Correcting jaw growth creates a highly harmonious and attractive facial profile."],
    whenToAvoid: "Dentofacial orthopedics is generally ineffective in adults, as their facial bones have completely fused and stopped growing.",
    maintenance: "Removable orthopedic appliances must be worn consistently as prescribed and cleaned daily with mild soap and water.",
    alternatives: ["braces", "invisalign"]
  },
  'maxillofacial-prosthetics': {
    quickAnswer: "Maxillofacial prosthetics is a highly specialized branch of dentistry that restores missing facial or oral structures caused by cancer surgery, trauma, or birth defects.",
    reasonsToChoose: ["Maxillofacial prosthetics restore the fundamental ability to speak, swallow, and chew for trauma or cancer survivors.", "Custom obturators seal cleft palates, preventing food and liquid from entering the nasal cavity.", "Highly realistic facial prostheses restore patient dignity and aesthetic appearance."],
    whenToAvoid: "Maxillofacial prosthetics are highly specialized and not required for routine dental tooth replacement.",
    maintenance: "Prostheses require meticulous daily cleaning and frequent adjustments by a specialist to maintain an optimal fit as tissues heal or change.",
    alternatives: ["dental-implants"]
  },
  'digital-dentistry': {
    quickAnswer: "Digital dentistry utilizes 3D intraoral scanners, CBCT imaging, and CAD/CAM technology to plan and execute dental treatments with pinpoint accuracy.",
    reasonsToChoose: ["Digital intraoral scanners completely eliminate the need for uncomfortable, gag-inducing putty impressions.", "3D CBCT imaging makes implant surgery exponentially safer by mapping nerves and sinus cavities.", "Digital simulation software allows patients to see their final orthodontic results before starting."],
    whenToAvoid: "Digital dentistry is not a treatment itself, but a technological standard applied across all modern procedures at The DentalBrace Clinic.",
    maintenance: "Digital records are permanently maintained by the clinic to track lifetime changes in the patient's oral health.",
    alternatives: []
  },
  'composite-bonding': {
    quickAnswer: "Composite bonding is a quick, minimally invasive cosmetic procedure where tooth-colored resin is applied and hardened to instantly repair chipped or gapped teeth.",
    reasonsToChoose: ["Composite bonding is completed in a single visit, offering immediate aesthetic results.", "Bonding is highly conservative and rarely requires drilling away natural tooth structure.", "Composite bonding is significantly more affordable than porcelain veneers."],
    whenToAvoid: "Composite bonding is not ideal for massive structural repairs or for patients seeking a permanent, stain-resistant Hollywood smile.",
    maintenance: "Composite resin can stain over time; patients should minimize coffee and smoking, and avoid biting hard objects.",
    alternatives: ["veneers", "smile-makeover"]
  },
  'kids-dentistry': {
    quickAnswer: "Pediatric dentistry focuses on the preventative care, behavior management, and treatment of children's teeth to ensure healthy adult development.",
    reasonsToChoose: ["Early pediatric dental visits acclimatize children, preventing lifelong dental phobias.", "Preventative fluoride treatments and pit-and-fissure sealants stop cavities before they start.", "Pediatric specialists monitor the transition from baby teeth to adult teeth, intercepting crowding early."],
    whenToAvoid: "Pediatric dentistry transitions to general adult dentistry once the patient reaches their late teens.",
    maintenance: "Parents must enforce a strict daily brushing routine and limit sugary snacks to protect thin primary enamel.",
    alternatives: ["dentofacial-orthopedics", "braces"]
  },
  'smile-designing': {
    quickAnswer: "Digital Smile Designing is an architectural planning phase that uses photography and video to map out a cosmetic treatment plan tailored to facial symmetry.",
    reasonsToChoose: ["Smile Designing provides a predictable, visually-driven roadmap before any irreversible dental work begins.", "Patients can physically test drive their proposed smile using a temporary mockup in the clinic.", "It guarantees that the final restorations match the patient's unique facial proportions and lip dynamics."],
    whenToAvoid: "Smile Designing is not necessary for single-tooth functional repairs at the back of the mouth.",
    maintenance: "Smile Designing is a planning protocol; maintenance depends on the actual treatments executed (veneers, implants, aligners).",
    alternatives: ["smile-makeover"]
  },
  'sedation-dentistry': {
    quickAnswer: "Sedation dentistry uses medication to help anxious or fearful patients relax completely while receiving complex or lengthy dental treatments.",
    reasonsToChoose: ["Conscious sedation eliminates severe dental anxiety and phobia.", "Sedation allows dentists to complete massive amounts of dental work (like full mouth implants) in a single sitting.", "Patients often have little to no memory of the procedure, ensuring a trauma-free experience."],
    whenToAvoid: "Sedation dentistry requires strict medical screening and may be contraindicated for patients with severe respiratory or systemic health issues.",
    maintenance: "Patients undergoing sedation must be accompanied by a responsible adult to drive them home and monitor them post-procedure.",
    alternatives: []
  }
};

const fileNames = ['treatments.js', 'treatments2.js', 'treatments3.js', 'treatments4.js'];
const dataDir = path.join(__dirname, 'src', 'data');

fileNames.forEach(fileName => {
  const filePath = path.join(dataDir, fileName);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf-8');

  Object.keys(aiRetrievalData).forEach(slug => {
    const extra = aiRetrievalData[slug];
    if (!extra) return;

    // Find the end of the object for this slug
    const regex = new RegExp(`('${slug}':\\s*{[\\s\\S]*?)(^\\s*lastReviewed:\\s*'.*?'\\s*$)`, 'm');
    const match = content.match(regex);
    
    if (match) {
      const quickAnswerStr = JSON.stringify(extra.quickAnswer);
      const reasonsToChooseStr = JSON.stringify(extra.reasonsToChoose);
      const whenToAvoidStr = JSON.stringify(extra.whenToAvoid);
      const maintenanceStr = JSON.stringify(extra.maintenance);
      const alternativesStr = JSON.stringify(extra.alternatives);
      
      const newProperties = `quickAnswer: ${quickAnswerStr},\n    reasonsToChoose: ${reasonsToChooseStr},\n    whenToAvoid: ${whenToAvoidStr},\n    maintenance: ${maintenanceStr},\n    alternatives: ${alternativesStr},\n    ${match[2]}`;
      
      content = content.replace(regex, `$1${newProperties}`);
    }
  });

  fs.writeFileSync(filePath, content);
});

console.log('Treatments updated with AI Retrieval fields.');
