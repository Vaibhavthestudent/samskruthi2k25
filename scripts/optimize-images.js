import { readdir, stat } from 'fs/promises';
import { join, extname } from 'path';
import sharp from 'sharp';

const QUALITY = 80;
const INPUT_DIR = './src/Resources';
const OUTPUT_DIR = './public/images';

const supportedFormats = ['.jpg', '.jpeg', '.png', '.gif'];

async function processImage(inputPath, outputPath) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Create WebP version
    await image
      .webp({ quality: QUALITY })
      .toFile(outputPath.replace(extname(outputPath), '.webp'));
    
    // If image is larger than 1200px, create a smaller version
    if (metadata.width > 1200) {
      await image
        .resize(1200, null, { withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(outputPath.replace(extname(outputPath), '-1200.webp'));
    }
    
    // Create thumbnail for lazy loading
    await image
      .resize(20, null, { withoutEnlargement: true })
      .blur(5)
      .webp({ quality: 30 })
      .toFile(outputPath.replace(extname(outputPath), '-thumb.webp'));
      
    console.log(`✓ Optimized: ${inputPath}`);
  } catch (error) {
    console.error(`✗ Error processing ${inputPath}:`, error);
  }
}

async function walkDirectory(dir) {
  const files = await readdir(dir);
  
  for (const file of files) {
    const path = join(dir, file);
    const stats = await stat(path);
    
    if (stats.isDirectory()) {
      await walkDirectory(path);
    } else if (supportedFormats.includes(extname(file).toLowerCase())) {
      const relativePath = path.replace(INPUT_DIR, '');
      const outputPath = join(OUTPUT_DIR, relativePath);
      await processImage(path, outputPath);
    }
  }
}

// Create output directory structure and start processing
async function main() {
  try {
    console.log('🔄 Starting image optimization...');
    await walkDirectory(INPUT_DIR);
    console.log('✅ Image optimization complete!');
  } catch (error) {
    console.error('❌ Error during optimization:', error);
    process.exit(1);
  }
}

main(); 