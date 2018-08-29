'use strict'

function AddRemove(arr) {

    let num = 1;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
       let command = arr[i];

       switch (command){
           case"add":
               result.push(num);
               num ++;
               break;
           case"remove":
               result.pop()
               num++;
               break;
       }
    }
    if(result.length === 0){
        console.log('Empty');
    }
    console.log(result.join('\n'));
}

AddRemove(['add', 'add', 'remove', 'add', 'add']);