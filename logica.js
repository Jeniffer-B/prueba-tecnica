const validActions = 'ARL';
const validOrientation = 'NSEO'
let positionX = 0;
let positionY = 0;
let orientation = null;
let isvalid = false;

document.getElementById("enviar").addEventListener("click", calculatePosition)

function calculatePosition() {
    // obtener valores
    orientation = document.getElementById("orientation").value;
    orientation = orientation.toUpperCase();
    let movements = document.getElementById("movements").value;
    movements = movements.toUpperCase();
    positionX = parseInt(document.getElementById("positionX").value);
    positionY = parseInt(document.getElementById("positionY").value);
    let squareSize = parseInt(document.getElementById("squareSize").value);
    // comprovar orientacion
    if(validOrientation.indexOf(orientation) === -1) {
        alert("invalid orientation")
        return
    }
    for(i=0; i<movements.length; i++){
        let letra = movements[i]
        if(validActions.indexOf(letra) === -1) {
            alert("invalid movements")
            return
        }
        switch(letra) {
            case 'A':
                move();
                break;
            case 'R':
                rotateR()
                break;
            case 'L':
                rotateL()
                break;
        }
    }
    checkPositionIsCorrect(squareSize, positionX, positionY)
    document.getElementById("finalCoordinatesX").innerHTML= positionX;
    document.getElementById("finalCoordinatesY").innerHTML= positionY;
    document.getElementById("finalOrientation").innerHTML= orientation;
    document.getElementById("result").innerHTML= isvalid;
}
function checkPositionIsCorrect(squareSize,positionX, positionY) {
    if(Math.sign(positionX) === -1 || 
        Math.sign(positionY) === -1 || 
        squareSize < positionX || 
        squareSize < positionY ) {
        isvalid = false;
        alert("fuera del cuadrado")
    } else {
        isvalid = true;
    }
}
function rotateR() {
    switch(orientation) {
        case 'N':
            orientation = 'E'
            break;
        case 'S':
            orientation = 'O'
            break;
        case 'O':
            orientation = 'N'
            break;
        case 'E':
            orientation = 'S'
            break;
    }
}
function rotateL() {
    switch(orientation) {
        case 'N':
            orientation = 'O'
            break;
        case 'S':
            orientation = 'E'
        case 'O':
            orientation = 'S'
        case 'E':
            orientation = 'N'
    }
}

function move() {
    switch(orientation) {
        case 'N':
            positionY = positionY + 1
            break;
        case 'S':
            positionY = positionY -1
            break;
        case 'E':
            positionX = positionX +1
            break;
        case 'O':
            positionX = positionX -1
            break;
    }
}

