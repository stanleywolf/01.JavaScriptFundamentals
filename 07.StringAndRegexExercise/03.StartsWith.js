'use strict';

function startWith(first,second) {

    if(first.startsWith(second)){
        console.log('true');
    }else{
        console.log('false');
    }
}

startWith('How have you been?', 'how');
startWith('The quick brown fox…', 'The quick brown fox…');
startWith('Marketing Fundamentals, starting 19/10/2016', 'Marketing Fundamentals, sta');