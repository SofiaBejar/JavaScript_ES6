'use strict';

function showData() {
    console.log("Mostrando datos...");
    const tbody = document.getElementById("tbody"); 

    if (document.cookie && document.cookie.length > 0) { 
        data = document.cookie.split(";"); 
        tbody.innerHTML = "Los datos almacenados son: ";

        data.forEach(function (dato) {
            let tr = document.createElement("tr"), 
                nameCell = document.createElement("td"), 
                valueCell = document.createElement("td"), 
                deleteCell = document.createElement("td"), 
                updateCell = document.createElement("td"), 
                
                deleteButton = document.createElement("button"), 
                deleteImg = document.createElement("img"), 
                updateButton = document.createElement("button"), 
                updateImg = document.createElement("img"); 

            
            dato = dato.split("=");
            nameCell.innerHTML = decodeURIComponent(dato[0]); 
            valueCell.innerHTML = decodeURIComponent(dato[1]); 
            

            updateButton.textContent = "Actualizar";

            updateButton.addEventListener('click', function () { 
                document.getElementById("name").value = decodeURIComponent(dato[0]);
                document.getElementById("value").value = decodeURIComponent(dato[1]);
                deleteData(dato[0]); 
                console.log("Actualizando datos...");
            });

            updateImg.src = "../../../img/actualizar.png"; 
            updateImg.width = "22"; 
            updateImg.height = "22";
            updateImg.style = "vertical-align: middle"; 
            updateButton.className = "calculate";


            deleteButton.textContent = "Borrar ";
            deleteButton.addEventListener('click', function () { 
                deleteData(dato[0]); 
            });

            deleteImg.src = "../../../img/eliminar.png"; 
            deleteImg.width = "22"; 
            deleteImg.height = "22";
            deleteImg.style = "vertical-align: middle";
            deleteButton.className = "calculate";

            updateButton.appendChild(updateImg); 
            updateCell.appendChild(updateButton); 
            deleteButton.appendChild(deleteImg); 
            deleteCell.appendChild(deleteButton); 

            tr.appendChild(nameCell); 
            tr.appendChild(valueCell); 
            tr.appendChild(updateCell); 
            tr.appendChild(deleteCell); 
            
            tbody.appendChild(tr); 

        });
    } else {
        tbody.innerHTML = 'No existen datos almacenados';
    }
    console.table(data);
}