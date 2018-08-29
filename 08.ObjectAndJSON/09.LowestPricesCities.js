'use strict';

function lowestPrice(arr) {

    let map = new Map();
    for (let str of arr) {
        let[town,product,price] = str.split(' | ');
        if(!map.has(product)){
            map.set(product,new Map());
        }
        map.get(product).set(town,+price);
    }
    for (let [key, value] of map) {
        let sortedValues = Array.from(value.keys())
            .sort((k1,k2) => {return value.get(k1) - value.get(k2)});
        console.log(`${key} -> ${value.get(sortedValues[0])} (${sortedValues[0]})`);
    }
}

lowestPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);