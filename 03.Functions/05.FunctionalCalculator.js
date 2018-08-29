'use strict';

function calc(a,b,op) {

    switch (op){
        case '+': return a+b;
        case '-': return a-b;
        case '*': return a*b;
        case '/': return a/b;

    }
}
console.log(calc(4,5,'+'));