'use strict';

function Employee(arr) {

    let regex = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([A-Za-z0-9 -]+)$/;

    for (let elem of arr) {
        let match = regex.exec(elem);
        if(match){
            console.log(`Name: ${match[1]}\nPosition: ${match[3]}\nSalary: ${match[2]}`)
        }
    }
}
Employee(['Isacc - 1000 - CEO',
        'Ivan - 500 - Employee',
        'Peter - 500 - Employee']);