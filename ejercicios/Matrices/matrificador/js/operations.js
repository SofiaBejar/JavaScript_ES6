"use strict"

function addMatrix(){
    matrixR = buildMatrix(matrixSize.value);
    for(let i=0; i < matrixSize.value; i++){
        for(let j=0; j < matrixSize.value; j++){
            matrixR[i][j] = matrixA[i][j] + matrixB[i][j];
        }
    }
    resultM.replaceChildren(showMatrix(matrixR));
};

function subtractMatrix(){
    matrixR = buildMatrix(matrixSize.value);
    for(let i=0; i < matrixSize.value; i++){
        for(let j=0; j < matrixSize.value; j++){
            matrixR[i][j] = matrixA[i][j] - matrixB[i][j];
        }
    }
    resultM.replaceChildren(showMatrix(matrixR));
};

function multiplyMatrix(){
    matrixR = buildResultMatrix(matrixSize.value);
    for (let i = 0; i < matrixSize.value; i++) {
        for (let j = 0; j < matrixSize.value; j++) {
           for(let k = 0; k < matrixSize.value; k++) {  
                matrixR[i][j] += matrixA[i][k] * matrixB[k][j];      
            }
        }
    }
    resultM.replaceChildren(showMatrix(matrixR));
};