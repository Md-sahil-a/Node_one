const { parse}  = require('csv-parse');

const fs  = require('fs');

const habitablePlanet = [];
const isHabitable = (planet)=>{
    return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] <1.11
    && planet['koi_prad'] < 1.6
}
fs.createReadStream('DataOfKepler.csv')
.pipe(parse({
    comment:'#',
    columns:true
}))

.on('data', (data)=>{
    if(isHabitable(data)){
        habitablePlanet.push(data);
    }
})
.on('end', ()=>{
    habitablePlanet.map((planet)=>{
        console.log(planet['kepler_name']);
    })


    console.log(`${habitablePlanet.length} planets that supports life`);
    console.log('Done');
})
.on('error', (error)=>{
    console.log(error);
})