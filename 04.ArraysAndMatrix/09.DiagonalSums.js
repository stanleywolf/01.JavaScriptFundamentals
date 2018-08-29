'use strict'

function DiagonalSum(matrix) {

    let result = [];

    let leftSum = 0
    let rightSum = 0

    for (let row = 0; row < matrix.length; row++) {

        leftSum += matrix[row][row];
        rightSum += matrix[row][matrix.length - 1 - row]
    }
        result.push(leftSum);
        result.push(rightSum);

    console.log(result.join(' '));
}

DiagonalSum([
    [20, 40],
    [10, 60]]
);
DiagonalSum([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
);