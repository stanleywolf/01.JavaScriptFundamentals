'use strict';

function cook(arr) {

    let number = Number(arr.shift());

    function operate(operand, number) {
        switch (operand) {
            case"chop":
                return number / 2;
            case"dice":
                return Math.sqrt(number);
            case "spice":
                return number + 1;
            case "bake":
                return number * 3;
            case"fillet":
                return number * 0.8;
        }
    }

    for (const operand of arr) {

        number = operate(operand,number);
        console.log(number);
    }
}

cook(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);

cook(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);