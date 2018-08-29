'use strict';

function systemComp(input) {

    let map = new Map();
    for (let tokens of input) {
        let[first,second,third] = tokens.split(' | ');
        if(!map.get(first)){
            map.set(first,new Map())
        }
        if(!map.get(first).get(second)){
            map.get(first).set(second,[])
        }
        map.get(first).get(second).push(third);
    }

    let sortedFirst = Array.from(map.keys()).sort((a,b) => {
        if(map.get(a).size !== map.get(b).size ){
            return map.get(b).size - map.get(a).size
        }else {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        }
    });
    for (let key of sortedFirst) {
        console.log(key);

        let sortedThird = Array.from(map.get(key).keys()).sort((a,b) => {
            return map.get(key).get(b).length - map.get(key).get(a).length;
        });
        for (let comp of sortedThird) {
            console.log(`|||${comp}`);
            map.get(key).get(comp).forEach(a => console.log(`||||||${a}`))
        }
    }
}

systemComp(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4' ,
'Indice | Session | Default Storage',
'Indice | Session | Default Security']);