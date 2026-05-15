//module wrap 

// console.log(__filename);
// console.log(__dirname);
// const log = require('./logger');
// // console.log(logger)

// log('hy its me zaeem ');

//module Path 

// const path = require('path');

// var pathobj = path.parse(__filename);


// console.log(pathobj);

//os module load 

// var osi = require('os');

// var TotalMemory  = osi.totalmem();

// var FreeMemory = osi.freemem();


// console.log('TotalMemory'+TotalMemory);
// console.log('freeMemory'+FreeMemory);

//template string 
//ES6 /ES2015 :ECMAScript 


// console.log(`ZAEEM UL HASSAN PC Total memory :${TotalMemory}`);
// console.log(`ZAEEM UL HASSAN PC Free Memory :${FreeMemory}`);

// const figlet = require('figlet');


const express = require("express");

const app = express();


app.use(function(req, res,next) {
console.log('Hy i am middleware');
next();
});
app.use(function(req,res,next){
    console.group('hy i am Second middleware');
    next();
})

app.get('/', (req, res) => {
res.send('Hy its me Zaeem ul hassan first app on node js express framework');
})

app.get('/profile', (req, res) => {
res.send('Zaeem Design Pixels');
});
app.listen(3000);