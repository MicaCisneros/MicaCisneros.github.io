class Tablero{

    constructor(ctx){
        this.ctx = ctx;
    }

    draw() {
        this.ctx.fillStyle = '#FFD1AA';
        this.ctx.fillRect(0,0,1100,550);            
        this.ctx.fillStyle="#407F7F";
        this.ctx.fillRect(260,95,600,460);
    }
}