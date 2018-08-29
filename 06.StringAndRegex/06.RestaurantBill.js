'use strict';

function Bill(items) {

    let products = items
        .filter((elem,index) => index %2 === 0)
        .join(', ');
    let price = items
        .filter((elem,index) => index %2 === 1)
        .reduce((a,b) => +a + Number(b));

    console.log(`You purchased ${products} for a total sum of ${price}`)
}

//+a === Number(a)
Bill(['Beer Zagorka', '2.65',
    'Tripe soup', '7.80',
    'Lasagna', '5.69']);