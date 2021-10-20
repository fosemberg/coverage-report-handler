const fs = require('fs');
const path = require('path');

const fileObjs = require('../data/Coverage-20211020T131852.json')

const pathToBuildFolder = path.join('build');
if (!fs.existsSync(pathToBuildFolder)) {
  fs.mkdirSync(pathToBuildFolder, { recursive: true });
}

const deleteUnusedCode = (fileObjs) => {
  const outFileObjs = [];
  for (const fileObj of fileObjs) {
    const {url, ranges, text} = fileObj;
    let outText = '';
    for (const {start, end} of ranges) {
      outText += text.slice(start, end);
    }

    const urlArr = url.split('/')
    const fileName = urlArr[urlArr.length - 1];
    outFileObjs.push({fileName, text: outText, url})
  }
  return outFileObjs
}

const writeFileObjsToFileSystem = (fileObjs) => {
  console.log(fileObjs)
  for (const {fileName, text} of fileObjs) {
    fs.writeFileSync(path.join(pathToBuildFolder, fileName || 'index.html'), text);
  }
}

writeFileObjsToFileSystem(deleteUnusedCode(fileObjs));
