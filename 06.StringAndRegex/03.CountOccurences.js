'use strict';

function Count(word,text) {

    let counter = 0;
    let index = text.indexOf(word);
    while (index > -1){
        counter++;
        index = text.indexOf(word,index + 1)
    }
    console.log(counter);
}

Count('the', 'The quick brown fox jumps over the lay dog.');

Count('ma', 'Marine mammal training is the training and ' +
    'caring for marine life such as, dolphins, ' +
    'killer whales, sea lions, walruses, ' +
    'and other marine mammals. ' +
    'It is also a duty of the trainer to do mental and ' +
    'physical exercises to keep the animal healthy and happy.');