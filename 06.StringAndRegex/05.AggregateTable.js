'use strict';

function Agg(arr) {
    let result = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
       let tokens = arr[i].split('|');
        let city = tokens[1].trim();
       sum += Number(tokens[2].trim());
        result.push(city);
    }
    console.log(result.join(', '));
    console.log(sum);
}

Agg(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']);