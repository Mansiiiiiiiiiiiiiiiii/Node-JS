const{readFile, writeFile} = require('fs')

readFile('./content/first.txt',(err,result)=>{
    if(err){
        console.log(arr)
        return;
    }
    console.log(result)
})