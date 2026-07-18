import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, Phone, Activity, Clock, ShieldCheck, ArrowLeft, ArrowRight } from 'lucide-react';
import './TreatmentTemplate.css';

// ─── Keyword Highlighter Helper ────────────────────────────────────────────────
const highlightKeywords = (text) => {
  if (!text) return null;
  if (typeof text !== 'string') return text;
  
  const keywords = [
    'Bathinda', 'Punjab', 
    'Dr. Sandeep Kumar', 'Dr. Ritu Saneja', 'Gold Medalist', 'Ex-Resident', 'AIIMS', 'PGIMER',
    'Invisalign', 'Clear Aligners', 'Dental Implants', 'All-on-4', 'Smile Makeover',
    '5500+', '5000+', 'painless', 'permanent', 'virtually invisible'
  ];
  
  const sortedKeywords = keywords.sort((a, b) => b.length - a.length);
  const regexPattern = new RegExp(`(${sortedKeywords.map(k => k.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')).join('|')})`, 'gi');
  
  const parts = text.split(regexPattern);
  return parts.map((part, i) => {
    if (sortedKeywords.some(kw => kw.toLowerCase() === part.toLowerCase())) {
      const isAccent = ['Dr. Sandeep Kumar', 'Dr. Ritu Saneja', 'Gold Medalist', 'Invisalign', 'All-on-4', '5500+', '5000+'].some(kw => kw.toLowerCase() === part.toLowerCase());
      return <strong key={i} className={isAccent ? 'text-accent font-bold' : 'font-bold text-primary'}>{part}</strong>;
    }
    return part;
  });
};

