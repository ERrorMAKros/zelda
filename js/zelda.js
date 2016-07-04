var tablero;
var fondo = {
    imagenURL: "img/fondo.png",
    imagenOK: false,
};
var zelda = {
    x: 100,
    y: 100,
    frenteURL: "img/zelda-frente.png",
    atrasURL: "img/zelda-atras.png",
    derURL: "img/zelda-der.png",
    izqURL: "img/zelda-izq.png",
    frenteOK: true,
    atrasOK: false,
    derOK: false,
    izqOK: false
};
var enemy = {
    x: 400,
    y: 200,
    lizURL: "img/zelda.png",
    lizOK: false
};

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

    zelda.atras = new Image();
    zelda.atras.src = zelda.atrasURL;

    zelda.der = new Image();
    zelda.der.src = zelda.derURL;


    zelda.izq = new Image();
    zelda.izq.src = zelda.izqURL;

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
            zelda.atrasOK = true;
            zelda.frenteOK = false;
            zelda.derOK = false;
            zelda.izqOK = false;
            dibujar();
        }
        if (zelda.y < 0) {
            zelda.y = 0;
            dibujar();
        }
        if (zelda.y <= 200 && (zelda.x === 0 || zelda.x === 50 || zelda.x === 100 || zelda.x === 200)) {
            zelda.y = 250;
            dibujar();
        }
        if (zelda.y >= 350 && (zelda.x === 150 || zelda.x === 200 || zelda.x === 250 || zelda.x === 300 || zelda.x === 350 || zelda.x === 400 || zelda.x === 450)) {
            zelda.y = 400;
            dibujar();
        }
    }
    if (datos.keyCode == 40) {
        var codigo = datos.keyCode;
        if (codigo == teclas.DOWN) {
            zelda.atrasOK = false;
            zelda.frenteOK = true;
            zelda.derOK = false;
            zelda.izqOK = false;
            zelda.y += 50;
            dibujar();
        }
        if (zelda.y > 450) {
            zelda.y = 450;
            dibujar();
        }
        if (zelda.y <= 200 && (zelda.x === 100 || zelda.x === 50 || zelda.x === 0)) {
            zelda.y = 150;
            dibujar();
        }
        if (zelda.y >= 350 && (zelda.x === 150 || zelda.x === 200 || zelda.x === 250 || zelda.x === 300 || zelda.x === 350 || zelda.x === 400 || zelda.x === 450)) {
            zelda.y = 300;
            dibujar();
        }

    }
    if (datos.keyCode == 37) {
        var codigo = datos.keyCode;
        if (codigo == teclas.LEFT) {
            zelda.atrasOK = false;
            zelda.frenteOK = false;
            zelda.derOK = false;
            zelda.izqOK = true;
            zelda.x -= 50;
            dibujar();
        }
        if (zelda.x < 0) {
            zelda.x = 0;
            dibujar();
        }
        if (zelda.y === 200 && zelda.x <= 100) {
            zelda.x = 150;
            dibujar();
        }
        if (zelda.x === 200 && zelda.y <= 200) {
            zelda.x = 250;
            dibujar();
        }
    }
    if (datos.keyCode == 39) {
        var codigo = datos.keyCode;
        if (codigo == teclas.RIGHT) {
            zelda.atrasOK = false;
            zelda.frenteOK = false;
            zelda.derOK = true;
            zelda.izqOK = false;
            zelda.x += 50;
            dibujar();
        }
        if (zelda.x > 450) {
            zelda.x = 450;
            dibujar();
        }
        if (zelda.x === 200 && zelda.y <= 200) {
            zelda.x = 150;
            dibujar();
        }
        if (zelda.x === 150 && zelda.y === 350) {
            zelda.x = 100;
            dibujar();
        }
    }
    console.log("y" + zelda.y + " " + "x" + zelda.x);
}



function confirmarEnemy() {
    enemy.lizOK = true;
    dibujar();
}

function confirmarFondo() {
    fondo.imagenOK = true;
    dibujar();
}

// function confirmarAtras() {
//     zelda.atrasOK = true;
//     dibujar();
// }

// function confirmarDer() {
//     zelda.derOK = true;
//     dibujar();
// }

// function confirmarIzq() {
//     zelda.izqOK = true;
//     dibujar();
// }

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
    if (enemy.lizOK) {
        tablero.drawImage(enemy.liz, enemy.x, enemy.y);
    }
    //capa3
    if (zelda.frenteOK == true) {
        tablero.drawImage(zelda.frente, zelda.x, zelda.y);
    }
    if (zelda.atrasOK == true) {
        tablero.drawImage(zelda.atras, zelda.x, zelda.y);
    }
    if (zelda.derOK == true) {
        tablero.drawImage(zelda.der, zelda.x, zelda.y);
    }
    if (zelda.izqOK == true) {
        tablero.drawImage(zelda.izq, zelda.x, zelda.y);
    }


}

function movimiento() {
    zelda.x += 50;
    dibujar();
}