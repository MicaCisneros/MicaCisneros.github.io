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

    drawJuego() {
        this.ctx.fillStyle = "#407F7F";
        this.ctx.lineWidth = 2;
        this.ctx.fillRect(this.posX, this.posY, this.w, this.h);
        this.posY += 50;
        this.posXAux += 15;
        let matriz = [];
        let arrayAux = []
        for (let col = 0; col < 7; col++) {
            this.posXAux += 50;
            this.posYAux = this.posY;
            for (let row = 0; row < 6; row++) {
                this.posYAux += 50;

                let ficha = new Ficha(this.posXAux, this.posYAux, 15, "#ffffff", this.ctx, this.color);
                ficha.draw();
                arrayAux.push(ficha)
            }
            matriz.push(arrayAux);
        }
    }

}