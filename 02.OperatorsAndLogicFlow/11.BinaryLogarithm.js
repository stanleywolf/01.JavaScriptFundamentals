'use strict';

function binary(nums) {
    for (let num of nums) {
        console.log(Math.log2(num));
    }
}
binary([1024,1048576,256,1,2]);