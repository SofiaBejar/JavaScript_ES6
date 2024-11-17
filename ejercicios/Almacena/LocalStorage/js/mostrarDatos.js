'use strict';

function showData() {
    console.log("Mostrando datos...");
    const tbody = document.getElementById("tbody"); 

    if (localStorage.getItem("localAcceso") && JSON.parse(localStorage.getItem("localAcceso")).length > 0) {
        dataLocal = JSON.parse(localStorage.getItem("localAcceso")); 
        tbody.innerHTML = "Los datos almacenados son: <br />";

        dataLocal.forEach(function (dataLocal) {
            let tr = document.createElement("tr"), 
                nameCell = document.createElement("td"), 
                valueCell = document.createElement("td"), 
                deleteCell = document.createElement("td"), 
                updateCell = document.createElement("td"), 
                
                deleteButton = document.createElement("button"), 
                deleteImg = document.createElement("img"), 
                updateButton = document.createElement("button"), 
                updateImg = document.createElement("img");

            nameCell.innerHTML = dataLocal.name; 
            valueCell.innerHTML = dataLocal.value; 

            updateButton.textContent = "Actualizar";
            updateButton.addEventListener('click', function () { 
                document.getElementById("name").value = dataLocal.name; 
                document.getElementById("value").value = dataLocal.value; 
                deleteData(dataLocal.name); 
                console.log("Actualizando datos...");
            });

            updateImg.src = "../../../img/actualizar.png"; 
            updateImg.width = "22"; 
            updateImg.height = "22";
            updateImg.style = "vertical-align: middle"; 
            updateButton.className = "calculate";

            deleteButton.textContent = "Borrar" 
            deleteButton.className = "borrar"; 
            deleteButton.addEventListener('click', function () { 
                deleteData(dataLocal.name); 
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
    console.table(dataLocal);
}
