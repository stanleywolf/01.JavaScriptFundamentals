function Valid(email) {

    let regex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-z]+$/g;

   // let regexTwo = new RegExp
    //        ('^[a-zA-Z0-9]+@[a-zA-Z]+\\.[a-z]+$','g');

    if(regex.test(email)){
        console.log('Valid');
    }else{
        console.log('Invalid');
    }
}

Valid('valid@email.bg');
Valid('invalid@emai1.bg');