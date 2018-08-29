'use strict';

function cappyJuice(arr) {

    let bottles = {};
    let quantities ={};
    for (let tokens of arr) {
        let[fruit,quantity] = tokens.split(' => ');

        if(!quantities.hasOwnProperty(fruit)){
            quantities[fruit] = 0
        }
        quantities[fruit] += +quantity;
        if(quantities[fruit] >= 1000){
            bottles[fruit] = parseInt(quantities[fruit] / 1000)
        }
    }
    for (let key of Object.keys(bottles)) {
        console.log(`${key} => ${bottles[key]}`);
    }
}

cappyJuice(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);
console.log()
cappyJuice(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789',]
);