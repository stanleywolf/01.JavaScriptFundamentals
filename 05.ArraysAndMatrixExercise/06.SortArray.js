'use strict'

function Sort(arr) {

    let sortedArray = arr.sort()
        .sort((a,b) => a.length - b.length);

    console.log(sortedArray.join('\n'));
}

Sort(['alpha','beta','gamma']);