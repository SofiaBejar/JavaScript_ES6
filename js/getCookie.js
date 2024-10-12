"use strict"

function getCookie(name){
    const nameEQ = name + "=";
    const cookies = document.cookie.split("; ");
    console.log(`Cookies almacenadas: ${cookies}`);

    for(let cookie of cookies){
        console.log(`Clave: ${cookie}`);
        if(cookie.indexOf(nameEQ) === 0){
            console.log(`Valor: ${cookie.substring(nameEQ.length)}`);
            return decodeURIComponent(cookie.substring(nameEQ.length));

        }
    }
    return null;
}