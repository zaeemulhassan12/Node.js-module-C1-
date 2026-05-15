const fs = require('fs');

const files = fs;

// files.readFile('read.txt', 'utf-8', (err, data) => {
//         console.log(err,data)
    
// });

// console.log('Hy its me Zaeem ul hassan first app on node js express framework');

const a =files.readFileSync('read.txt', 'utf-8');
console.log(a);

console.log('Files is read successfully');


const c = files.writeFileSync('write.txt', a);

console.log("File is written successfully");