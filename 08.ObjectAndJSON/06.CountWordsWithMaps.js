'use strict';

function countWord(arr) {

    let map  = new Map();
    arr.join(' ').toLowerCase()
        .split(/[^\w]+/)
        .filter(a => a !== '')
        .forEach(word => {
            if(!map.has(word)){
                map.set(word,0)
            }
            map.set(word,map.get(word) + 1);
        });
    let sortedKeys = Array.from(map.keys()).sort();
    for (let value of sortedKeys) {
        console.log(`'${value}' -> ${map.get(value)} times`);
    }
}

countWord(['Far too slow, you\'re far too slow.']);
console.log()
countWord(['JS devs use Node.js for server-side JS.','JS devs use JS.','-- JS for devs --']);