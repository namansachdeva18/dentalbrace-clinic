import * as Jimp from 'jimp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compressImage = async (filename, quality = 70, resizeWidth = null) => {
  const filePath = path.join(__dirname, 'public', filename);
  try {
    const image = await Jimp.read(filePath);
    if (resizeWidth && image.bitmap.width > resizeWidth) {
      image.resize(resizeWidth, Jimp.AUTO);
    }
    await image.quality(quality).writeAsync(filePath);
    console.log(`Successfully compressed ${filename}`);
  } catch (error) {
    console.error(`Failed to compress ${filename}:`, error);
  }
};

const run = async () => {
  console.log('Starting image compression...');
  await compressImage('clinic-interior.jpg', 60, 1920); // Max width 1920px for hero images
  await compressImage('favicon-logo.png', 80, 512); // Favicon doesn't need to be huge
  console.log('Finished.');
};

run();
