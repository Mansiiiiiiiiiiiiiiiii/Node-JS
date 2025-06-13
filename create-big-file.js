const {writeFileSync} = require('fs')
for(let i=0; i<100; i++){
    writeFileSync('./content/big.txt',`hello mansi ${i}\n`,{flag:'a'})
}