// ─── All Treatment Data ────────────────────────────────────────────────────────
const treatmentData = {

  'invisalign': {
    title: 'Invisalign in Bathinda',
    subtitle: 'Straighten your teeth without anyone knowing. Bathinda\'s most experienced Invisalign provider — 5500+ cases.',
    metaTitle: 'Invisalign in Bathinda | Best Invisalign Provider | Dr. Sandeep Kumar | The DentalBrace',
    metaDesc: 'Get Invisalign clear aligners in Bathinda from Dr. Sandeep Kumar — 5500+ cases, certified Invisalign provider, Ex-AIIMS. Virtually invisible braces. Book consultation ₹200/-.',
    overview: 'Invisalign is the world\'s most advanced clear aligner system — a series of custom-made, virtually invisible removable trays that gradually straighten your teeth without metal brackets or wires. At The DentalBrace Clinic, Invisalign is performed by Dr. Sandeep Kumar (MDS Orthodontics, BHU Varanasi, Ex-Resident AIIMS New Delhi) — Bathinda\'s certified Invisalign provider with 5500+ aligner cases. Each set of aligners is worn for 1–2 weeks before progressing to the next, moving your teeth with precision until your smile is perfectly aligned. No food restrictions. No discomfort. No one will know you\'re in treatment.',
    symptoms: ['Crowded or overlapping teeth', 'Gaps between teeth (diastema)', 'Overbite, underbite, or crossbite', 'Protruding front teeth', 'Relapsed teeth after previous braces'],
    idealFor: 'Teenagers and adults who want straight teeth discreetly, without the appearance of metal braces. Especially popular with working professionals, brides, and students.',
    benefits: ['Virtually invisible — no one will notice', 'Removable — eat anything, brush normally', '5500+ cases by Dr. Sandeep Kumar', 'Faster than traditional braces in many cases', 'Digital preview of final smile before starting', 'Comfortable smooth plastic — no wire irritation'],
    technology: 'Invisalign SmartTrack Material, iTero 3D Intraoral Scanner, ClinCheck Treatment Simulation Software',
    duration: '12–18 Months (mild cases: 6–9 months)',
    recovery: 'None — wear aligners 22 hrs/day',
    doctor: 'Dr. Sandeep Kumar',
    process: [
      { step: 1, title: 'iTero 3D Scan', desc: 'We take a precise 3D digital scan of your teeth — no putty impressions.' },
      { step: 2, title: 'ClinCheck Preview', desc: 'You see a digital simulation of your tooth movement and final smile result before starting.' },
      { step: 3, title: 'Aligner Fabrication', desc: 'Your custom aligners are precision-milled at Invisalign\'s facility and shipped to the clinic.' },
      { step: 4, title: 'Fitting & Instructions', desc: 'Dr. Sandeep fits your first set of aligners and explains the wear protocol.' },
      { step: 5, title: 'Progress Checkups', desc: 'Every 6–8 weeks, you collect new aligner sets and we track your progress.' },
      { step: 6, title: 'Retainers', desc: 'After treatment, retainers are provided to maintain your new smile permanently.' }
    ],
    faqs: [
      { q: 'How much does Invisalign cost in Bathinda?', a: 'Invisalign cost varies by case complexity and number of aligners needed. Book a consultation (₹200/-) for a personalized quote. We offer EMI options.' },
      { q: 'Is Invisalign as effective as braces?', a: 'For most cases — yes. Invisalign can treat the same conditions as braces including crowding, gaps, overbite, and underbite. Dr. Sandeep will assess your case and recommend the best option.' },
      { q: 'Can I eat normally with Invisalign?', a: 'Yes! Remove the aligners before eating and drinking (except water). Brush, floss, and put them back. No food restrictions at all.' },
      { q: 'How long does Invisalign take?', a: 'Most cases complete in 12–18 months. Mild cases can take as little as 6 months. Dr. Sandeep will give you a precise timeline based on your 3D scan.' }
    ]
  },

  'dental-implants': {
    title: 'Dental Implants in Bathinda',
    subtitle: 'The permanent solution for missing teeth. 5000+ implants placed by Dr. Ritu Saneja (Gold Medalist).',
    metaTitle: 'Dental Implants in Bathinda | Best Implant Clinic | Dr. Ritu Saneja | The DentalBrace',
    metaDesc: 'Get dental implants in Bathinda from Dr. Ritu Saneja — Gold Medalist, Ex-AIIMS, 5000+ implants placed. Permanent, natural-looking tooth replacement. Book ₹200/-.',
    overview: 'A dental implant is a small titanium screw surgically placed into the jawbone to replace the root of a missing tooth. Once integrated, a custom crown is attached on top — creating a replacement tooth that looks, feels, and functions exactly like a natural tooth. At The DentalBrace Clinic, implants are placed by Dr. Ritu Saneja (MDS Gold Medalist, Ex-Resident AIIMS Delhi & PGIMER Chandigarh) who has placed over 5,000 implants. We use only premium-grade implants with a 99%+ success rate and offer a 5-year guarantee.',
    symptoms: ['One or more missing teeth', 'Tooth extracted or knocked out', 'Loose or failing dental bridge', 'Dentures that don\'t fit comfortably', 'Bone loss from long-standing tooth gap'],
    idealFor: 'Anyone with one or more missing teeth who wants a permanent, fixed solution that doesn\'t involve grinding adjacent teeth (unlike a bridge). Suitable for adults of any age with adequate bone.',
    benefits: ['Permanent solution — lasts a lifetime', 'Looks and feels like a natural tooth', 'Preserves jawbone — prevents bone loss', '99%+ success rate with premium titanium', 'No impact on adjacent teeth', '5-year clinic guarantee'],
    technology: 'Premium Titanium Implant Systems, CBCT 3D Imaging, Digital Implant Placement Planning, CAD/CAM Zirconia Crowns',
    duration: 'Implant: 45–60 min | Crown: 2 appointments after 3–6 months',
    recovery: '3–5 days mild soreness post-surgery',
    doctor: 'Dr. Ritu Saneja',
    process: [
      { step: 1, title: 'CBCT 3D Scan', desc: 'A 3D cone beam CT scan maps your bone structure for precise implant placement planning.' },
      { step: 2, title: 'Treatment Planning', desc: 'Dr. Ritu designs the exact position, angle, and depth of your implant digitally.' },
      { step: 3, title: 'Implant Surgery', desc: 'Under local anaesthesia, the titanium implant is placed into the jawbone. Takes 45–60 minutes.' },
      { step: 4, title: 'Osseointegration', desc: 'The implant fuses with the jawbone over 3–6 months — this creates a permanent foundation.' },
      { step: 5, title: 'Crown Placement', desc: 'A custom zirconia or ceramic crown is attached to the implant — your new tooth is complete.' }
    ],
    faqs: [
      { q: 'Are dental implants painful?', a: 'The procedure is done under local anaesthesia — you feel no pain during surgery. Mild soreness for 3–5 days after is normal and managed with prescribed pain medication.' },
      { q: 'How long do dental implants last?', a: 'With proper oral hygiene and regular checkups, dental implants can last a lifetime. The crown typically lasts 15–20 years.' },
      { q: 'What is the cost of a dental implant in Bathinda?', a: 'Implant costs vary by brand, type, and number of implants. Book a ₹200/- consultation for a detailed cost breakdown with EMI options.' },
      { q: 'Can anyone get dental implants?', a: 'Most adults are candidates. We evaluate bone density, gum health, and medical history. Patients with uncontrolled diabetes or very low bone volume may require pre-treatment.' }
    ]
  },

  'all-on-4': {
    title: 'All-on-4 Dental Implants in Bathinda',
    subtitle: 'Get a complete set of fixed teeth in just one day — All-on-4 full arch implants by Dr. Ritu Saneja.',
    metaTitle: 'All-on-4 Dental Implants in Bathinda | Full Mouth Implants | The DentalBrace',
    metaDesc: 'All-on-4 full arch dental implants in Bathinda by Dr. Ritu Saneja (Gold Medalist, 5000+ implants). Fixed permanent teeth in 1 day. Full mouth rehabilitation. Book ₹200/-.',
    overview: 'All-on-4 is a revolutionary implant technique that replaces an entire arch of missing teeth (12–14 teeth) using just four strategically placed implants. Compared to conventional full dentures or replacing each tooth individually, All-on-4 provides a permanently fixed solution in a single day. The four implants are placed at precise angles to maximize contact with available bone — meaning even patients with significant bone loss who were told they\'re "not candidates" for implants can often still benefit. Dr. Ritu Saneja has performed hundreds of All-on-4 procedures with exceptional success.',
    symptoms: ['Multiple or all teeth missing in upper or lower jaw', 'Loose or ill-fitting full dentures', 'Significant tooth decay requiring full extraction', 'Severe gum disease causing multiple tooth loss', 'Old fixed bridges that have failed'],
    idealFor: 'Patients who have lost all or most of their teeth in one or both jaws and want a permanent, fixed solution — not removable dentures.',
    benefits: ['Full arch of teeth supported on just 4 implants', 'Fixed — never remove like dentures', 'Eat any food immediately after healing', 'Natural appearance & full chewing ability', 'Preserves jawbone — prevents facial collapse', 'Often possible even with bone loss'],
    technology: 'CBCT 3D Bone Mapping, Guided Implant Surgery, Immediate Loading Protocol, CAD/CAM Full-Arch Prosthesis',
    duration: 'Surgery: 2–3 hours | Temporary teeth same day',
    recovery: '1 week significant healing, 3 months full integration',
    doctor: 'Dr. Ritu Saneja',
    process: [
      { step: 1, title: 'Full Mouth CBCT Scan', desc: 'A 3D scan evaluates available bone quantity and quality across the entire jaw.' },
      { step: 2, title: 'Digital Treatment Planning', desc: 'Implant positions are planned virtually to maximize bone contact and load distribution.' },
      { step: 3, title: 'Extraction (if needed)', desc: 'Any remaining failing teeth are extracted on the day of surgery.' },
      { step: 4, title: 'Implant Placement', desc: 'All four implants are placed in one session under local anaesthesia or sedation.' },
      { step: 5, title: 'Immediate Temporary Teeth', desc: 'A temporary full-arch bridge is attached the same day — you leave with functional teeth.' },
      { step: 6, title: 'Permanent Prosthesis', desc: 'After 3–6 months, a final premium zirconia or porcelain prosthesis is fitted.' }
    ],
    faqs: [
      { q: 'What is the difference between All-on-4 and All-on-6?', a: 'All-on-4 uses 4 implants to support a full arch; All-on-6 uses 6. More implants provide slightly better force distribution, which may be recommended for patients with very high bite force or softer bone.' },
      { q: 'Can I get All-on-4 if I have bone loss?', a: 'Often yes. The two back implants are tilted at 45° to engage more bone — this frequently allows All-on-4 even where conventional implants wouldn\'t work. We evaluate with a 3D CBCT scan.' },
      { q: 'Will I leave the clinic with teeth?', a: 'Yes. In most All-on-4 cases, you receive a temporary full-arch bridge on the same day of surgery using the immediate loading protocol.' },
      { q: 'How long does All-on-4 last?', a: 'The titanium implants can last a lifetime with proper care. The prosthesis (full arch bridge) may need replacement after 15–20 years.' }
    ]
  },

  'smile-makeover': {
    title: 'Smile Makeover in Bathinda',
    subtitle: 'A completely customised cosmetic transformation designed digitally for your face — see results before treatment begins.',
    metaTitle: 'Smile Makeover in Bathinda | Digital Smile Design | Cosmetic Dentist | The DentalBrace',
    metaDesc: 'Get a complete smile makeover in Bathinda by Dr. Ritu Saneja (Gold Medalist). Veneers, whitening, gum contouring & composite bonding — designed digitally. Book ₹200/-.',
    overview: 'A smile makeover is a comprehensive, fully customised plan that combines multiple cosmetic dental procedures to transform your smile completely. At The DentalBrace Clinic, every smile makeover begins with Digital Smile Design (DSD) — a technology that maps your facial proportions and lets you preview your exact results before any treatment begins. Dr. Ritu Saneja (MDS Gold Medalist) then combines the appropriate procedures — veneers, teeth whitening, composite bonding, gum contouring, and crowns — to achieve your ideal smile in the minimum number of appointments.',
    symptoms: ['Multiple cosmetic concerns at once', 'Discoloured and misshapen teeth', 'Chipped or cracked front teeth', 'Gummy smile or uneven gum line', 'Gaps, crowding, or uneven tooth sizes'],
    idealFor: 'Patients planning for a wedding, important event, or simply wanting to invest in a complete, permanent smile transformation. Best for those with 2+ cosmetic concerns.',
    benefits: ['Digital preview before any treatment', 'Custom designed for YOUR face', 'Multiple issues fixed in one plan', 'Long-lasting results (10–15 years)', 'Performed by Gold Medalist Dr. Ritu Saneja', 'No cookie-cutter approach — fully bespoke'],
    technology: 'Digital Smile Design (DSD) Software, 3D Intraoral Scanner, CAD/CAM Porcelain Milling, LED Whitening System',
    duration: '2–4 appointments depending on scope',
    recovery: 'Immediate for most procedures',
    doctor: 'Dr. Ritu Saneja',
    process: [
      { step: 1, title: 'Smile Analysis', desc: 'Full-face photos, video analysis, and 3D scans capture your current smile and facial proportions.' },
      { step: 2, title: 'Digital Design', desc: 'Your ideal smile is designed digitally and overlaid on your own photo for visualization.' },
      { step: 3, title: 'Wax Mockup', desc: 'A physical wax mockup placed in your mouth lets you "test drive" your new smile before committing.' },
      { step: 4, title: 'Treatment Execution', desc: 'Each procedure (whitening, veneers, bonding, contouring) is performed in sequence.' },
      { step: 5, title: 'Final Reveal', desc: 'The completed smile is revealed — matching exactly the digital design you approved.' }
    ],
    faqs: [
      { q: 'How many appointments does a smile makeover take?', a: 'Typically 2–4 appointments spread over 2–3 weeks, depending on which procedures are included. Dr. Ritu plans the sequence for maximum efficiency.' },
      { q: 'Can I see what my smile will look like before treatment?', a: 'Yes — Digital Smile Design (DSD) lets you see your new smile on your own photo before any treatment begins. A physical wax mockup is also created for you to try.' },
      { q: 'How long does a smile makeover last?', a: 'Porcelain veneers last 10–15 years. Whitening lasts 1–2 years. Composite bonding lasts 5–7 years. We design the plan to be as long-lasting as possible.' },
      { q: 'Is a smile makeover painful?', a: 'No. All procedures are performed under local anaesthesia where needed. Most patients are back to normal activities the same day.' }
    ]
  },

  'braces': {
    title: 'Braces in Bathinda',
    subtitle: 'Metal, ceramic & lingual braces — the most reliable path to a perfect smile, by Dr. Sandeep Kumar (Ex-AIIMS).',
    metaTitle: 'Braces in Bathinda | Metal, Ceramic & Lingual Braces | Dr. Sandeep Kumar | The DentalBrace',
    metaDesc: 'Get braces treatment in Bathinda by Dr. Sandeep Kumar — MDS Orthodontics (BHU), Ex-Resident AIIMS. Metal, ceramic, and lingual braces. 5500+ cases. Book ₹200/-.',
    overview: 'Traditional braces remain the most reliable, predictable, and cost-effective orthodontic treatment for a wide range of dental issues. At The DentalBrace Clinic, braces are placed and managed by Dr. Sandeep Kumar — an MDS-qualified orthodontist (BHU Varanasi) and Ex-Resident of AIIMS New Delhi with 5500+ cases of experience. We offer three types: metal braces (most effective for complex cases), ceramic braces (tooth-colored for a discreet look), and lingual braces (hidden entirely behind the teeth — completely invisible from outside). All braces are of the highest quality, with Damon self-ligating brackets available for faster treatment.',
    symptoms: ['Crowded or overlapping teeth', 'Protruding front teeth', 'Deep overbite or open bite', 'Crossbite or underbite', 'Wide gaps between teeth', 'Jaw misalignment affecting bite'],
    idealFor: 'Patients of all ages with moderate to complex orthodontic issues. Also the most affordable option for comprehensive teeth straightening. Children (7+), teenagers, and adults all benefit.',
    benefits: ['Highly effective for all case complexities', 'Fastest treatment for complex cases', 'Ceramic braces blend with tooth color', 'Lingual braces are completely invisible', 'Managed by Ex-AIIMS orthodontist', 'EMI options available'],
    technology: 'Damon Self-Ligating Brackets, 3D Digital X-Rays (OPG), Digital Cephalometric Tracing, Intraoral Scanner',
    duration: '12–24 months depending on complexity',
    recovery: 'Mild soreness for 3–5 days after each adjustment',
    doctor: 'Dr. Sandeep Kumar',
    process: [
      { step: 1, title: 'Orthodontic Assessment', desc: 'Detailed X-rays (OPG + cephalogram), photographs, and models are taken to plan treatment.' },
      { step: 2, title: 'Treatment Planning', desc: 'Dr. Sandeep prepares a detailed movement plan showing how your teeth will shift over time.' },
      { step: 3, title: 'Bracket Placement', desc: 'Brackets are bonded to teeth and connected with a wire — painless, takes about 45 minutes.' },
      { step: 4, title: 'Regular Adjustments', desc: 'Every 4–6 weeks, the wire is adjusted to continue moving teeth in the planned direction.' },
      { step: 5, title: 'Debonding & Retainers', desc: 'Braces are removed when treatment is complete. Retainers are provided to maintain results.' }
    ],
    faqs: [
      { q: 'Which is better — braces or Invisalign?', a: 'Both are effective. Braces are better for complex movements; Invisalign is preferred for mild-moderate cases where aesthetics during treatment matter. Dr. Sandeep will recommend what\'s best for your specific case.' },
      { q: 'Do braces hurt?', a: 'Mild soreness for 3–5 days after each tightening appointment is normal. The brackets are smooth and do not injure cheeks. Most patients adapt within a week.' },
      { q: 'Can adults get braces?', a: 'Absolutely. There is no age limit for orthodontic treatment. Ceramic and lingual braces are especially popular with adult patients for their discreet appearance.' },
      { q: 'How much do braces cost in Bathinda?', a: 'Cost depends on type (metal/ceramic/lingual) and duration. Book a ₹200/- consultation for an exact quote with EMI payment plans.' }
    ]
  },

  '3d-intraoral-scanner': {
    title: '3D Intraoral Scanner in Bathinda',
    subtitle: 'Precision dentistry with no messy putty impressions. Experience the future of dental scanning.',
    metaTitle: '3D Intraoral Scanner in Bathinda | Digital Dentistry | The DentalBrace',
    metaDesc: 'Experience comfortable, putty-free 3D intraoral scanning at The DentalBrace Clinic in Bathinda. Highly accurate digital models for clear aligners, crowns, and implants. Book ₹200/-.',
    overview: 'An intraoral scanner is a compact digital camera used to capture highly detailed 3D images of your teeth and gums in just a few minutes. At The DentalBrace Clinic, we use advanced 3D scanning technology to eliminate the need for traditional, uncomfortable putty impressions. This digital precision allows for better treatment planning, a faster workflow, and highly accurate results for everything from Invisalign aligners to custom dental crowns and implants.',
    symptoms: ['Gag reflex with traditional putty impressions', 'Need for highly accurate dental prosthetics', 'Planning for Invisalign or clear aligners', 'Requirement for precise implant placement', 'Desire to visualize treatment outcomes digitally'],
    idealFor: 'Any patient needing dental impressions for crowns, bridges, implants, or orthodontics who prefers a fast, comfortable, and highly precise digital alternative.',
    benefits: ['Completely eliminates messy putty impressions', 'Comfortable and fast (scan takes 3-5 minutes)', 'Highly accurate digital models reduce errors', 'Instant digital preview of your teeth', 'Faster turnaround for lab work', 'Safer and more hygienic'],
    technology: 'Advanced 3D Intraoral Scanner, Real-time 3D Rendering Software, CAD/CAM Integration',
    duration: 'Scan: 3-5 minutes',
    recovery: 'None',
    doctor: 'Dr. Sandeep Kumar & Dr. Ritu Saneja',
    process: [
      { step: 1, title: 'Preparation', desc: 'Your teeth are gently dried to ensure the scanner captures a clear image.' },
      { step: 2, title: 'Scanning', desc: 'A small wand is passed over your teeth, capturing thousands of images per second.' },
      { step: 3, title: 'Real-time 3D Model', desc: 'The images are instantly compiled into a highly accurate 3D digital model on the screen.' },
      { step: 4, title: 'Treatment Planning', desc: 'The 3D model is used to plan your specific treatment with microscopic precision.' },
      { step: 5, title: 'Digital Transfer', desc: 'The digital files are sent securely to our lab for the immediate fabrication of your aligners or crowns.' }
    ],
    faqs: [
      { q: 'Does the intraoral scan hurt?', a: 'Not at all. The scanner wand is small, smooth, and just takes pictures. It is completely painless and much more comfortable than traditional putty.' },
      { q: 'Is there any radiation involved?', a: 'No. Intraoral scanners use optical imaging (light) to take pictures, not X-rays. There is zero radiation.' },
      { q: 'Why is this better than traditional impressions?', a: 'Digital scans are more accurate, meaning your crowns or aligners will fit better. They are also much more comfortable, completely eliminating the gag reflex associated with putty.' },
      { q: 'How long does a 3D scan take?', a: 'A full mouth scan usually takes less than 5 minutes.' }
    ]
  },

  'digital-dentistry': {
    title: 'Digital Dentistry in Bathinda',
    subtitle: 'Intraoral scanning, 3D imaging & digital treatment planning — precision dentistry with no putty impressions.',
    metaTitle: 'Digital Dentistry in Bathinda | 3D Intraoral Scanner | Digital Smile Design | The DentalBrace',
    metaDesc: 'Experience digital dentistry in Bathinda at The DentalBrace Clinic. 3D intraoral scanning, CBCT imaging, Digital Smile Design, and CAD/CAM restorations. Book ₹200/-.',
    overview: 'The DentalBrace Clinic is Bathinda\'s most advanced digital dental practice — using cutting-edge technology to plan, preview, and execute treatments with unmatched precision and comfort. Digital dentistry eliminates traditional putty impressions (messy, uncomfortable), produces far more accurate treatment plans, and allows you to see your results digitally before a single tooth is touched. From 3D intraoral scanning to CAD/CAM-milled crowns and Digital Smile Design, our technology ensures every treatment is faster, more accurate, and more predictable.',
    symptoms: ['Seeking precise, modern dental care', 'Uncomfortable with traditional impressions', 'Wanting to preview smile changes before treatment', 'Complex reconstruction requiring precise planning', 'Needing accurate implant placement planning'],
    idealFor: 'Every patient at our clinic. Digital workflows benefit all treatments — from a simple crown to a full mouth rehabilitation. Particularly valuable for implants, aligners, veneers, and smile makeovers.',
    benefits: ['No messy putty impressions — ever', 'See your new smile before treatment starts', 'Ultra-accurate crown & veneer fabrication', 'Precise implant placement reduces risk', '3D bone mapping for safe surgery', 'Faster treatment timelines'],
    technology: '3D Intraoral Scanner, CBCT Cone Beam CT, Digital Smile Design (DSD) Software, CAD/CAM Milling, Guided Implant Surgery',
    duration: 'Scan: 5 minutes | Planning varies by treatment',
    recovery: 'None',
    doctor: 'Dr. Sandeep Kumar & Dr. Ritu Saneja',
    process: [
      { step: 1, title: '3D Intraoral Scan', desc: 'A small wand takes a precise 3D scan of your teeth in under 5 minutes — no impressions.' },
      { step: 2, title: 'Digital Treatment Planning', desc: 'The 3D model is used to plan aligners, crowns, implants, or smile design with exact measurements.' },
      { step: 3, title: 'Smile Preview (DSD)', desc: 'For cosmetic cases, Digital Smile Design software shows your new smile on your own photo.' },
      { step: 4, title: 'CAD/CAM Fabrication', desc: 'Crowns, veneers, and bridges are milled from solid ceramic blocks to exact specifications.' },
      { step: 5, title: 'Delivery', desc: 'The final restoration is checked for fit, shade, and bite — then permanently bonded.' }
    ],
    faqs: [
      { q: 'What is an intraoral scanner?', a: 'An intraoral scanner is a small digital camera that takes hundreds of images per second to create an accurate 3D digital model of your teeth in minutes. It replaces traditional messy putty impressions completely.' },
      { q: 'Do you use digital impressions for Invisalign?', a: 'Yes. All Invisalign cases at The DentalBrace Clinic are taken with our 3D scanner (iTero compatible) — giving the most accurate aligner fit possible.' },
      { q: 'What is Digital Smile Design?', a: 'DSD is software that analyzes photos and videos of your face and smile to design a new smile proportioned perfectly to your facial features. You see exactly how you will look before any treatment.' },
      { q: 'Is digital dentistry more expensive?', a: 'Our digital workflows actually improve precision and reduce remakes — keeping costs comparable to traditional methods while delivering significantly better outcomes.' }
    ]
  },

  'teeth-whitening': {
    title: 'Teeth Whitening in Bathinda',
    subtitle: '8 shades brighter — in a single session. Professionally done, long-lasting results.',
    metaTitle: 'Teeth Whitening in Bathinda | Professional Laser Whitening | The DentalBrace',
    metaDesc: 'Professional teeth whitening in Bathinda by Dr. Ritu Saneja. LED & laser whitening — 8 shades brighter in 1 session. Safe, painless, long-lasting. Book ₹200/- consultation.',
    overview: 'Professional teeth whitening at The DentalBrace Clinic uses advanced LED and laser bleaching technology to remove deep stains caused by tea, coffee, tobacco, and ageing. Unlike over-the-counter strips, our clinical-grade whitening gel penetrates the enamel to break down intrinsic and extrinsic stains — delivering results up to 8 shades brighter in a single 60-minute session. Treatment is performed by Dr. Ritu Saneja (MDS Gold Medalist) and is completely safe, painless, and does not damage your enamel.',
    symptoms: ['Yellow or stained teeth', 'Coffee / tea / tobacco discolouration', 'Age-related darkening', 'Antibiotic staining (tetracycline)', 'Enamel surface stains'],
    idealFor: 'Anyone looking for a brighter smile before a wedding, job interview, or special occasion. Also ideal for smokers or regular tea/coffee drinkers wanting to reverse discolouration.',
    benefits: ['Up to 8 shades brighter in 1 session', 'Completely painless & safe for enamel', 'Results last 1–2 years with care', 'No temporary sensitivity', 'Done in under 60 minutes'],
    technology: 'Zoom LED Whitening System, High-Concentration Hydrogen Peroxide Gel (Clinic Grade)',
    duration: '45–60 Minutes',
    recovery: 'Immediate — eat & drink normally',
    doctor: 'Dr. Ritu Saneja',
    process: [
      { step: 1, title: 'Shade Assessment', desc: 'We photograph and record your current tooth shade for comparison.' },
      { step: 2, title: 'Gum Protection', desc: 'A protective gel is applied to your gums to prevent sensitivity.' },
      { step: 3, title: 'Whitening Gel Application', desc: 'Clinical-grade whitening gel is applied to all visible teeth.' },
      { step: 4, title: 'LED Activation', desc: 'The LED light activates the gel and accelerates whitening — 2 rounds of 15 minutes.' },
      { step: 5, title: 'Final Shade Check', desc: 'We compare your new shade and advise on maintenance.' }
    ],
    faqs: [
      { q: 'Is teeth whitening safe?', a: 'Yes — professional whitening done in a clinic is completely safe. We use ADA-approved gels and protect your gums throughout.' },
      { q: 'How long do results last?', a: 'With good habits (avoiding tea/coffee/tobacco), results last 1–2 years. We also offer take-home whitening trays for top-ups.' },
      { q: 'Does teeth whitening hurt?', a: 'No. You may feel mild warmth during the LED activation phase but there is no pain. Some patients feel temporary sensitivity for 24 hours.' },
      { q: 'Can I get whitening done if I have crowns or veneers?', a: 'Whitening only works on natural teeth — crowns and veneers do not respond. We will assess your case and advise accordingly.' }
    ]
  },

  'veneers': {
    title: 'Dental Veneers in Bathinda',
    subtitle: 'Hollywood smile in 2 visits. Ultra-thin porcelain shells for a flawless, permanent smile.',
    metaTitle: 'Dental Veneers in Bathinda | Porcelain Veneers | The DentalBrace Clinic',
    metaDesc: 'Get dental veneers in Bathinda by Dr. Ritu Saneja (MDS Gold Medalist). Porcelain & composite veneers for a perfect smile. Book consultation at ₹200/- only.',
    overview: 'Dental veneers are ultra-thin, custom-crafted porcelain or composite shells bonded to the front surface of your teeth to correct colour, shape, size, and alignment. At The DentalBrace Clinic, veneers are designed using Digital Smile Design (DSD) software so you see your final result before any treatment begins. Performed by Dr. Ritu Saneja (MDS Gold Medalist, BHU Varanasi, Ex-AIIMS), veneers are the fastest way to achieve a permanent smile transformation — often called the "Hollywood Smile".',
    symptoms: ['Discoloured or stained teeth that don\'t whiten', 'Chipped or cracked teeth', 'Slightly misaligned teeth', 'Gaps between teeth', 'Worn-down or short teeth'],
    idealFor: 'Patients who want a permanent, dramatic smile transformation without extensive orthodontic treatment. Ideal for those with multiple cosmetic concerns at once.',
    benefits: ['Permanent results — last 10–15 years', 'Completely natural-looking and translucent', 'Stain-resistant surface', 'Minimal tooth reduction required', 'Preview your smile before treatment (DSD)'],
    technology: 'Digital Smile Design (DSD), CAD/CAM Porcelain Milling, 3D Intraoral Scanner',
    duration: '2 Appointments (1 week apart)',
    recovery: 'Immediate',
    doctor: 'Dr. Ritu Saneja',
    process: [
      { step: 1, title: 'Digital Smile Design', desc: 'We photograph your face and digitally design your new smile proportioned to your features.' },
      { step: 2, title: 'Wax Mockup', desc: 'A physical wax mockup is placed in your mouth so you can "test drive" your new smile.' },
      { step: 3, title: 'Tooth Preparation', desc: 'A thin 0.5mm layer of enamel is removed from the front of each tooth (minimal and painless).' },
      { step: 4, title: 'Digital Impressions', desc: 'We take 3D digital scans — no messy putty impressions.' },
      { step: 5, title: 'Veneer Bonding', desc: 'The custom porcelain veneers are bonded permanently using light-cured adhesive.' }
    ],
    faqs: [
      { q: 'Are veneers permanent?', a: 'Veneers require some enamel removal and are considered a permanent commitment. They last 10–15 years and can be replaced with fresh veneers after that.' },
      { q: 'Do veneers look natural?', a: 'Yes — modern porcelain veneers are translucent and mimic natural tooth enamel. Nobody will be able to tell the difference.' },
      { q: 'Is the procedure painful?', a: 'No. The tooth preparation is done under local anaesthesia. You will feel no pain during or after the procedure.' },
      { q: 'What is the difference between veneers and composite bonding?', a: 'Veneers are permanent porcelain shells (10–15 year lifespan), while composite bonding is a resin applied directly (5–7 year lifespan, no tooth reduction needed, lower cost).' }
    ]
  },

  'root-canal': {
    title: 'Root Canal Treatment in Bathinda',
    subtitle: 'Single-visit, painless RCT using rotary endodontics. Save your natural tooth — no extraction needed.',
    metaTitle: 'Root Canal Treatment in Bathinda | Painless Single Visit RCT | The DentalBrace',
    metaDesc: 'Painless root canal treatment in Bathinda using advanced rotary endodontics. Single-session RCT available. Book a ₹200/- consultation at The DentalBrace Clinic.',
    overview: 'Root canal treatment (RCT) is a procedure to save a severely infected or decayed tooth that would otherwise require extraction. At The DentalBrace Clinic, we use Rotary Endodontic technology — a motorised, nickel-titanium file system — to clean the infected pulp quickly, precisely, and completely painlessly. With our advanced single-visit RCT, most cases are completed in one appointment. The treated tooth is then sealed with a biocompatible material and crowned to restore its full function.',
    symptoms: ['Severe toothache, especially when chewing', 'Prolonged sensitivity to hot and cold', 'Darkening or discolouration of the tooth', 'Swelling or tenderness in nearby gums', 'A persistent pimple on the gums'],
    idealFor: 'Patients with a deeply infected, cracked, or severely decayed tooth who want to save their natural tooth rather than opt for an extraction and implant.',
    benefits: ['Save your natural tooth — avoid extraction', 'Completely painless with local anaesthesia', 'Single-visit treatment available', '90%+ success rate', 'Followed by a crown for full restoration'],
    technology: 'Rotary Endodontic Files (NiTi), Apex Locator, Dental Operating Microscope',
    duration: '60–90 Minutes (single visit)',
    recovery: 'Mild soreness for 1–2 days',
    doctor: 'Dr. Ritu Saneja',
    process: [
      { step: 1, title: 'Diagnosis & X-Ray', desc: 'Digital X-rays show the extent of infection and root anatomy.' },
      { step: 2, title: 'Local Anaesthesia', desc: 'The area is numbed completely — you will feel nothing during treatment.' },
      { step: 3, title: 'Pulp Removal', desc: 'The infected pulp tissue is removed using rotary files through a small access point.' },
      { step: 4, title: 'Canal Cleaning & Shaping', desc: 'Each canal is cleaned, shaped and disinfected with antiseptic solution.' },
      { step: 5, title: 'Sealing & Crown', desc: 'Canals are sealed with gutta-percha and a crown is placed to restore the tooth.' }
    ],
    faqs: [
      { q: 'Is root canal treatment painful?', a: 'No. Modern RCT under local anaesthesia is no more painful than a filling. Most patients are surprised by how comfortable the procedure is.' },
      { q: 'How many sittings does root canal take?', a: 'At The DentalBrace Clinic, most RCTs are completed in a single session using rotary endodontics. Complex cases may require 2 visits.' },
      { q: 'Is it better to extract the tooth or do RCT?', a: 'Always save your natural tooth if possible. Natural teeth are stronger and healthier for your jawbone. Extraction leads to bone loss and requires an implant or bridge to fill the gap.' },
      { q: 'How long does a root canal treated tooth last?', a: 'With a proper crown placed after RCT, a treated tooth can last your entire lifetime with good oral hygiene.' }
    ]
  },

  'dental-crown-bridge': {
    title: 'Dental Crown & Bridge in Bathinda',
    subtitle: 'Zirconia crowns that look, feel and last like natural teeth — guaranteed for 5 years.',
    metaTitle: 'Dental Crown & Bridge in Bathinda | Zirconia Crown | The DentalBrace Clinic',
    metaDesc: 'Dental crown and bridge treatment in Bathinda. Premium zirconia & porcelain crowns by Dr. Ritu Saneja. Replace missing teeth permanently. Book at ₹200/-.',
    overview: 'Dental crowns are tooth-shaped caps placed over damaged, weakened, or root-canal-treated teeth to restore their full shape, strength, and function. A dental bridge uses two crowns as anchors to replace one or more missing teeth without surgery. At The DentalBrace Clinic, we use premium full-zirconia crowns — the strongest, most natural-looking dental crown material available. All crowns are designed digitally using 3D scans, ensuring a perfect fit and shade match in just 2 appointments.',
    symptoms: ['Cracked, broken, or severely decayed tooth', 'Weak tooth after root canal treatment', 'Missing one or more teeth', 'Old metal or discoloured crowns that need replacement', 'A tooth worn down from grinding'],
    idealFor: 'Patients with damaged teeth needing protection, or those with missing teeth who prefer a non-surgical option over implants.',
    benefits: ['Full-zirconia crowns — strongest material available', 'Natural-looking shade match guaranteed', 'Fixed bridge — no removal needed', 'Lasts 15–20 years with care', 'Digital impressions — no messy putty'],
    technology: 'CAD/CAM Zirconia Milling, 3D Intraoral Scanner, Shade Matching Technology',
    duration: '2 Appointments (5–7 days apart)',
    recovery: 'Immediate — mild sensitivity for 2–3 days',
    doctor: 'Dr. Ritu Saneja',
    process: [
      { step: 1, title: 'Tooth Preparation', desc: 'The tooth is shaped to receive the crown. For a bridge, adjacent teeth are prepared as abutments.' },
      { step: 2, title: 'Digital Impressions', desc: '3D intraoral scans are taken — no traditional putty impressions.' },
      { step: 3, title: 'Temporary Crown', desc: 'A temporary crown protects the tooth while your permanent crown is being milled.' },
      { step: 4, title: 'Crown Milling', desc: 'Your permanent zirconia crown is milled from a solid zirconia block to exact specifications.' },
      { step: 5, title: 'Permanent Cementation', desc: 'The crown is checked for fit and shade, then permanently bonded in place.' }
    ],
    faqs: [
      { q: 'What is the difference between PFM and zirconia crowns?', a: 'PFM (Porcelain Fused to Metal) crowns have a dark metal edge visible at the gum line. Zirconia crowns are entirely metal-free — stronger, more natural-looking, and biocompatible.' },
      { q: 'How long do dental crowns last?', a: 'High-quality zirconia crowns last 15–20+ years with proper brushing, flossing, and regular checkups.' },
      { q: 'Can a dental bridge replace implants?', a: 'A bridge is a non-surgical option for missing teeth but requires grinding down adjacent healthy teeth. Implants are the gold standard as they preserve the jawbone and don\'t affect neighbouring teeth.' },
      { q: 'Is crown placement painful?', a: 'No. The procedure is done under local anaesthesia. You may feel mild sensitivity for a few days after placement, which resolves on its own.' }
    ]
  },

  'kids-dentistry': {
    title: 'Kids Dentistry in Bathinda',
    subtitle: 'Gentle, fun, and completely fear-free dental care for children aged 2–16 years.',
    metaTitle: 'Kids Dentist in Bathinda | Paediatric Dentistry | The DentalBrace Clinic',
    metaDesc: 'Paediatric dentist in Bathinda for kids aged 2–16 years. Gentle, painless kids dentistry by expert MDS doctors. First visit friendly. Book at ₹200/-.',
    overview: 'Children\'s dental health sets the foundation for a lifetime of healthy smiles. At The DentalBrace Clinic, we provide comprehensive paediatric dentistry in a warm, welcoming environment specifically designed to help kids feel safe and comfortable. From their first tooth to their teenage years, our specialists address milk tooth cavities, eruption issues, jaw development, and early orthodontic concerns. We believe every child\'s first dental visit should be positive — because a child who isn\'t afraid of the dentist will take care of their teeth for life.',
    symptoms: ['Visible cavities or dark spots on teeth', 'Toothache or sensitivity in children', 'Delayed or early tooth eruption', 'Thumb sucking or mouth breathing habits', 'Crooked milk teeth or crowding'],
    idealFor: 'Children from 2 to 16 years for routine checkups, cavity treatment, fluoride applications, fissure sealants, and early orthodontic assessment.',
    benefits: ['Fear-free, child-friendly environment', 'Painless cavity treatment techniques', 'Early orthodontic screening by Dr. Sandeep', 'Fluoride & sealant protection', 'Habit counselling (thumb sucking, tongue thrusting)'],
    technology: 'Digital X-Rays (Low Radiation), Laser Cavity Detection, Nitrous Oxide Sedation (if required)',
    duration: '30–45 Minutes per visit',
    recovery: 'Immediate',
    doctor: 'Dr. Sandeep Kumar',
    process: [
      { step: 1, title: 'Friendly First Visit', desc: 'We let the child explore the chair and instruments so nothing feels scary.' },
      { step: 2, title: 'Dental Examination', desc: 'We check all teeth, gums, bite, and jaw development with low-radiation digital X-rays.' },
      { step: 3, title: 'Cleaning & Fluoride', desc: 'Professional cleaning and fluoride application to strengthen enamel.' },
      { step: 4, title: 'Treatment Planning', desc: 'Any cavities or orthodontic concerns are discussed with parents in simple language.' },
      { step: 5, title: 'Sealants', desc: 'We apply protective sealants to back molar grooves to prevent cavity formation.' }
    ],
    faqs: [
      { q: 'At what age should I bring my child to a dentist?', a: 'The first dental visit should be within 6 months of the first tooth appearing, or by age 1 — whichever comes first. Early visits help prevent problems and build comfort.' },
      { q: 'My child is afraid of the dentist — how do you handle this?', a: 'We use a "tell-show-do" approach — we explain and demonstrate every instrument before using it. Our child-friendly team ensures no child leaves with a bad memory.' },
      { q: 'Should I treat milk teeth even if they will fall out?', a: 'Absolutely. Infected milk teeth cause pain, spread infection, and can damage the permanent tooth developing underneath. Healthy milk teeth also ensure proper jaw development.' },
      { q: 'When should a child start orthodontic treatment?', a: 'An orthodontic screening should happen by age 7–8. Dr. Sandeep can identify early jaw or bite problems and treat them while the jaw is still growing — preventing complex treatment later.' }
    ]
  },

  'gum-treatment': {
    title: 'Gum Treatment in Bathinda',
    subtitle: 'Stop bleeding gums permanently. Professional scaling, polishing & gum disease treatment.',
    metaTitle: 'Gum Treatment in Bathinda | Scaling & Polishing | Periodontist | The DentalBrace',
    metaDesc: 'Expert gum treatment in Bathinda. Painless scaling, polishing, and gum disease (periodontitis) therapy. Healthy gums are the foundation of a healthy smile. Book ₹200/-.',
    overview: 'Gum disease (periodontitis) is the leading cause of adult tooth loss in India — and most people don\'t know they have it until significant damage is done. At The DentalBrace Clinic, we provide comprehensive gum treatment including professional scaling & polishing (cleaning), deep root planing, gum flap surgery (if required), and maintenance therapy. Healthy gums are not just essential for your oral health — research links gum disease to heart disease, diabetes, and premature birth. Our goal is to give you a healthy gum foundation that supports your teeth for life.',
    symptoms: ['Bleeding gums when brushing or eating', 'Red, swollen, or tender gums', 'Bad breath (halitosis) that doesn\'t go away', 'Receding gums / teeth appearing longer', 'Loose teeth or gaps forming between teeth'],
    idealFor: 'Anyone with bleeding gums, bad breath, or visible tartar buildup. Also recommended for diabetics, smokers, and pregnant women who are at higher risk for gum disease.',
    benefits: ['Eliminates bleeding gums completely', 'Removes harmful tartar below the gum line', 'Prevents further bone loss', 'Reduces bad breath immediately', 'Teeth feel clean, smooth, and refreshed'],
    technology: 'Ultrasonic Scalers, Piezoelectric Scaler, Air Polishing, Laser Gum Therapy',
    duration: '45–60 Minutes',
    recovery: 'Mild gum sensitivity for 24–48 hours',
    doctor: 'Dr. Ritu Saneja',
    process: [
      { step: 1, title: 'Gum Assessment', desc: 'We measure pocket depths around each tooth and identify areas of bone loss with X-rays.' },
      { step: 2, title: 'Supragingival Scaling', desc: 'Ultrasonic scaler removes visible tartar and plaque from tooth surfaces.' },
      { step: 3, title: 'Subgingival Scaling', desc: 'Deep cleaning below the gum line removes hidden bacteria and infected tissue.' },
      { step: 4, title: 'Root Planing', desc: 'Root surfaces are smoothed so bacteria cannot reattach easily.' },
      { step: 5, title: 'Polish & Maintenance Plan', desc: 'Teeth are polished to a smooth finish. We create a personalised maintenance schedule.' }
    ],
    faqs: [
      { q: 'Is scaling harmful to teeth?', a: 'No. Scaling only removes hardened bacterial deposits (tartar) — it does not damage your enamel. In fact, tartar left on teeth causes far more damage than cleaning.' },
      { q: 'How often should I get scaling done?', a: 'For most people, professional cleaning every 6 months is recommended. Patients with active gum disease may need it every 3 months initially.' },
      { q: 'Can gum disease be reversed?', a: 'Gingivitis (early gum disease) is fully reversible with proper treatment and home care. Advanced periodontitis can be controlled but not fully reversed — which is why early treatment is critical.' },
      { q: 'Does scaling cause sensitivity?', a: 'You may feel mild sensitivity for 1–2 days after scaling, especially to hot and cold. This is completely normal and resolves quickly. We provide sensitivity tips to manage it.' }
    ]
  },

  'wisdom-tooth-removal': {
    title: 'Wisdom Tooth Removal in Bathinda',
    subtitle: 'Painless surgical extraction — same day procedure. Expert oral surgery for impacted wisdom teeth.',
    metaTitle: 'Wisdom Tooth Removal in Bathinda | Painless Extraction | The DentalBrace Clinic',
    metaDesc: 'Expert wisdom tooth removal in Bathinda. Painless surgical extraction of impacted wisdom teeth by MDS specialists. Same-day procedure. Book consultation at ₹200/-.',
    overview: 'Wisdom teeth (third molars) often don\'t have enough room to erupt properly and become "impacted" — partially or fully trapped under the gum or bone. Impacted wisdom teeth cause severe pain, infections (pericoronitis), crowding of other teeth, and cysts. At The DentalBrace Clinic, we perform wisdom tooth extractions using precise surgical techniques under local anaesthesia — ensuring a smooth, painless procedure and a quick recovery. Most extractions are completed in 20–40 minutes with minimal post-operative discomfort.',
    symptoms: ['Jaw pain at the back of the mouth', 'Swollen or bleeding gums around the back teeth', 'Difficulty opening the mouth or chewing', 'Bad taste or bad breath from back teeth', 'Recurring infection in the same area'],
    idealFor: 'Patients with impacted, partially erupted, or infected wisdom teeth. Also recommended when wisdom teeth are causing crowding of other teeth or are decayed beyond restoration.',
    benefits: ['Permanent relief from wisdom tooth pain', 'Prevents recurrent infections', 'Prevents crowding of other teeth', 'Completed in 20–40 minutes', 'Minimal post-operative pain with proper medications'],
    technology: 'Surgical Motors & Burs, Digital Periapical X-Rays, OPG Imaging, Piezoelectric Surgery',
    duration: '20–45 Minutes per tooth',
    recovery: '2–3 days mild swelling & discomfort',
    doctor: 'Dr. Ritu Saneja',
    process: [
      { step: 1, title: 'OPG X-Ray', desc: 'A full-jaw X-ray shows the exact position, angulation, and root anatomy of the wisdom tooth.' },
      { step: 2, title: 'Local Anaesthesia', desc: 'The area is completely numbed — you will feel pressure but no pain.' },
      { step: 3, title: 'Gum Incision (if needed)', desc: 'For impacted teeth, a small incision is made in the gum to access the tooth.' },
      { step: 4, title: 'Sectioning & Removal', desc: 'The tooth may be sectioned into pieces for easier removal, minimising trauma to bone.' },
      { step: 5, title: 'Suturing & Aftercare', desc: 'The site is sutured closed and detailed aftercare instructions are provided.' }
    ],
    faqs: [
      { q: 'Is wisdom tooth removal painful?', a: 'No. The procedure is done under local anaesthesia and you will feel no pain during extraction — only mild pressure. Post-operative discomfort is managed with medications prescribed by us.' },
      { q: 'How long is the recovery?', a: 'Most patients return to normal activities within 2–3 days. Full healing takes 1–2 weeks. We provide complete aftercare guidelines including diet tips.' },
      { q: 'Do all wisdom teeth need to be removed?', a: 'Not necessarily. If a wisdom tooth erupts fully, is well-positioned, and can be cleaned properly, it can stay. We will evaluate your X-rays and advise accordingly.' },
      { q: 'Can I eat after wisdom tooth removal?', a: 'Eat soft foods (dal, curd, khichdi) for 3–5 days. Avoid hot, spicy, or hard foods. Do not spit forcefully or use a straw for the first 24 hours as this can dislodge the blood clot.' }
    ]
  },

  'composite-bonding': {
    title: 'Composite Bonding in Bathinda',
    subtitle: 'Fix chipped, gapped, or stained teeth in 90 minutes — no drilling, no injections.',
    metaTitle: 'Composite Bonding in Bathinda | Tooth Bonding | Chipped Tooth Repair | The DentalBrace',
    metaDesc: 'Composite bonding in Bathinda for chipped, cracked, or gapped teeth. Quick, painless, affordable tooth bonding by Dr. Ritu Saneja. No drilling needed. Book ₹200/-.',
    overview: 'Composite bonding is a quick, minimally invasive cosmetic procedure where a tooth-coloured composite resin is sculpted directly onto your teeth to correct chips, cracks, gaps, discolouration, or uneven shapes. Unlike veneers, bonding requires no tooth reduction in most cases — making it completely reversible. The resin is applied, shaped, and hardened with a curing light in a single appointment. Composite bonding is the most affordable route to a noticeably improved smile and is performed by Dr. Ritu Saneja, who is known for her artistry and attention to aesthetic detail.',
    symptoms: ['Chipped or cracked front teeth', 'Small gaps between teeth (diastema)', 'Discoloured teeth that don\'t whiten', 'Slightly uneven or misshapen teeth', 'Short teeth due to grinding'],
    idealFor: 'Patients with minor to moderate cosmetic concerns who want an affordable, same-day smile improvement without the commitment of veneers or crowns.',
    benefits: ['Completed in a single appointment', 'No drilling or anaesthesia in most cases', 'Natural-looking, shade-matched result', 'Completely reversible', 'Most affordable cosmetic option'],
    technology: 'Nanohybrid Composite Resin, LED Curing Light, Dental Microscope for Precision',
    duration: '60–90 Minutes',
    recovery: 'Immediate — no downtime',
    doctor: 'Dr. Ritu Saneja',
    process: [
      { step: 1, title: 'Shade Selection', desc: 'We select the composite shade that perfectly matches your natural teeth.' },
      { step: 2, title: 'Surface Preparation', desc: 'The tooth surface is gently etched with a mild acid to help the resin bond.' },
      { step: 3, title: 'Resin Application', desc: 'The composite resin is applied in layers and sculpted to the desired shape.' },
      { step: 4, title: 'LED Curing', desc: 'Each layer is hardened immediately with a strong LED curing light.' },
      { step: 5, title: 'Polishing & Finishing', desc: 'The bonded tooth is polished to a high shine — indistinguishable from natural enamel.' }
    ],
    faqs: [
      { q: 'How long does composite bonding last?', a: 'With good care, composite bonding lasts 5–7 years before requiring a touch-up or replacement. Avoid biting nails, ice, or very hard foods to extend lifespan.' },
      { q: 'Is composite bonding better than veneers?', a: 'Bonding is faster, cheaper, and reversible — making it great for minor corrections. Veneers are more durable, stain-resistant, and ideal for a complete smile transformation. We will advise based on your specific case.' },
      { q: 'Does composite bonding stain?', a: 'Composite resin can stain over time from tea, coffee, and tobacco — more so than porcelain veneers. Avoid staining foods for 48 hours after placement and maintain regular cleaning.' },
      { q: 'Is it painful?', a: 'No. Most composite bonding requires no anaesthesia. You will feel nothing during the procedure. It is one of the most comfortable cosmetic dental treatments available.' }
    ]
  },

  // Legacy entry kept for fallback
  'smile-designing': {
    title: 'Digital Smile Designing in Bathinda',
    subtitle: 'Precision crafted aesthetics for a flawless smile — preview your results before treatment begins.',
    metaTitle: 'Digital Smile Design in Bathinda | Smile Makeover | The DentalBrace Clinic',
    metaDesc: 'Digital Smile Design in Bathinda by Dr. Ritu Saneja. Preview your perfect smile before any treatment. Book consultation at ₹200/-.',
    overview: 'Digital Smile Design (DSD) is a revolutionary approach in cosmetic dentistry that allows us to design and preview your ideal smile before any physical treatment begins. Using high-resolution photography, video analysis, and 3D digital software, we map your facial proportions and create a fully customised smile that suits your face, lips, and personality.',
    symptoms: ['Chipped or worn teeth', 'Gaps between teeth', 'Discoloration', 'Asymmetrical smile'],
    idealFor: 'Patients looking for a complete, predictable cosmetic overhaul of their smile.',
    benefits: ['Preview final results instantly', 'Customized to your facial proportions', 'Minimally invasive approach', 'High predictability'],
    technology: '3D Intraoral Scanners, CAD/CAM Milling, High-Res Photography',
    duration: '2-3 Sessions',
    recovery: 'Immediate',
    doctor: 'Dr. Ritu Saneja',
    process: [
      { step: 1, title: 'Digital Scanning', desc: 'We take high-resolution 3D scans of your mouth.' },
      { step: 2, title: 'Smile Design', desc: 'Our experts design your new smile digitally.' },
      { step: 3, title: 'Mockup & Approval', desc: 'You "test drive" the physical mockup in your mouth.' },
      { step: 4, title: 'Final Delivery', desc: 'The permanent restorations are bonded securely.' }
    ],
    faqs: [
      { q: 'Is it painful?', a: 'No, it is a minimally invasive and virtually painless procedure.' },
      { q: 'How long does it last?', a: 'With proper care, a smile makeover can last for 10-15 years.' }
    ]
  }
};

