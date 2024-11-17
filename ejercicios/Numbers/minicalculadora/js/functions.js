"use strict"

function verifyNumber(text, error){
    for(let char of text){
        if(isNaN(char)){
            if(char != '.') {
                return false;
            } 
        }
    }
    let max = Number.MAX_SAFE_INTEGER;
    if(parseFloat(text) >= max){
        alert("El número es demasiado grande para operar.");
    }
    return true;
}

function factorial(n) {
    if (n === 0 || n === 1) {
    return 1;
    } else {
    return n * factorial(n - 1);
    }
}

