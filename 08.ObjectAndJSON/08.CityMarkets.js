'use strict';

function cityMarket(arr) {

    let result = new Map();

    for (let i = 0; i < arr.length; i++) {
        let [town, product, quantity, price] = arr[i]
            .split(/ -> | : /);
        if (!result.has(town)) {
            result.set(town, new Map())
        }
       if (!result.get(town).has(product)) {
           result.get(town).set(product, 0)
       }
        result.get(town).set(product, +quantity * +price);
    }
    for (let [key, value] of result) {
        console.log(`Town - ${key}`);
        for (let [product, price] of value) {
            console.log(`$$$${product} : ${price}`);
        }
    }
}
cityMarket(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']
);