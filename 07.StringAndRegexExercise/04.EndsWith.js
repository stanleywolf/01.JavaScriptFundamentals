'use strict';

function endsWith(first,second) {

    if(first.endsWith(second)){
        console.log('true');
    }else{
        console.log('false');
    }
}
endsWith('This sentence ends with fun?',
    'fun?')