const amount = 12;

if(amount<10){
    console.log('small number')
}
else{
    console.log('larger number')
}
console.log(`hay it's my first node app!!!`)

//Modules

const name = require('./name');
const sayHi = require('./module');
console.log(name)
const tanu = require('./alternative-flavor')
require('./mind-grenade')
console.log(tanu)
sayHi('Parul')
sayHi(name.chetna)
sayHi(name.ujjwal)