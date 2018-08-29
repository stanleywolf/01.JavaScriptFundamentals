function upper(str) {

    let strUpper = str.toUpperCase();
    strUpper = strUpper.split(/\W+/g).filter(s => s != '')
    console.log(strUpper.join(', '));
}

upper('Hi, how are you?');