// ─── Component ─────────────────────────────────────────────────────────────────
const TreatmentTemplate = () => {
  const { slug } = useParams();
  const data = treatmentData[slug] || treatmentData['smile-designing'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": data.title,
    "procedureType": "SurgicalProcedure",
    "bodyLocation": "Mouth",
    "description": data.overview,
    "performedBy": {
      "@type": "Physician",
      "name": data.doctor,
      "worksFor": {
        "@type": "Dentist",
        "name": "The DentalBrace Clinic & Implant Centre",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bathinda",
          "addressRegion": "Punjab",
          "addressCountry": "IN"
        }
      }
    },
    "relevantSpecialty": "Dentistry"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };

  return (
    <motion.div
      className="treatment-page"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      <Helmet>
        <title>{data.metaTitle || `${data.title} | The DentalBrace Clinic`}</title>
        <meta name="description" content={data.metaDesc || data.overview} />
        <link rel="canonical" href={`https://www.thedentalbrace.com/treatments/${slug}`} />
        <meta property="og:title" content={data.metaTitle || `${data.title} | The DentalBrace Clinic`} />
        <meta property="og:description" content={data.metaDesc || data.overview} />
        <meta property="og:url" content={`https://www.thedentalbrace.com/treatments/${slug}`} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero Banner */}
      <div className="treatment-hero-banner">
        <div className="container">
          <Link to="/" className="treatment-back-link">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <p className="treatment-hero-eyebrow">The DentalBrace Clinic, Bathinda</p>
          <h1 className="treatment-hero-title">{data.title}</h1>
          <p className="treatment-hero-subtitle">{data.subtitle}</p>
          <div className="treatment-hero-meta">
            <span><Clock size={15} /> {data.duration}</span>
            <span><Activity size={15} /> Recovery: {data.recovery}</span>
            <span><ShieldCheck size={15} /> {data.doctor}</span>
          </div>
          <a href="/#book" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            Book Consultation (₹200/-) <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container treatment-grid">

          <div className="treatment-main">
            {/* Overview */}
            <motion.div 
              className="treatment-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-secondary">What is {data.title.split(' in ')[0]}?</h2>
              <p className="text-secondary text-lg leading-relaxed">{highlightKeywords(data.overview)}</p>
            </motion.div>

            {/* Symptoms & Ideal Candidate */}
            <div className="treatment-section symptoms-grid">
              <motion.div 
                className="glass shadow-soft p-6 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="section-title"><Activity className="text-accent" /> Signs You Need This Treatment</h3>
                <ul className="symptoms-list text-secondary">
                  {data.symptoms.map((s, i) => <li key={i}>✓ {highlightKeywords(s)}</li>)}
                </ul>
              </motion.div>
              <motion.div 
                className="glass shadow-soft p-6 rounded-lg"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="section-title"><ShieldCheck className="text-accent" /> Ideal Candidate</h3>
                <p className="text-secondary">{highlightKeywords(data.idealFor)}</p>
              </motion.div>
            </div>

            {/* Benefits */}
            <div className="treatment-section">
              <h2 className="heading-secondary">Key Benefits</h2>
              <ul className="benefits-grid">
                {data.benefits.map((benefit, i) => (
                  <li key={i} className="benefit-item glass p-4 rounded-md">
                    <CheckCircle2 size={24} className="text-accent flex-shrink-0" />
                    <span className="font-medium text-primary">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process Timeline */}
            <motion.div 
              className="treatment-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-secondary">Step-by-Step Process</h2>
              <div className="process-timeline">
                {data.process.map((step, i) => (
                  <motion.div 
                    key={i} 
                    className="timeline-step"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <span className="step-number">{step.step}</span>
                    <h4 className="text-xl font-bold mb-2">{highlightKeywords(step.title)}</h4>
                    <p className="text-secondary">{highlightKeywords(step.desc)}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* FAQs */}
            <motion.div 
              className="treatment-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-secondary">Frequently Asked Questions</h2>
              <div className="faq-main-list">
                {data.faqs.map((faq, i) => (
                  <details key={i} className="faq-accordion">
                    <summary className="faq-accordion-q">{highlightKeywords(faq.q)}</summary>
                    <p className="faq-accordion-a">{highlightKeywords(faq.a)}</p>
                  </details>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <aside className="treatment-sidebar">

            {/* Quick Facts */}
            <div className="sidebar-card glass shadow-lg">
              <h3 className="sidebar-title">At a Glance</h3>
              <div className="sidebar-content">
                <div className="fact-item">
                  <strong className="fact-label">Duration</strong>
                  <div className="fact-value"><Clock size={18} className="text-accent" /> {data.duration}</div>
                </div>
                <div className="fact-item">
                  <strong className="fact-label">Recovery</strong>
                  <div className="fact-value"><Activity size={18} className="text-accent" /> {data.recovery}</div>
                </div>
                <div className="fact-item">
                  <strong className="fact-label">Specialist</strong>
                  <div className="fact-value"><ShieldCheck size={18} className="text-accent" /> {data.doctor}</div>
                </div>
                <div className="fact-item">
                  <strong className="fact-label">Technology</strong>
                  <p className="fact-value-text mt-1">{data.technology}</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="sidebar-card doctor-cta">
              <h3 className="cta-title">Ready to get started?</h3>
              <p className="cta-subtitle">Book a consultation with our AIIMS-trained specialists today at just ₹200/-.</p>
              <a href="/#book" className="btn btn-primary w-full" style={{ display: 'block', textAlign: 'center' }}>Book Now</a>
              <a href="tel:7496849392" className="btn btn-outline w-full" style={{ display: 'block', textAlign: 'center', marginTop: '0.75rem' }}>
                <Phone size={15} style={{ display: 'inline', marginRight: '0.4rem' }} />
                +91 74968-49392
              </a>
            </div>

            {/* Other Treatments */}
            <div className="sidebar-card glass shadow-lg">
              <h3 className="sidebar-title">Other Treatments</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  { label: 'Teeth Whitening', slug: 'teeth-whitening' },
                  { label: 'Dental Veneers', slug: 'veneers' },
                  { label: 'Root Canal Treatment', slug: 'root-canal' },
                  { label: 'Dental Crown & Bridge', slug: 'dental-crown-bridge' },
                  { label: 'Kids Dentistry', slug: 'kids-dentistry' },
                  { label: 'Gum Treatment', slug: 'gum-treatment' },
                  { label: 'Wisdom Tooth Removal', slug: 'wisdom-tooth-removal' },
                  { label: 'Composite Bonding', slug: 'composite-bonding' },
                ].filter(t => t.slug !== slug).map(t => (
                  <Link key={t.slug} to={`/treatments/${t.slug}`}
                    style={{ color: 'var(--text-secondary)', textDecoration: 'none', padding: '0.4rem 0', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem' }}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <ArrowRight size={13} style={{ color: 'var(--accent-color)' }} /> {t.label}
                  </Link>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </section>
    </motion.div>
  );
};

export default TreatmentTemplate;
