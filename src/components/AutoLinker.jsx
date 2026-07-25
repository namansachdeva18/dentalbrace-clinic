import React from 'react';
import Link from 'next/link';

// Semantic Dictionary linking terms to their primary entity pages
const semanticDictionary = {
  'Invisalign': '/treatments/invisalign',
  'Clear Aligners': '/treatments/invisalign',
  'Dental Implants': '/treatments/dental-implants',
  'All-on-4': '/treatments/all-on-4',
  'Smile Makeover': '/treatments/smile-makeover',
  'Dr. Sandeep Kumar': '/doctors/dr-sandeep-kumar',
  'Dr. Sandeep': '/doctors/dr-sandeep-kumar',
  'Dr. Ritu Saneja': '/doctors/dr-ritu-saneja',
  'Dr. Ritu': '/doctors/dr-ritu-saneja',
  'Braces': '/treatments/braces',
  'Ceramic Braces': '/treatments/braces',
  'Metal Braces': '/treatments/braces',
  'Dentofacial Orthopedics': '/treatments/dentofacial-orthopedics',
  'Digital Dentistry': '/treatments/digital-dentistry',
  'Intraoral Scanner': '/treatments/digital-dentistry',
  '3D Scanner': '/treatments/digital-dentistry',
  'Teeth Whitening': '/treatments/teeth-whitening',
  'Composite Bonding': '/treatments/composite-bonding',
  'Veneers': '/treatments/veneers',
  'Root Canal': '/treatments/root-canal',
  'Dental Crown': '/treatments/dental-crown-bridge',
  'Zirconia Crown': '/treatments/dental-crown-bridge',
  'Bridges': '/treatments/dental-crown-bridge',
  'Kids Dentistry': '/treatments/kids-dentistry',
  'Gum Treatment': '/treatments/gum-treatment',
  'Wisdom Tooth': '/treatments/wisdom-tooth-removal',
  'Maxillofacial Prosthetics': '/treatments/maxillofacial-prosthetics',
  'Digital Smile Design': '/treatments/smile-designing',
  'Smile Design': '/treatments/smile-designing',
  'Bathinda': '/',
};

// Words that should only be bolded for emphasis and highlighted in orange for easy scanning
const emphasisKeywords = [
  'Punjab', 'Gold Medalist', 'Ex-Resident', 'AIIMS', 'PGIMER',
  '5500+', '5000+', 'painless', 'permanent', 'virtually invisible',
  'Orthodontics', 'Prosthodontist', 'Implantologist', 'Paediatric Dentistry',
  'clear aligner', 'overbite', 'underbite', 'crossbite', 'diastema', 'SmartTrack', 'iTero', 'ClinCheck',
  'titanium screw', 'zirconia crown', 'osseointegration', 'bone loss', 'CBCT', 'All-on-6',
  'gum contouring', 'LED whitening', 'laser bleaching', 'Hollywood Smile', 'rotary endodontics',
  'mouth-breathing', 'breathing issues', 'snoring', 'sleep apnea', 'airway size', 'sleep issues',
  'swallowing', 'swallow', 'chewing', 'chew', 'speaking', 'speak',
  'trauma', 'cancer', 'cancer surgery', 'birth defects', 'cleft palates', 'cleft palate',
  'facial profile', 'jaw growth', 'facial asymmetry', 'airway problems', 'bite issues', 'skeletal imbalances',
  'obturators', 'prostheses', 'prosthetics', 'jaw surgery', 'facial bones',
  'misalignment', 'crooked teeth', 'tooth decay', 'gum disease', 'periodontitis',
  'infection', 'pain', 'restoration', 'rehabilitation'
];

export const AutoLinker = ({ text }) => {
  if (!text) return null;
  if (typeof text !== 'string') return text;

  // Combine both sets of keys, sort by length descending to prevent partial word matches
  const linkKeys = Object.keys(semanticDictionary);
  const allKeywords = [...linkKeys, ...emphasisKeywords].sort((a, b) => b.length - a.length);

  // Escape regex characters
  const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regexPattern = new RegExp(`\\b(${allKeywords.map(escapeRegExp).join('|')})\\b`, 'gi');

  const parts = text.split(regexPattern);

  // To prevent over-optimization, track linked terms in this block so we only link them once
  const linkedInThisBlock = new Set();

  return (
    <>
      {parts.map((part, i) => {
        const lowerPart = part.toLowerCase();
        
        // Find matching term from dictionaries (case-insensitive)
        const matchedLinkKey = linkKeys.find(k => k.toLowerCase() === lowerPart);
        const matchedEmphasisKey = emphasisKeywords.find(k => k.toLowerCase() === lowerPart);

        if (matchedLinkKey) {
          // If already linked in this paragraph, just bold it to prevent link stuffing
          if (linkedInThisBlock.has(matchedLinkKey)) {
            return <strong key={i} style={{ color: 'var(--accent-color)', fontWeight: '700' }}>{part}</strong>;
          }
          linkedInThisBlock.add(matchedLinkKey);
          return (
            <Link key={i} href={semanticDictionary[matchedLinkKey]} style={{ color: 'var(--accent-color)', fontWeight: '700', textDecoration: 'underline', textDecorationColor: 'var(--accent-color)', textUnderlineOffset: '3px' }}>
              {part}
            </Link>
          );
        } else if (matchedEmphasisKey) {
          return <strong key={i} style={{ color: 'var(--accent-color)', fontWeight: '700' }}>{part}</strong>;
        }

        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </>
  );
};
