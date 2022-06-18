// class Juego{
//     constructor(canvas,contexto){
//         this.canvas = canvas;
//         this.ctx = contexto;
//         this.cantFig = 20;
//         this.fichas = [];
//         this.ultimaFigClickeada = null;
//         this.isMouseDown = null;
//         this.figuraClickeada = null;
//         this.drawJuego();
        
//     }

//     drawJuego() {
//         // let tab = new Tablero(this.ctx);
//         // tab.draw();
//         this.addFicha();
//         this.drawTablero();
//     }
    
//     drawTablero() {
//         let color = "#000000";
//         let posX = 30;
//         let posY = 50;
//         let w = 200;
//         let h = 400;
//         let latIzq = new Tablero(ctx, posX, posY, w, h, color);
//         latIzq.draw();
    
//         posX = 970;
//         let latDer = new Tablero(ctx, posX, posY, w, h, color);
//         latDer.draw();
    
//         let tablero = new Tablero(ctx, 250, posY, 700, 400, '#ffffff');
//         tablero.drawJuego();
//     }
    
    
//     // function drawFigura() {
//     //     limpiarCanvas(); //sino me arrastra el elemento q muevo
    
//     // }
    
//     // function addFicha() {
//     //     console.log(2);
    
    
//     //     let color = '#039000';
//     //     let color2 = '#ff2221';
//     //     for (let i = 0; i < cantFig / 2; i++) {
//     //         let posX = (Math.round(Math.random() * 160)) + 45;
    
//     //         let posY = (Math.round(Math.random() * 350) + 65);
//     //         let ficha = new Ficha(posX, posY, 15, color, ctx, '#017000', i);
    
//     //         fichas.push(ficha);
//     //         ficha.draw();
//     //     }
    
//     //     for (let i = cantFig / 2; i < cantFig; i++) {
//     //         let posX = Math.round(Math.random() * 160) + 985;
//     //         let posY = Math.round((Math.random() * 350) + 65);
//     //         let ficha = new Ficha(posX, posY, 15, color2, ctx, '#ff0000', i);
    
    
//     //         ficha.draw();
//     //         fichas.push(ficha);
//     //     }
//     // }
    
    
    
//     addFicha() {
//         console.log(2);
    
    
//         let colorRojo = '#039000';
//         let colorAzul = '#ff2221';
//         for (let i = 0; i < this.cantFig; i++) {
//             let posXRoja = (Math.round(Math.random() * 160)) + 45;
//             let posYRoja = (Math.round(Math.random() * 350) + 65);
//             let fichaRoja = new Ficha(posXRoja, posYRoja, 15, colorRojo, ctx, '#017000', i);
//             let posXAzul = Math.round(Math.random() * 160) + 985;
//             let posYAzul = Math.round((Math.random() * 350) + 65);
//             let fichaAzul = new Ficha(posXAzul, posYAzul, 15, colorAzul, ctx, '#ff0000', i);
//             fichaRoja.draw();
//             fichaAzul.draw();
//             this.fichas.push(fichaRoja);
//             this.fichas.push(fichaAzul);
    
//         }
//     }
    
    
    
    
    
//     // function drawFicha() {
    
//     //     for (let i = 0; i < figuras.length; i++) {
//     //         figuras[i].draw();
//     //     }
//     // }
    
    
    
//     // function addFiguras() {
//     //     addFigura();
//     //     if (figuras.length < cantFig) {
//     //         setTimeout(addFiguras, 333);
//     //     }
//     // }
    
//     // setTimeout(() => {
//     //     addFiguras();
//     // }, 333)
    
//     drawAll() {
//         this.drawTablero();
//         for (let i = 0; i < fichas.length; i++) {
//             fichas[i].draw();
//         }
//     }
    
//     /**borro y redibujo todo */
//     limpiarCanvas() {
//         // ctx.fillStyle = "#FFFFFF"
//         // ctx.fillRect(0, 0, canvasWidth, canvasHeight);
//         // drawAll();
//         canvas.width = canvas.width;
//     }
    

//     /* cada figura se fija si clickeo en ella*/
//     buscarFiguraSeleccionada(x, y) {
//         console.log("hola");
//         for (let i = 0; i < this.fichas.length; i++) {
//             const fi = this.fichas[i];
    
//             if (fi.isPointInside(x, y)) {
//                 console.log(fi);
//                 return fi;
//             }
//         }
//     }
    
// }