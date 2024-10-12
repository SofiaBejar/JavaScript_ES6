"use strict"

function eraseCookie(name){
    document.cookie = name + "=; MaxAge=0; path=/; SameSite=Strict; Secure";
    console.log(document.cookie);
}