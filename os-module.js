//OS module
const os = require('os')
//info about current user
const user = os.userInfo()
console.log(user)

//how long computer is running in sec
//method returns the system uptime in seconds
console.log(`The syatem Uptime is ${os.uptime()}seconds`)

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)