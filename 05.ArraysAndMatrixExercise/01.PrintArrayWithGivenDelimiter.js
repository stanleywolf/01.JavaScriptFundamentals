'use strict'

function Print(input) {

    let result = [];
    let delim = input.pop();

    for (let i = 0; i < input.length; i++) {
        if(i === input.length -1){
            result += input[i]
            break
        }
        result += (input[i]);
        result += (delim)
    }
    console.log(result);
}

Print(['One', 'Two', 'Three', 'Four', 'Five', '-']);
