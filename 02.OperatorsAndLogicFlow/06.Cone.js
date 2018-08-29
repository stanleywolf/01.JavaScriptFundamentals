'use strict';

function calcConeVolumeAndSurface(radius,height) {

    let s = Math.sqrt(radius * radius + height * height);
    let volume = Math.PI * radius * radius * height / 3;
    console.log('volume = ' + volume);

    let area = Math.PI * radius * (radius + s)
    console.log(`area = ${area}`);
}

calcConeVolumeAndSurface(3,5);
calcConeVolumeAndSurface(3.3,7.8);