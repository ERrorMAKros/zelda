var tablero;
var fondo = {
    imagenURL: "img/fondo.png",
    imagenOK: false,
};
var zelda = {
    x: 100,
    y: 100,
    frenteURL: "img/zelda-frente.png",
    frenteOK: false
};
var enemy = {
    x: 400,
    y: 200,
    lizURL: "img/liz.png",
    lizOK: false
};
var limitesTop = ["0", "0"];
var limitesRight = ["0", "500"];
var limitesBot = ["500", "500"];
var limitesLeft = ["500", "0"];



var teclas = {
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39
    }
    // Objeto Jason
function inicio() {
    var canvas = document.getElementById("campo");
    tablero = canvas.getContext("2d");

    fondo.imagen = new Image();
    fondo.imagen.src = fondo.imagenURL;
    fondo.imagen.onload = confirmarFondo;

    zelda.frente = new Image();
    zelda.frente.src = zelda.frenteURL;
    zelda.frente.onload = confirmarFrente;

    enemy.liz = new Image();
    enemy.liz.src = enemy.lizURL;
    enemy.liz.onload = confirmarEnemy;

    document.addEventListener("keydown", teclado);

}

function teclado(datos) {
    if (datos.keyCode == 38) {
        var codigo = datos.keyCode;
        if (codigo == teclas.UP) {
            zelda.y -= 50;
            dibujar();
        }
    }
    if (datos.keyCode == 40) {
        var codigo = datos.keyCode;
        if (codigo == teclas.DOWN) {
            zelda.y += 50;
            dibujar();
        }
    }
    if (datos.keyCode == 37) {
        var codigo = datos.keyCode;
        if (codigo == teclas.LEFT) {
            zelda.x -= 50;
            dibujar();
        }
    }
    if (datos.keyCode == 39) {
        var codigo = datos.keyCode;
        if (codigo == teclas.RIGHT) {
            zelda.x += 50;
            dibujar();
        } else {

        }
    }
    console.log(zelda.x);
}

if (zelda.x == "450") {
    alert("gi");

}

function confirmarEnemy() {
    enemy.lizOK = true;
    dibujar();
}

function confirmarFondo() {
    fondo.imagenOK = true;
    dibujar();
}

function confirmarFrente() {
    zelda.frenteOK = true;
    dibujar();
}

function dibujar() {
    //capa1
    if (fondo.imagenOK == true) {
        tablero.drawImage(fondo.imagen, 0, 0);
    }
    //capa2
    if (zelda.frenteOK == true) {
        tablero.drawImage(zelda.frente, zelda.x, zelda.y);
    }
    //capa3
    if (enemy.lizOK) {
        tablero.drawImage(enemy.liz, enemy.x, enemy.y);
    }
}

function movimiento() {
    zelda.x += 50;
    dibujar();
}