export const conditionsTaxonomy = {
  orthodontic: {
    title: 'Orthodontic Conditions',
    conditions: ['malocclusion', 'diastema']
  },
  toothLoss: {
    title: 'Tooth Loss',
    conditions: ['edentulism']
  },
  gum: {
    title: 'Gum Conditions',
    conditions: ['periodontitis']
  },
  pain: {
    title: 'Pain & Infection',
    conditions: ['pericoronitis']
  },
  cosmetic: {
    title: 'Cosmetic Concerns',
    conditions: []
  }
};

const conditionsData = {
  'malocclusion': {
    title: 'Malocclusion (Overbite, Underbite & Crowding)',
    slug: 'malocclusion',
    category: 'orthodontic',
    quickOverview: 'Malocclusion refers to the misalignment of teeth or incorrect relation between the upper and lower dental arches when the jaw is closed.',
    signsAndSymptoms: ['Teeth that appear crooked or crowded', 'Frequent biting of the inner cheeks or tongue', 'Discomfort when chewing or biting', 'Speech changes, such as a lisp', 'Mouth breathing'],
    possibleCauses: ['Genetics and inherited jaw size differences', 'Childhood habits (thumb sucking, prolonged pacifier use)', 'Early loss of primary (baby) teeth', 'Airway obstruction (enlarged tonsils/adenoids)'],
    riskFactors: ['Family history of jaw misalignment', 'Chronic mouth breathing', 'Cleft lip or palate'],
    untreatedConsequences: 'If left untreated, severe malocclusion can lead to excessive wear on tooth enamel, difficulty maintaining oral hygiene (increasing decay risk), and chronic TMJ (jaw joint) pain.',
    monitoringGuidance: 'Mild crowding that does not affect chewing or cleaning can often be monitored during routine checkups.',
    evaluationRecommendation: 'An orthodontic evaluation is recommended for children around age 7, or for adults experiencing bite discomfort or aesthetic concerns.',
    urgentCare: 'Seek urgent care if a severely misaligned bite causes acute jaw locking or severe pain while eating.',
    diagnosis: 'Diagnosed through a clinical examination, 3D intraoral scanning, panoramic X-rays (OPG), and cephalometric analysis to assess jaw relationships.',
    treatmentOptions: ['Invisalign Clear Aligners', 'Metal or Ceramic Braces', 'Dentofacial Orthopedics (for growing children)'],
    treatmentComparison: 'While braces offer maximum mechanical control for complex skeletal malocclusions, Invisalign provides a highly aesthetic, removable alternative for mild to moderate cases.',
    recoveryExpectations: 'Orthodontic movement causes mild, temporary soreness for 2-3 days after adjustments or new aligner trays. Full treatment spans 6-24 months.',
    faqs: [
      { q: 'Can malocclusion fix itself?', a: 'No, structural jaw and tooth misalignment requires mechanical intervention to correct.' },
      { q: 'Am I too old to fix my bite?', a: 'No, healthy teeth can be moved at any age. Many adults successfully undergo treatment for malocclusion.' }
    ],
    relatedTreatments: ['invisalign', 'braces', 'dentofacial-orthopedics'],
    relatedDoctors: ['Dr. Sandeep Kumar'],
    relatedConditions: ['diastema'],
    medicalDisclaimer: 'Treatment timelines and biological responses vary. Severe skeletal malocclusion in adults may require orthognathic surgery in combination with orthodontics.',
    scientificReferences: ['American Association of Orthodontists (AAO) Clinical Guidelines']
  },
  'edentulism': {
    title: 'Edentulism (Missing Teeth)',
    slug: 'edentulism',
    category: 'toothLoss',
    quickOverview: 'Edentulism is the partial or complete absence of natural teeth, profoundly affecting chewing function, speech, and facial aesthetics.',
    signsAndSymptoms: ['Visible gaps in the smile', 'Difficulty chewing hard or fibrous foods', 'Slurred speech or changes in pronunciation', 'Sunken facial appearance around the lips and cheeks'],
    possibleCauses: ['Untreated severe periodontal (gum) disease', 'Deep dental decay leading to extraction', 'Facial trauma or sports injuries', 'Congenital absence of teeth (Hypodontia)'],
    riskFactors: ['Poor oral hygiene', 'Smoking or tobacco use', 'Uncontrolled diabetes', 'Aging'],
    untreatedConsequences: 'Missing teeth cause the surrounding jawbone to resorb (melt away) over time. Adjacent healthy teeth will slowly drift into the empty space, severely destabilizing the bite.',
    monitoringGuidance: 'Missing teeth should not be left unmonitored, as bone loss begins immediately following an extraction.',
    evaluationRecommendation: 'Immediate evaluation is recommended to discuss replacement options and preserve the jawbone architecture.',
    urgentCare: 'Urgent care is required if a tooth is traumatically knocked out (avulsed) to attempt re-implantation within the first hour.',
    diagnosis: 'Diagnosed visually and supported by 3D CBCT scans to assess the volume and density of the remaining jawbone for potential implant placement.',
    treatmentOptions: ['Dental Implants', 'All-on-4 Fixed Arch', 'Dental Bridges'],
    treatmentComparison: 'Implants permanently replace the tooth root and preserve bone. Bridges are faster but require grinding down adjacent healthy teeth. Removable dentures are the least stable option.',
    recoveryExpectations: 'Implant surgery involves a 3-6 month osseointegration (healing) phase before final teeth are attached. Mild swelling subsides within a week.',
    faqs: [
      { q: 'What happens if I do not replace a missing back tooth?', a: 'The opposing tooth will over-erupt into the space, and adjacent teeth will tilt, leading to widespread bite collapse.' },
      { q: 'Can I get an implant years after losing a tooth?', a: 'Yes, though significant bone grafting may be required if the jawbone has resorbed over time.' }
    ],
    relatedTreatments: ['dental-implants', 'all-on-4', 'dental-crown-bridge'],
    relatedDoctors: ['Dr. Ritu Saneja'],
    relatedConditions: ['periodontitis'],
    medicalDisclaimer: 'Implant candidacy depends strictly on sufficient bone density and systemic health (e.g., controlled blood sugar).',
    scientificReferences: ['International Team for Implantology (ITI) Consensus Statements']
  },
  'periodontitis': {
    title: 'Periodontitis (Severe Gum Disease)',
    slug: 'periodontitis',
    category: 'gum',
    quickOverview: 'Periodontitis is a serious, progressive bacterial infection that destroys the soft tissue and bone that support your teeth.',
    signsAndSymptoms: ['Swollen, red, or tender gums', 'Gums that bleed easily when brushing or flossing', 'Persistent bad breath (halitosis)', 'Receding gums making teeth look longer', 'Loose or shifting teeth'],
    possibleCauses: ['Accumulation of hardened plaque (tartar) below the gumline', 'Aggressive bacterial strains', 'Poor daily oral hygiene'],
    riskFactors: ['Smoking', 'Type 2 Diabetes', 'Genetics', 'Certain medications that reduce saliva flow'],
    untreatedConsequences: 'If left untreated, periodontitis unequivocally leads to jawbone destruction and the permanent loss of multiple natural teeth. It is also linked to systemic issues like cardiovascular disease.',
    monitoringGuidance: 'Mild, occasional bleeding (gingivitis) can be monitored with improved home care, but should resolve within two weeks.',
    evaluationRecommendation: 'Professional evaluation is critical if bleeding is chronic, or if you notice any teeth becoming loose.',
    urgentCare: 'Seek immediate care if you develop a painful, swollen periodontal abscess (pus) in the gums.',
    diagnosis: 'Diagnosed through clinical periodontal probing (measuring pocket depths around teeth) and X-rays to visualize bone loss.',
    treatmentOptions: ['Deep Gum Cleaning (Scaling & Root Planing)', 'Periodontal Flap Surgery', 'Dental Implants (if teeth are unsalvageable)'],
    treatmentComparison: 'Scaling is the non-surgical first line of defense. Advanced bone loss requires surgical intervention to clean deep pockets that instruments cannot reach.',
    recoveryExpectations: 'Gums will feel tender for a few days after deep cleaning. Strict 3-month maintenance visits are required to prevent relapse.',
    faqs: [
      { q: 'Can periodontitis be cured?', a: 'It cannot be fully cured if bone is lost, but it can be successfully arrested and managed with professional care.' },
      { q: 'Is bleeding normal when flossing?', a: 'No. Healthy gums do not bleed. Bleeding is the first sign of bacterial inflammation.' }
    ],
    relatedTreatments: ['gum-treatment', 'dental-implants'],
    relatedDoctors: ['Dr. Ritu Saneja', 'Dr. Sandeep Kumar'],
    relatedConditions: ['edentulism'],
    medicalDisclaimer: 'Systemic health conditions heavily influence periodontal healing. Smoking drastically reduces the success rate of gum treatments.',
    scientificReferences: ['American Academy of Periodontology (AAP)']
  },
  'diastema': {
    title: 'Diastema (Gaps Between Teeth)',
    slug: 'diastema',
    category: 'orthodontic',
    quickOverview: 'A diastema is a noticeable gap or space between two or more teeth, most commonly occurring between the two upper front teeth.',
    signsAndSymptoms: ['Visible space between teeth', 'Food getting trapped between teeth', 'Aesthetic self-consciousness'],
    possibleCauses: ['Discrepancy between jaw size and tooth size', 'An oversized labial frenum (tissue connecting lip to gums)', 'Missing or undersized teeth (e.g., peg laterals)', 'Thumb sucking or tongue thrusting'],
    riskFactors: ['Genetics', 'Severe gum disease causing teeth to fan out'],
    untreatedConsequences: 'Most diastemas are harmless and purely aesthetic. However, large gaps caused by gum disease or missing teeth can lead to bite instability and further spacing.',
    monitoringGuidance: 'Gaps in children who have a mix of baby and adult teeth often close naturally as permanent canines erupt.',
    evaluationRecommendation: 'Evaluation is recommended for adults unhappy with their smile aesthetics, or if the gap traps food causing localized gum inflammation.',
    urgentCare: 'Diastemas are rarely dental emergencies. Seek care only if the gap suddenly opens rapidly accompanied by tooth mobility.',
    diagnosis: 'Diagnosed visually. X-rays may be taken to rule out hidden supernumerary (extra) teeth or cysts preventing closure.',
    treatmentOptions: ['Invisalign Clear Aligners', 'Composite Bonding', 'Porcelain Veneers'],
    treatmentComparison: 'Invisalign physically moves the roots to close the space (healthiest). Composite bonding artificially widens the teeth (fastest). Veneers provide the most durable aesthetic transformation.',
    recoveryExpectations: 'Bonding and veneers offer immediate results with zero downtime. Orthodontic closure takes several months.',
    faqs: [
      { q: 'Will the gap reopen after treatment?', a: 'If closed orthodontically, you must wear a retainer. If a thick frenum caused the gap, a minor frenectomy may be needed to prevent relapse.' }
    ],
    relatedTreatments: ['invisalign', 'composite-bonding', 'veneers'],
    relatedDoctors: ['Dr. Sandeep Kumar'],
    relatedConditions: ['malocclusion'],
    medicalDisclaimer: 'Closing a gap with bonding will make the adjacent teeth appear wider; a digital smile design is recommended to ensure proportions remain natural.',
    scientificReferences: []
  },
  'pericoronitis': {
    title: 'Pericoronitis (Impacted Wisdom Tooth Infection)',
    slug: 'pericoronitis',
    category: 'pain',
    quickOverview: 'Pericoronitis is a painful inflammation and infection of the gum tissue overlying a partially erupted wisdom tooth.',
    signsAndSymptoms: ['Severe, throbbing pain at the back of the jaw', 'Swollen gum flap (operculum) over the tooth', 'Difficulty opening the mouth (trismus)', 'Foul taste or odor in the mouth', 'Swollen lymph nodes in the neck'],
    possibleCauses: ['Food debris and bacteria becoming trapped under the gum flap of a wisdom tooth that does not have enough room to fully erupt.'],
    riskFactors: ['Age 17-25 (wisdom tooth eruption age)', 'Poor oral hygiene at the back of the mouth', 'Upper respiratory tract infections (can exacerbate it)'],
    untreatedConsequences: 'The infection can spread rapidly into the deep spaces of the neck and throat, becoming a severe, potentially life-threatening systemic infection.',
    monitoringGuidance: 'Mild, transient discomfort during normal wisdom tooth eruption can be monitored for a few days with warm salt water rinses.',
    evaluationRecommendation: 'Immediate professional evaluation is necessary if the pain is severe or prevents you from eating or sleeping.',
    urgentCare: 'Seek emergency medical/dental care if you experience a fever, chills, or difficulty swallowing or breathing.',
    diagnosis: 'Diagnosed clinically by examining the inflamed tissue. An OPG X-ray is required to determine the exact angle and impaction depth of the wisdom tooth.',
    treatmentOptions: ['Wisdom Tooth Removal (Extraction)', 'Operculectomy (Removal of the gum flap)'],
    treatmentComparison: 'Removing the gum flap alone often leads to relapse. Extracting the offending wisdom tooth provides a permanent cure.',
    recoveryExpectations: 'Post-extraction healing takes 1-2 weeks. Swelling peaks at 48 hours. Soft diet is required.',
    faqs: [
      { q: 'Can antibiotics cure pericoronitis?', a: 'Antibiotics only suppress the acute infection temporarily. They do not remove the physical cause (the trapped food/tooth).' },
      { q: 'Do all wisdom teeth need to be removed?', a: 'No, only those that are impacted, infected, or damaging adjacent teeth.' }
    ],
    relatedTreatments: ['wisdom-tooth-removal', 'digital-dentistry'],
    relatedDoctors: ['Dr. Sandeep Kumar'],
    relatedConditions: [],
    medicalDisclaimer: 'Lower wisdom tooth extraction carries a slight risk of temporary numbness to the lip and tongue (paresthesia), which is assessed using 3D CBCT scans prior to surgery.',
    scientificReferences: ['American Association of Oral and Maxillofacial Surgeons (AAOMS)']
  }
};

export default conditionsData;
