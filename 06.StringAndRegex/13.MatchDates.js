'use strict';

function Dates(text) {
    let regex = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;
    let exec;
    for (let str of text) {
        while (exec = regex.exec(str)){
            console.log(`${exec[0]} (Day: ${exec[1]}, Month: ${exec[2]}, Year: ${exec[3]})`)
        }

    }

}

Dates(['I am born on 30-Dec-1994.',
    'This is not date: 512-Jan-1996.',
    'My father is born on the 29-Jul-1955.']);
Dates(['1-Jan-1999 is a valid date.',
    'So is 01-July-2000.',
    'I am an awful liar, by the way – Ivo, 28-Sep-2016.']);