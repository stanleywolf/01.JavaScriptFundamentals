'use srict';

function calcBoxes(bottles,boxCapacity) {

    let result = Math.ceil(bottles/boxCapacity);
    console.log(result);
}

calcBoxes(20,5);
calcBoxes(15,7);
calcBoxes(5,10);