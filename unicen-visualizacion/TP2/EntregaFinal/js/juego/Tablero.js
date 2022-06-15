class Tablero {

    constructor(ctx, posX, posY, w, h, color) {
        this.ctx = ctx;
        this.posX = posX;
        this.posY = posY;
        this.w = w;
        this.h = h;
        this.color = color;
    }

    draw() {
        // this.ctx.fillStyle(color);
        //this.ctx.beginPath();
        this.ctx.strokeRect(this.posX, this.posY, this.w, this.h);
        //     this.ctx.fillStyle="#407F7F";
        //     this.ctx.fillRect(260,95,600,460);
        // ctx.strokeRect(0, 0, 50, 50);
        // this.ctx.closePath();
    }
}