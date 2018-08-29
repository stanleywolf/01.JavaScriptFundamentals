'use strict';

function extractLinks(text) {

    let regex = /www\.[A-Za-z0-9\-]+(\.[a-z]+)+/g;

    let match;

    while (match = regex.exec(text)) {
        console.log(match[0]);
    }
}

extractLinks();
extractLinks();
