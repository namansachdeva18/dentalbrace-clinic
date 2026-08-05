const sharp = require('sharp');
const pngToIco = require('png-to-ico').default;
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  const inputPath = path.join(__dirname, '../public/logo.png');
  const tempDir = path.join(__dirname, '../temp_icons');
  
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
  }

  console.log('Loading and trimming original logo...');
  
  // 1. Trim the image and get a tightly cropped version
  const croppedBuffer = await sharp(inputPath)
    .trim({ threshold: 0 }) 
    .toBuffer();
    
  async function createSizedIcon(size, outputPath) {
    // 90% of canvas is the content.
    const contentSize = Math.round(size * 0.9);
    const paddingSize = size - contentSize;
    
    await sharp(croppedBuffer)
      .resize(contentSize, contentSize, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .extend({
        top: Math.floor(paddingSize / 2),
        bottom: Math.ceil(paddingSize / 2),
        left: Math.floor(paddingSize / 2),
        right: Math.ceil(paddingSize / 2),
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .toFile(outputPath);
  }

  console.log('Generating PNG icons...');
  await createSizedIcon(192, path.join(tempDir, 'icon.png'));
  await createSizedIcon(180, path.join(tempDir, 'apple-icon.png'));
  await createSizedIcon(512, path.join(tempDir, 'icon-512.png'));
  
  console.log('Generating ICO components...');
  await createSizedIcon(16, path.join(tempDir, 'icon-16.png'));
  await createSizedIcon(32, path.join(tempDir, 'icon-32.png'));
  await createSizedIcon(48, path.join(tempDir, 'icon-48.png'));
  
  console.log('Building favicon.ico...');
  const icoBuffer = await pngToIco([
    path.join(tempDir, 'icon-16.png'),
    path.join(tempDir, 'icon-32.png'),
    path.join(tempDir, 'icon-48.png')
  ]);
  
  fs.writeFileSync(path.join(tempDir, 'favicon.ico'), icoBuffer);
  
  console.log('Successfully generated all icons in temp_icons/');
}

generateFavicons().catch(err => {
    console.error('Failed to generate icons:', err);
    process.exit(1);
});
