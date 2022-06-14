let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

let cantFig = 20;

let figuras = [];
let ultimaFigClickeada = null;
let isMouseDown = null;

// draw();

// function draw() {
//     //const canvas = document.getElementById('canvas');
//     //if (canvas.getContext) {
//     //  const ctx = canvas.getContext('2d');

//     ctx.beginPath();
//     ctx.moveTo(75, 50);
//     ctx.lineTo(100, 75);
//     ctx.lineTo(100, 25);
//     ctx.fill();
//     // }
// }

this.addFicha();


// function drawFigura() {
//     limpiarCanvas(); //sino me arrastra el elemento q muevo

// }

function addFicha() {
    console.log(2);

    let color = '#007755';

    for (let i = 0; i < cantFig; i++) {
        let posX = Math.round(Math.random() * canvasWidth);
        let posY = Math.round(Math.random() * canvasHeight);
        let ficha = new Ficha(posX, posY, 10, color, ctx);

        ficha.draw();
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
//     addFiguras();
// }, 333)

/**borro y redibujo todo */
// function limpiarCanvas() {
//     ctx.fillStyle = "#FFFFFF"
//     ctx.fillRect(0, 0, canvasWidth, canvasHeight);
// }


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
        ultimaFigClickeada = null
    }

    //chequeo si selecciono otra figura (o clickeo en otro lado)
    //coordenadas de donde clickeó, dentro del canvas x layer
    let figuraClickeada = buscarFiguraSeleccionada(e.layerX, e.layerY);

    if (figuraClickeada != null) {
        figuraClickeada.setResaltado(true);
        ultimaFigClickeada = figuraClickeada;
    }

    // drawFigura();
}

/*  CUANDO MUEVO EL MOUSE ARRASTRANDO UN OBJETO  */
function onMouseMove(e) {
    if (isMouseDown && ultimaFigClickeada != null) {
        ultimaFigClickeada.setPosicion(e.layerX, e.layerY);
        // drawFigura();
    }
}

/*  CUANDO SUELTO EL OBJETO  */
function onMouseUp(e) {
    isMouseDown = false;
}

/* cada figura se fija si clickeo en ella*/
function buscarFiguraSeleccionada(x, y) {
    for (let i = 0; i < figuras.length; i++) {
        const f = figuras[i];

        if (f.isPointInside(x, y)) {
            return f;
        }
    }
}



/*****************************************************************************/

function getPosMouse(canvas, evento) {
    let cont = canvas.getBoundingClientRect();
    return {
        x: Math.round(evento.clientX - clientRect.left),
        y: Math.round(evento.clientY - clientRect.top)
    }
}