'use strict';

function Escape(arr) {

    let result = '<ul>\n';
    for (let text of arr) {
        result += `  <li>${htmlEscape(text)}</li>\n`
    }
    result += '</ul>';

    console.log(result);

    function htmlEscape(str) {
        return str.replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;')
                    .replace(/'/g, '&#39;');
    }
}
Escape(['<b>unescaped text</b>', 'normal text']);