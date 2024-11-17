"use strict";

function getIndexedDB(name) {
    const transaction = db.transaction(['miAlmacen'], 'readonly');
    const almacen = transaction.objectStore('miAlmacen');
    const request = almacen.get(name);

    request.onsuccess = function(event) {
        if (request.result) {
            const valor = decodeURIComponent(request.result.valor);

            if(valor == passwordInput.value){
                loginMessage.style.color = "green";
                loginMessage.innerText = "¡Bienvenido!";

                setTimeout(function() {
                    window.location.href = "./ejercicios/index.html";
                }, 2000); 

                
                console.log(`IndexedDB: Recuperado ${name}=${valor}`);
            }else{
                loginMessage.style.color = "red";
                loginMessage.innerText = "Contraseña incorrecta.";
            }
        } else {
            loginMessage.style.color = "red";
            loginMessage.innerText = "Usuario no válido.";
            console.log(`IndexedDB: No existe el usuario: ${name}`);
        }
    };
    request.onerror = function(event) {
        console.error('IndexedDB: Error al obtener el dato', event);
    };
}
