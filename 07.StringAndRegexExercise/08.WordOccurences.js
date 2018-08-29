'use strict';

function wordOcc(text,word) {

    let counter = 0;
    let regex = new RegExp("\\b"+word+"\\b", "gi");

    let match;

    while (match= regex.exec(text)){
        counter++;
    }
    console.log(counter);
}

wordOcc('The waterfall was so high, that the child couldn’t see its peak.', 'the');
wordOcc('How do you plan on achieving that? How? How can you even think of that?', 'how');