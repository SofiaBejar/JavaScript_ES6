'use strict';

function showData() {
    console.log("Mostrando datos...");
    const tbody = document.getElementById("tbody"); 

    if (sessionStorage.getItem("sessionAcceso") && JSON.parse(sessionStorage.getItem("sessionAcceso")).length > 0) {
        dataSession = JSON.parse(sessionStorage.getItem("sessionAcceso")); 
        tbody.innerHTML = "Los datos almacenados son: <br />";

        dataSession.forEach(function (dataSession) {
            let tr = document.createElement("tr"), 
                nameCell = document.createElement("td"), 
                valueCell = document.createElement("td"), 
                deleteCell = document.createElement("td"), 
                updateCell = document.createElement("td"), 
                
                deleteButton = document.createElement("button"), 
                deleteImg = document.createElement("img"), 
                updateButton = document.createElement("button"), 
                updateImg = document.createElement("img");

            nameCell.innerHTML = dataSession.name; 
            valueCell.innerHTML = dataSession.value; 

            updateButton.textContent = "Actualizar";
            updateButton.addEventListener('click', function () { 
                document.getElementById("name").value = dataSession.name; 
                document.getElementById("value").value = dataSession.value; 
                deleteData(dataSession.name); 
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
                deleteData(dataSession.name); 
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
    console.table(dataSession);
}
