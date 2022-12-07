import { join, dirname } from 'path';
import { readdirSync, statSync } from 'fs';
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

const folderPath = './projects/website/src/assets';
const files = ['png', 'jpg']
  .map((extension) => findFileByExtension(folderPath, extension))
  .flat();

files.forEach(async (file) => {
  await imagemin([file], {
    destination: dirname(file),
    plugins: [
      imageminWebp({
        quality: 80,
      }),
    ],
  });
});

function findFileByExtension(folderPath, extension, result = []) {
  const files = readdirSync(folderPath);

  files.forEach((file) => {
    const nestedFolderPath = join(folderPath, file);
    if (statSync(nestedFolderPath).isDirectory()) {
      findFileByExtension(nestedFolderPath, extension, result);
    } else {
      if (file.endsWith(extension)) {
        result.push(nestedFolderPath);
      }
    }
  });
  return result;
}
