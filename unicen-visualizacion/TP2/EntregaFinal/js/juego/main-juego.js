let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let hayGanador = false;
let cantFig = 21;
let turno = 1;
let fichas = [];
let ultimaFigClickeada = null;
let isMouseDown = null;
let tamanio = 4;
var ganador1 = document.querySelector("#winnerone");
let turnoJugador = document.getElementById("turno-jug");
let cartel1 = document.querySelector("#winner1");
let cartel2 = document.querySelector("#winner2");
let headerGame = document.querySelector(".header-game");
let cartelInicio = document.querySelector(".iniciar-juego");
let timer = null;
let iniciado = false;
let timerVariable = null;
let totalSeconds = 0;
let tablero = null;
this.drawJuego(4);

document.querySelector('#iniciar').addEventListener('click', () => {
    canvas.classList.remove("blurear");
    headerGame.classList.remove("blurear");
    cartelInicio.classList.add("ocultar");
    iniciado = true;
    timer = setTimeout(reiniciar, 300000);
    timerVariable = setInterval(countUpTimer, 1000);
});


function countUpTimer() {
    ++totalSeconds;
    var hour = Math.floor(totalSeconds / 3600);
    var minute = Math.floor((totalSeconds - hour * 3600) / 60);
    var seconds = totalSeconds - (hour * 3600 + minute * 60);
    document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
}
//Seleccion de modo de juego (4-5 o 6 en fila)
document.querySelector('#select-tamanio').addEventListener('click', () => {
    if(iniciado){
        let tam = document.querySelector('#select-tamanio').value;
        console.log(tam);
        if (tam) {
            tamanio = tam;
            fichas = [];
    
            limpiarCanvas();
            drawJuego();
        }
    }


});

//Reiniciar juego (4-5 o 6 en fila)
document.querySelector('#reiniciar').addEventListener('click', () => {
    if(iniciado){
        reiniciar();
    }
    
});




function reiniciar() {
    hayGanador = false;
    cartel1.classList.remove("cartelGanadorVisible");
    cartel1.classList.add("cartelGanador");
    cartel2.classList.remove("cartelGanadorVisible");
    cartel2.classList.add("cartelGanador");
    canvas.classList.remove("canvasJuego");
    fichas = [];
    turno = 1;
    limpiarCanvas();
    drawJuego();
    clearInterval(timerVariable);
    totalSeconds = 0;
    timerVariable = setInterval(countUpTimer, 1000)
    timer = setTimeout(reiniciar, 300000);
}





function drawJuego() {
    // let tab = new Tablero(this.ctx);
    // tab.draw();

    this.addFicha();
    drawTablero();
    iniciarJuego();
    imprimirTurno();
}


function drawTablero() {
    let color = "#000000";
    let posX = 30;
    let posY = 50;
    let w = 200;
    let h = 400;
    let latIzq = new Tablero(ctx, posX, posY, w, h, color);
    latIzq.draw();

    posX = 970;
    let latDer = new Tablero(ctx, posX, posY, w, h, color);
    latDer.draw();
}

function iniciarJuego() {
    let posY = 50;
    tablero = new Tablero(ctx, 250, posY, 700, 400, '#ffffff', tamanio);
    tablero.iniciarJuego(tamanio);
}



// function drawFigura() {
//     limpiarCanvas(); //sino me arrastra el elemento q muevo

// }

// function addFicha() {
//     console.log(2);


//     let color = '#039000';
//     let color2 = '#ff2221';
//     for (let i = 0; i < cantFig / 2; i++) {
//         let posX = (Math.round(Math.random() * 160)) + 45;

//         let posY = (Math.round(Math.random() * 350) + 65);
//         let ficha = new Ficha(posX, posY, 15, color, ctx, '#017000', i);

//         fichas.push(ficha);
//         ficha.draw();
//     }

//     for (let i = cantFig / 2; i < cantFig; i++) {
//         let posX = Math.round(Math.random() * 160) + 985;
//         let posY = Math.round((Math.random() * 350) + 65);
//         let ficha = new Ficha(posX, posY, 15, color2, ctx, '#ff0000', i);


//         ficha.draw();
//         fichas.push(ficha);
//     }
// }



function addFicha() {
    console.log(2);

    if (tamanio == 4) {
        cantFig = 15;
    } else if (tamanio == 5) {
        cantFig = 21;
    } else if (tamanio == 6) {
        cantFig = 28;
    }

    let colorRojo = '#039000';
    let colorAmarrilla = '#ff2221';
    for (let i = 0; i < cantFig; i++) {
        this.img = new Image();
        this.img.src = "img/fichaAmarrilla2.png"; 
        let posXAmarrilla = (Math.round(Math.random() * 160)) + 45;
        let posYAmarrilla = (Math.round(Math.random() * 350) + 65);
        let posXRoja = Math.round(Math.random() * 160) + 985;
        let posYRoja = Math.round((Math.random() * 350) + 65);
        let fichaRoja = new Ficha(posXRoja, posYRoja, 15, colorRojo, ctx, '#017000', i, 2);
        let fichaAmarrilla = new Ficha(posXAmarrilla, posYAmarrilla, 15, colorAmarrilla, ctx, '#ff0000', i, 1);
        fichaRoja.draw(2);
        fichaAmarrilla.draw(1);
        fichas.push(fichaRoja);
        fichas.push(fichaAmarrilla);

    }
}




