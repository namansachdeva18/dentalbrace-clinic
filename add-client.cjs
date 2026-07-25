const fs = require('fs');
const files = [
    'src/components/ImplantsHero.jsx',
    'src/components/InvisalignHero.jsx',
    'src/components/MaxillofacialHero.jsx',
    'src/components/SmileMakeover.jsx',
    'src/components/Testimonials.jsx',
    'src/components/TreatmentNavigator.jsx',
    'src/components/Services.jsx',
    'src/components/PremiumSections.jsx'
];
files.forEach(f => {
    let c = fs.readFileSync(f, 'utf8');
    if (!c.includes('use client')) {
        c = "'use client';\n" + c;
        fs.writeFileSync(f, c, 'utf8');
        console.log('Fixed', f);
    }
});
