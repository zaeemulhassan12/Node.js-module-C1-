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

const figlet = require('figlet');

figlet("Usman ahmad", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
