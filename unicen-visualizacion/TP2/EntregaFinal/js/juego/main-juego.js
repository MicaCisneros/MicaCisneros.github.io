let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

let cantFig = 20;
let turno = 1;
let fichas = [];
let ultimaFigClickeada = null;
let isMouseDown = null;


this.drawJuego();

function drawJuego() {
    // let tab = new Tablero(this.ctx);
    // tab.draw();
    this.addFicha();
    drawTablero();
}

function drawTablero() {
    let color = "#000000";
    let posX = 30;
    let posY = 50;
    let w = 200;
    let h = 400;
    let tabl = new Tablero(ctx, posX, posY, w, h, color);
    tabl.draw();

    posX = 970
    let table = new Tablero(ctx, posX, posY, w, h, color);
    table.draw();

    let tablero = new Tablero(ctx, 250, posY, 700, 400, '#ffffff');
    tablero.drawJuego();
}


// function drawFigura() {
//     limpiarCanvas(); //sino me arrastra el elemento q muevo

// }

function addFicha() {
    let color = '#039000';
    let color2 = '#ff2221';
    for (let i = 0; i < cantFig / 2; i++) {
        let posX = (Math.round(Math.random() * 160)) + 45;

        let posY = (Math.round(Math.random() * 350) + 65);
        let ficha = new Ficha(posX, posY, 15, color, ctx, '#017000', i,1);

        fichas.push(ficha);
        ficha.draw();
    }

    for (let i = cantFig / 2; i < cantFig; i++) {
        let posX = Math.round(Math.random() * 160) + 985;
        let posY = Math.round((Math.random() * 350) + 65);
        let ficha = new Ficha(posX, posY, 15, color2, ctx, '#ff0000', i, 2);


        ficha.draw();
        fichas.push(ficha);
    }
}


function insertarFicha(){

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
//     addFiguras();
// }, 333)

function drawAll() {
    this.drawTablero();
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
    // drawAll();
}


/* EVENTOS PARA DETECTAR CUANDO QUIERE ARRASTRAR UNA FICHA*/
canvas.addEventListener('mousedown', onMouseDown, false);
canvas.addEventListener('mouseup', onMouseUp, false);
canvas.addEventListener('mousemove', onMouseMove, false);

/*  CUANDO CLICKEO  */
function onMouseDown(e) {
    isMouseDown = true;

    //le saco el resaltado a la figura que ya tenia seleccionada
    if (ultimaFigClickeada != null) {
        ultimaFigClickeada.setResaltado(false);
        //limpiarCanvas();
        ultimaFigClickeada = null
    }

    //chequeo si selecciono otra figura (o clickeo en otro lado)
    //coordenadas de donde clickeó, dentro del canvas x layer
    let x = e.layerX - e.currentTarget.offsetLeft;
    let y = e.layerY - e.currentTarget.offsetTop;
    let figuraClickeada = buscarFiguraSeleccionada(x, y);
    
    if (figuraClickeada != null) {
        if(figuraClickeada.getJugador() == turno){
            figuraClickeada.setResaltado(true);
            // limpiarCanvas();
            ultimaFigClickeada = figuraClickeada;
        }
        limpiarCanvas();
        drawAll();
    }

}

/*  CUANDO MUEVO EL MOUSE ARRASTRANDO UN OBJETO  */
function onMouseMove(e) {
    
    if (isMouseDown && ultimaFigClickeada != null) {
        if(ultimaFigClickeada.getJugador() == turno){
            ultimaFigClickeada.setPosicion(e.layerX - e.currentTarget.offsetLeft, e.layerY - e.currentTarget.offsetTop);
            limpiarCanvas();
            drawAll();
        }
    }
}

/*  CUANDO SUELTO EL OBJETO  */
function onMouseUp(e) {
    isMouseDown = false;
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



/*****************************************************************************/

function getPosMouse(canvas, evento) {
    let clientRect = canvas.getBoundingClientRect();
    return {
        // evento.clientX -canvas.offsetLeft
        x: Math.round(evento.clientX - canvas.offsetLeft),
        y: Math.round(evento.clientY - canvas.offsetLeft)
    }
}