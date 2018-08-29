'use strict';


function MagicMatrix(matrix) {
    let isMagic = true;

    let sum = matrix[0].reduce((a,b) => a + b);

    for (let row = 1; row < matrix.length; row++ ) {

        let sumRow = matrix[row].reduce((a,b) => a + b);
        if(sumRow !== sum){
            isMagic = false;
        }
    }
    for (let col = 0; col < matrix[0].length; col++) {
        let sumCol = 0;
        for (let row = 0; row < matrix.length; row++) {
            sumCol += matrix[row][col];
        }

        if (sumCol !== sum) {
            isMagic = false;
        }
    }
    return isMagic;
}

console.log(MagicMatrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));
console.log(MagicMatrix([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
));