'use strict';

function userNames(input) {

    let set = new Set();

    for (let names of input) {
        set.add(names);
    }
    let sorted = Array.from(set).sort((a,b) =>{
        if(a.length !== b.length){
            return a.length - b.length
        }else {
            return a.toLowerCase().localeCompare(b.toLowerCase())
        }
    });
    for (let name of sorted) {
        console.log(name);
    }
}

userNames(['Ashton',
'Kutcher',
'Ariel',
'Lilly',
'Keyden',
'Aizen',
'Billy',
'Braston']);