"use strict"

let matrixA, matrixB, matrixR;

function randomValues(){
    matrixSize.value = parseInt(random(2, 6));
    minValue.value = parseInt(random(10, 99));
    maxValue.value = parseInt(random(10, 99));

    if(maxValue.value < minValue.value){
        var tmp = minValue.value;
        minValue.value = maxValue.value;
        maxValue.value = tmp;
    }
}

function buildMatrix(matrixSize){
    let matrix = new Array(matrixSize);
    for(let i=0; i < matrixSize; i++){
        matrix[i] = new Array (matrixSize);
    }

    for(let i=0; i < matrixSize; i++){
        for(let j=0; j < matrixSize; j++){
            matrix[i][j] = random(parseInt(minValue.value), parseInt(maxValue.value));
        }
    }
    console.table(matrix) ;
    return matrix;
}

function fillMatrix(){
    matrixA = buildMatrix(matrixSize.value);
    resultMA.replaceChildren(showMatrix(matrixA));

    matrixB = buildMatrix(matrixSize.value);
    resultMB.replaceChildren(showMatrix(matrixB));
}

function buildResultMatrix(matrixSize){
    let matrix = new Array(matrixSize);
    for(let i=0; i < matrixSize; i++){
        matrix[i] = new Array (matrixSize);
    }

    for(let i=0; i < matrixSize; i++){
        for(let j=0; j < matrixSize; j++){
            matrix[i][j] = 0;
        }
    }
    console.table(matrix) ;
    return matrix;
}

function showMatrix(matrix){
    let table = document.createElement("table");
    for(let i=0; i < matrixSize.value; i++){
        let tr = document.createElement("tr");
        for(let j=0; j < matrixSize.value; j++){        
            let td = document.createElement("td");
            let content = document.createTextNode(matrix[i][j]);
            td.appendChild(content);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
}

