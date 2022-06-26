const fs = require('fs');

const ICONS_DIRECTORY: string = './src/';
const ICON_DIST: string = './dist/meta.ts';

const FILE_BEFORE: string = 'const meta: Array<string> = [\n';
const FILE_AFTER: string = '];\n';

let icons: string = '';
let fileContent: string = ``;

fs.readdir(ICONS_DIRECTORY, (error, files: Array<string>) => {
  if (error) throw error;

  files.forEach(file => {
    const fileName: string = file.split('.')[0];
    const fileExt: string = file.split('.')[1];

    if (fileExt !== 'svg') return;

    return icons = icons + ` "${fileName}",\n`
  });

  fileContent = `${FILE_BEFORE}${icons}${FILE_AFTER}`

  fs.writeFile(ICON_DIST, fileContent, error => {
    if (error) throw error;

    return console.log(`✅ Wrote ${ICON_DIST}.`);
  });
});
