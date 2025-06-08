const{readFile, writeFile, read} = require('fs')
console.log('start');
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    const first = result;
    console.log(result)
    readFile('./content/sub-folder/test.txt','utf8',(err, result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt',
            `Here is the result : ${first}, ${second}`, 
            (arr,result)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log(result)
            }
            
        )
            
    })
})