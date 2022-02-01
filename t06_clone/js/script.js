const planet = {
    name: 'Earth',
    location: 'Solar System',
    moons: 1,
    type: 'Terrestrial Planet'
};

console.log(planet);
let cpy = copyObj(planet);
console.log(cpy);

planet.name = 'Mars';
console.log(planet);
console.log(cpy);

cpy.moons = 5;
console.log(planet);
console.log(cpy);

planet.type = 'Red Planet';
console.log(planet);
console.log(cpy);

cpy.location = 'Out of Solar System';
console.log(planet);
console.log(cpy);


function copyObj(obj) {
    let newObj = new Object();
    for (let key in obj) {
        newObj[key] = obj[key];
    }
    return newObj;
}