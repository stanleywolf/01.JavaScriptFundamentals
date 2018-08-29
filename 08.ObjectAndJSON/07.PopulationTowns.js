'use strict'

function populationTowns(arr) {

    let result = new Map();

    for (let i = 0; i < arr.length; i++) {
       let[town,population] = arr[i].split(/\s*<->\s*/);

       if(!result.has(town)){
           result.set(town,0)
       }
       result.set(town,result.get(town) + +population);
    }
    for (let [key, valie] of result) {
        console.log(`${key} : ${valie}`);
    }
}

populationTowns(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);
populationTowns(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);