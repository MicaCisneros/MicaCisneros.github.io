class Tablero {

    constructor(ctx, posX, posY, w, h, color) {
        this.ctx = ctx;
        this.posX = posX;
        this.posY = posY;
        this.w = w;
        this.h = h;
        this.color = color;
        this.posXAux = this.posX + 130;
        this.posYAux = this.posY;
        this.matriz = [];
        this.fichas = []
        this.drawFichas();
    }

    draw() {
        // this.ctx.fillStyle(color);
        //this.ctx.beginPath();
        this.ctx.strokeStyle = "#407F7F";
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(this.posX, this.posY, this.w, this.h);

        //     this.ctx.fillRect(260,95,600,460);
        // ctx.strokeRect(0, 0, 50, 50);
        // this.ctx.closePath();


    }

    drawFichas() {
        for (let i = 0; i < 42; i++) {
            let ficha = new Ficha(this.posXAux, this.posYAux, 15, "#ffffff", this.ctx, this.color);
            this.fichas.push(ficha);
        }
    }

    drawJuego() {
        this.ctx.fillStyle = "#407F7F";
        this.ctx.lineWidth = 2;
        this.ctx.fillRect(this.posX, this.posY, this.w, this.h);

        for (let col = 0; col < 7; col++) {
            for (let row = 0; row < 6; row++) {
                let ficha = this.matriz[col][row];
                ficha.draw();
            }
        }
    }

    iniciarJuego() {
        this.ctx.fillStyle = "#407F7F";
        this.ctx.lineWidth = 2;
        this.ctx.fillRect(this.posX, this.posY, this.w, this.h);
        this.posXAux += 15;
        this.matriz = [];
        for (let col = 0; col < 7; col++) {
            this.posXAux += 50;
            this.posYAux = this.posY + 50;
            this.matriz[col] = [];
            for (let row = 0; row < 6; row++) {
                this.posYAux += 50;

                let ficha = new Ficha(this.posXAux, this.posYAux, 15, "#ffffff", this.ctx, this.color);
                ficha.draw();
                this.matriz[col][row] = ficha;
            }
        }
    }
    insertarFicha(col, turno) {

        for (let row = 5; row >= 0; row--) {
            if (this.matriz[col][row].getId() != 0) {
                console.log("hola");
                this.matriz[col][row].setId(0);
                this.matriz[col][row].setJugador(turno);

                if (turno == 1) {
                    this.matriz[col][row].setColor("#039000");
                } else if (turno == 2) {
                    this.matriz[col][row].setColor("#ff2221");
                }



                break;
            }

        }

    }

    esGanador(jugador) {

        let exito = this.checkHorizontalDer(jugador);
        // this.checkVertical(jugador);

    }

    checkHorizontalDer(jugador) {

        let contador = 0;
        for (let i = 0; i < 4; i++) {

            for (let j = 0; i < 4; j++) {

                let jug = this.matriz[i][j].getJugador();
                console.log(this.matriz[i][j]);

                console.log(jug);
                if (jugador == jug) {

                    contador++;
                    console.log(contador);
                } else { contador = 0; }
            }

        }
        if (contador == 4) {
            return true;
        } else {
            return false;
        }

    }


    // checkVertical(jugador) {

    //     let contador = 0;
    //     for (let j = 5; i > 0; j--) {

    //         for (let i = 6; i > 0; i--) {



    //             let jug = this.matriz[j][i].getJugador();
    //             console.log(this.matriz[i][j]);

    //             console.log(jug);
    //             if (jugador == jug) {

    //                 contador++;
    //                 console.log(contador);
    //             } else { contador = 0; }
    //         }

    //     }
    //     // let i = 0;
    //     // while(i<)
    //     // if (contador == 4) {
    //     //     return true;
    //     // } else {
    //     //     return false;
    //     // }

    //     /*  while((fila<MAXFILAS-1)&&(contador<=4) && (tablero[fila][col]==tablero[fila+1][col]) ){
    //     contador++;
    //     fila++;
    // }//fin while x columna
    //  if (contador==4){
    //   terminado=true;
    // }*/

    // }



    checkInsert(ficha) {
        this.posXAux = this.posX + 145;
        this.posYAux = this.posY + 75;
        for (let col = 0; col < 7; col++) {
            this.posXAux += 50;
            if ((this.posXAux > ficha.getPosX()) && (ficha.getPosX() > this.posXAux - 5) &&
                (this.posYAux > ficha.getPosY()) && (ficha.getPosY() < this.posYAux - 5)) {
                return col;
            }
        }
        // console.log(this.matriz);
        return -1;
    }
}