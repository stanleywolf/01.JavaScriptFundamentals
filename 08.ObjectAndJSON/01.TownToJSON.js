'use strict';

function town(arr) {

    let result =[];
    arr.shift();
    for (let i = 0; i < arr.length; i++) {
        let values = arr[i].split(/\s*\|\s*/g)
            .filter(a => a !== '');

        let obj = {};
        obj['Town'] = values[0];
        obj['Latitude'] = +values[1];
        obj['Longitude'] = +values[2];

        result.push(obj);
    }
    console.log(JSON.stringify(result))
}

town(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);

town(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']);
