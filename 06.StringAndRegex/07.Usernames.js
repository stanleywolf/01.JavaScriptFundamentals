'use strict';

function UserNames(arr) {
    let result = [];

    for (let mail of arr) {
        let [username,rest] = mail.split("@");
        let words = rest.split('.').map(a => a[0]);
        result.push(username +'.'+ words.join(''));
    }
    console.log(result.join(', '));
}

UserNames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);