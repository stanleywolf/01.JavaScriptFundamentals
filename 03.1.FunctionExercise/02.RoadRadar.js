'use strict';

function rider(arr) {
    let[speed,area] = arr
    speed = Number(speed)

    function getLimit(area) {
        switch (area){
            case"motorway":
                return 130;
            case"city":
                return 50;
            case'residential':
                return 20;
            case'interstate':
                return 90
                    }
    }

    let limit = getLimit(area);

    function getPenalty(speed, limit) {
        let overspeed = speed - limit;

        if(overspeed <= 0){
            return false;
        }else if(overspeed > 0 && overspeed <= 20){
            return 'speeding'
        }else if(overspeed > 20 && overspeed <= 40){
            return 'excessive speeding'
        }else{
            return 'reckless driving'
        }
    }
    let penalty = getPenalty(speed,limit);

    if(penalty){
        console.log(penalty);
    }
}

rider([40, 'city']);
rider([21, 'residential']);
rider([120, 'interstate']);
rider([200, 'motorway']);