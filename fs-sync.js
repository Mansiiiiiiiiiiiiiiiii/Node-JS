const { readFileSync, writeFileSync } = require('fs');

try {
    console.log('start');
    const first = readFileSync('./content/first.txt', 'utf8');
    const second = readFileSync('./content/sub-folder/test.txt', 'utf8');
    console.log(first, second);
    writeFileSync('./content/result-sync.txt',`Here is a result : ${first}, ${second},{ flag: 'a' }`)
    console.log('done with the task');
    console.log('starting the next one')
} 
catch (err) {
    console.error('Error reading files:', err.message);
}