// function drawFicha() {

//     for (let i = 0; i < figuras.length; i++) {
//         figuras[i].draw();
//     }
// }



// function addFiguras() {
//     addFigura();
//     if (figuras.length < cantFig) {
//         setTimeout(addFiguras, 333);
//     }
// }

// setTimeout(() => {
//     reiniciar();
//     //addFiguras();
// }, 333)

function drawAll() {
    this.drawTablero();
    tablero.drawJuego(tamanio);
    console.log(fichas.length);
    for (let i = 0; i < fichas.length; i++) {
        fichas[i].draw();
    }
}

/**borro y redibujo todo */
function limpiarCanvas() {
    // ctx.fillStyle = "#FFFFFF"
    // ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    // drawAll();
    canvas.width = canvas.width;
}


/* EVENTOS PARA DETECTAR CUANDO QUIERE ARRASTRAR UNA FICHA*/

    canvas.addEventListener('mousedown', onMouseDown, false);
    canvas.addEventListener('mouseup', onMouseUp, false);
    canvas.addEventListener('mousemove', onMouseMove, false);


/*  CUANDO CLICKEO  */
function onMouseDown(e) {
    if(iniciado){
        isMouseDown = true;

        //le saco el resaltado a la figura que ya tenia seleccionada
        if (ultimaFigClickeada != null) {
            ultimaFigClickeada.setResaltado(false);
            //limpiarCanvas();
            ultimaFigClickeada = null
        }
    
        //chequeo si selecciono otra figura (o clickeo en otro lado)
        //coordenadas de donde clicke??, dentro del canvas x layer
        let x = e.layerX - e.currentTarget.offsetLeft;
        let y = e.layerY - e.currentTarget.offsetTop;
        let figuraClickeada = buscarFiguraSeleccionada(x, y);
    
        if (figuraClickeada != null) {
            if (figuraClickeada.getJugador() == turno && hayGanador == false) {
                figuraClickeada.setResaltado(true);
                // limpiarCanvas();
                ultimaFigClickeada = figuraClickeada;
            }
        }
        limpiarCanvas();
        drawAll();
    }

}

/*  CUANDO MUEVO EL MOUSE ARRASTRANDO UN OBJETO  */
function onMouseMove(e) {
    if(iniciado){
        if (isMouseDown && ultimaFigClickeada != null) {
            if (ultimaFigClickeada.getJugador() == turno) {
                ultimaFigClickeada.setPosicion(e.layerX - e.currentTarget.offsetLeft, e.layerY - e.currentTarget.offsetTop);
                limpiarCanvas();
                drawAll();
            }
        }
    }

}

/*  CUANDO SUELTO EL OBJETO  */
function onMouseUp(e) {
    if(iniciado){

        if (ultimaFigClickeada != null) {

            for (let i = 0; i < fichas.length; i++) {
                if (tablero.checkInsert(ultimaFigClickeada) != -1) {
                    if (JSON.stringify(fichas[i]) === JSON.stringify(ultimaFigClickeada)) {
                        let col = tablero.checkInsert(ultimaFigClickeada);
                        let fila = tablero.insertarFicha(col, turno);
                        console.log(fila);
                        fichas.splice(i, 1);
                        cantFig--;
                        hayGanador = tablero.esGanador(turno, col, fila);
                        if (hayGanador) {
                            canvas.classList.add("canvasJuego");
                            showGanador(hayGanador);
                        }
                        console.log(hayGanador);
                        cambiarTurno();
                        imprimirTurno();
                        limpiarCanvas();
                        drawAll();
    
                    }
                }
            }
        }
        isMouseDown = false;
    }
   
}

function cambiarTurno() {
    if (turno == 1) {
        turno = 2;
    } else if (turno == 2) {
        turno = 1
    }
}

//muestra a que jugador le toca jugar
function imprimirTurno() {
    // let jug = fichas[0].getJugador();
    turnoJugador.innerHTML = "Jugador " + turno;
}

/* cada figura se fija si clickeo en ella*/
function buscarFiguraSeleccionada(x, y) {
    for (let i = 0; i < fichas.length; i++) {
        const fi = fichas[i];

        if (fi.isPointInside(x, y)) {
            console.log(fi);
            return fi;
        }
    }
}

function getGanador() {
    return hayGanador;
}


/*****************************************************************************/

function getPosMouse(canvas, evento) {
    let clientRect = canvas.getBoundingClientRect();
    return {
        // evento.clientX -canvas.offsetLeft
        x: Math.round(evento.clientX - canvas.offsetLeft),
        y: Math.round(evento.clientY - canvas.offsetLeft)
    }
}

/****************************************/
function showGanador(jugador) {
    clearInterval(timerVariable);
    if (jugador == 1) {
        cartel1.classList.toggle("cartelGanadorVisible");
        cartel1.classList.toggle("cartelGanador");
    } else {
        cartel2.classList.toggle("cartelGanadorVisible");
        cartel2.classList.toggle("cartelGanador");
    }
}











// let cronometro = document.getElementById("timer");
// let identificadorIntervaloDeTiempo;
// let valor = 5;
// // repetirCadaSegundo()

// // function repetirCadaSegundo() {
//   identificadorIntervaloDeTiempo = setInterval(mandarMensaje, 1000);
// // }

// function mandarMensaje() {
//     valor++;
//   cronometro.innerHTML = "Ha pasado"+valor+ "segundo.";
// }