let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;


let cantFig = 20;

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
    console.log(w);
    let tabl = new Tablero(ctx, posX, posY, w, h, color);
    tabl.draw();

    posX = 970
    let table = new Tablero(ctx, posX, posY, w, h, color);
    table.draw();

}


// function drawFigura() {
//     limpiarCanvas(); //sino me arrastra el elemento q muevo

// }

function addFicha() {
    console.log(2);

    let color = '#017000';
    let color2 = '#ff0000';
    for (let i = 0; i < cantFig / 2; i++) {
        let posX = Math.round((Math.random() * 200) + 30);
        let posY = Math.round((Math.random() * 400) + 50);
        let ficha = new Ficha(posX, posY, 15, color, ctx);

        fichas.push(ficha);
        ficha.draw();
    }

    for (let i = cantFig / 2; i < cantFig; i++) {
        let posX = Math.round(Math.random() * 200) + 970;
        let posY = Math.round((Math.random() * 400) + 50);
        let ficha = new Ficha(posX, posY, 15, color2, ctx);


        ficha.draw();
        fichas.push(ficha);
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
    for (let i = 0; i < fichas.length; i++) {
        const f = fichas[i];

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