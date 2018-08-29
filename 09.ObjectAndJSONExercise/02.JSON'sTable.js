'use strict';

function tableJson(str) {

    let result = `<table>\n`;
    for (let elem of str) {
        let obj = JSON.parse(elem);

        result += `  <tr>\n      <td>${htmlEscape(obj.name)}</td>\n`;
        result += `      <td>${htmlEscape(obj.position)}</td>\n`;
        result += `      <td>${obj.salary}</td>\n  <tr>\n`;
    }
    result += `</table>`;
    console.log(result);

    function htmlEscape(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}

tableJson(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
])