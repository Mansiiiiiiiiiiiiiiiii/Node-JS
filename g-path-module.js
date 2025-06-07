const path = require('path')
console.log(path.sep)

const filePath = path.join('/content/cccc','sub-folder','test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base) //Prints the base name i.r test.txt

const absolute = path.resolve(__dirname,'content','sub-folder','test.txt');
console.log(absolute)