const EventEmitter = require('events');

const customEmitter = new EventEmitter();

//on-lisdten for an event
//emit- emit an event
// Listen for the 'response' event
customEmitter.on('response',(name,age)=>{
    console.log(`data recieved user ${name} with age: ${age}`);
})

customEmitter.on('response',() =>{
    console.log(`some other logic here`);
})
customEmitter.emit('response','Anupriya gupta',23);
