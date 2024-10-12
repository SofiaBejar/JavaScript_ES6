"use strict"

function setCookie(name, value, minutes){
    let expires = "";
    if(minutes){
        const date = new Date();
        date.setTime(date.getTime() + minutes * 60 * 1000);
        expires = ";espires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value || "") + expires + ";path=/; Samesite=Strict; Secure";
    console.log(document.cookie)
}