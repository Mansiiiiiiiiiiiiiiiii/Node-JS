const EventEmitter = require('event');

const customEmitter = new EventEmitter()

//on-lisdten for an event
//emit- emit an event

customEmitter.on('response',()=>{
    console.log(`data recieved`)
})

customEmitter.emit('response')
