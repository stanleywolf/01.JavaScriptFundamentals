'use strict';

function herInv(arr) {
    let result = [];

    for (let value of arr) {
        let tokens = value.split(/\s*\/\s*/);

        let name = tokens[0];
        let level = Number(tokens[1]);
        let items = [];

        if(tokens.length > 2){
            items = tokens[2].split(', ')
        }
        let hero = {name:name,level:level,items:items};
        result.push(hero);
    }
    console.log(JSON.stringify(result));
}
herInv(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);
console.log();
herInv(['Jake / 1000 / Gauss, HolidayGrenade']);