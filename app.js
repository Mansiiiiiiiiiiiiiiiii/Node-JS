const http = require('http')

const server = http.createServer((req,res)=>{
if(req.url ==='/'){
    res.end('Home Page')
}
})
server.listen(5000,()=>{
    console.log('Server Listening on port 50000....')
})