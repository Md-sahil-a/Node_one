const kepler = require('csv-parse');

const fs  = require('fs');
const result  = [];
fs.createReadStream('DataOfKepler.csv')
.on('data', (data)=>{
    result.push(data);
})
.on('end', ()=>{
    console.log(result);
    console.log('Done');
})
.on('error', (error)=>{
    console.log(error);
})