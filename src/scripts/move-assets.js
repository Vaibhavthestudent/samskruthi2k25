const fs = require('fs');
const path = require('path');

// Create necessary directories in public
const directories = [
  'images',
  'images/logos',
  'images/sponsors',
  'images/gallery',
  'videos'
];

directories.forEach(dir => {
  const dirPath = path.join('public', dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

// Function to copy files
function copyFiles(sourceDir, targetDir) {
  if (!fs.existsSync(sourceDir)) return;

  const files = fs.readdirSync(sourceDir);
  
  files.forEach(file => {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);
    
    if (fs.lstatSync(sourcePath).isDirectory()) {
      if (!fs.existsSync(targetPath)) {
        fs.mkdirSync(targetPath, { recursive: true });
      }
      copyFiles(sourcePath, targetPath);
    } else {
      fs.copyFileSync(sourcePath, targetPath);
    }
  });
}

// Copy assets from src to public
copyFiles('src/Resources/logos', 'public/images/logos');
copyFiles('src/Resources/sponsor_logo', 'public/images/sponsors');
copyFiles('src/Resources/Gallery', 'public/images/gallery');
copyFiles('src/Resources/2k24', 'public/videos');

console.log('Assets moved successfully!'); 