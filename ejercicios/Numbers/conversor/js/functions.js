"use strict"

function toBase(text, base){
    textResult.innerHTML = "";
    result.innerHTML = "";

    for(let char of text){
        if(isNaN(char)){
            textResult.style.color = "red";
            textResult.innerHTML = "Debes introducir un número.";
            result.innerHTML = "";
            return false; 
        }
        else{
            validar=true;
        }
    }

    if(validar){
        textResult.style.color = "white";
        textResult.innerHTML = "El resultado es: ";
        result.innerHTML = parseInt(text).toString(base);
    }
}