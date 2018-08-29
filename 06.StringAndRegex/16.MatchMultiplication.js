'use strict';

function Multy(str) {
    let regex = /(-?[0-9]+)\s*\*\s*(-?[[0-9]+\.[0-9]+)/g;

    str = str.replace(regex,(all,g1,g2) => Number(g1 * Number(g2)));
    console.log(str);
}

Multy('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).');