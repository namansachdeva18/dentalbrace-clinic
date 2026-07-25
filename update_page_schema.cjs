const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'app', 'treatments', '[id]', 'PageClient.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

// The provider object currently looks like:
/*
    "provider": {
      "@type": "Dentist",
      "name": "The DentalBrace Clinic",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bibi Wala Road",
        "addressLocality": "Bathinda",
        "addressRegion": "Punjab",
        "postalCode": "151001",
        "addressCountry": "IN"
      }
    }
*/
const oldProviderRegex = /"provider": {\s*"@type": "Dentist",\s*"name": "The DentalBrace Clinic",\s*"address": {\s*"@type": "PostalAddress",\s*"streetAddress": "Bibi Wala Road",\s*"addressLocality": "Bathinda",\s*"addressRegion": "Punjab",\s*"postalCode": "151001",\s*"addressCountry": "IN"\s*}\s*}/;

const newProviderString = `"provider": {
      "@type": "Dentist",
      "name": "The DentalBrace Clinic",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bibi Wala Road",
        "addressLocality": "Bathinda",
        "addressRegion": "Punjab",
        "postalCode": "151001",
        "addressCountry": "IN"
      },
      "areaServed": [
        { "@type": "City", "name": "Bathinda" },
        { "@type": "City", "name": "Mansa" },
        { "@type": "City", "name": "Muktsar" },
        { "@type": "City", "name": "Faridkot" },
        { "@type": "City", "name": "Kotkapura" },
        { "@type": "City", "name": "Rampura Phul" },
        { "@type": "City", "name": "Talwandi Sabo" },
        { "@type": "City", "name": "Maur" },
        { "@type": "City", "name": "Raman" },
        { "@type": "City", "name": "Mandi Dabwali" }
      ]
    }`;

content = content.replace(oldProviderRegex, newProviderString);
fs.writeFileSync(filePath, content);
console.log('PageClient.jsx schema updated with areaServed.');
