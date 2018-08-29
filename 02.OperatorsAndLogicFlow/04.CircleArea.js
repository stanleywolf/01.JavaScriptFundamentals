'use strict';

function calcArea(r) {

    let area = Math.PI * r * r;
    console.log(area);

    let roundArea = area.toFixed(2);
    console.log(roundArea);
}
calcArea(5);