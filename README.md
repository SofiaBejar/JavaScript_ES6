# JavaScript_ES6

En esta plantilla nos encontramos con un index que da acceso a dos index 
más, que encontramos dentro de la carpeta ejercicios.
Estos dos ejercicios hacen lo mismo, es por ello que refactorizamos el 
JavaScript para tener uno solo compartido.

En el script.js, no encontramos con:

* document.getElementById("boton") - que lo que hace es obtener el 
elemento con id = boton.

*document.getElementById("resultado") - que obtiene el elemento con id = 
resultado).

* por último tengo un boton.addEventListener("click", function () - esto 
añade un evento al botón para cuando se haga clic sobre el.

* si se hace click sobre el botón, se llama a la función mostrar, entonces 
nos vamos a junciones.js y encontramos:
 
* "use strict" - que habilita el modo estricto en javaScript, y nos ayuda 
a evitar errores comunes.

* a continuación encontramos la función mostrar que lo que hace es:

	* console.log -  que muestra el siguiente mensaje en la consola 
web: `Estoy mostrando el resultado del ${resultado.getAttribute('name')}`.
Gracias al ${resultado.getAttribute('name')}, podemos generalizar esta 
función para ambos ejercicios ya que está obteniendo el nombre y número 
del ejercicio para ponerlo en la situación que corresponda.

	* en el resultado.innerHTML cambiamos el contenido HTML con el ID 
resultado, en este caso volvemos a repetir el 
${resultado.getAttribute('name')}, para poder darle el nombre adecuado del 
ejercicio.
