const{readFile, writeFile} = require('fs').promises
// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const getText = (path) =>{
//     return new Promise((resolve,reject)=>{
// readFile(path,'utf8',(err,data)=>{
//     if(err){
//         reject(err)
//     }
//     else{
//         resolve(data)
//     }
// })
//     })
// }

// getText('./content/first.txt')
// .then(result => console.log(result))
// .catch(err=>console.log(err))

const start = async() =>{
    try{
const first =await readFile('./content/first.txt','utf8');
const result =await readFile('./content/result-async.txt','utf8');
await writeFile('./content/result-mind-grenade.txt',`THIS IS AWESOME:
    ${first} ${result} {flag:'a'}`)
console.log(first,result)
    }
    catch(error){
        console.log(error)
    }
    
}
start()