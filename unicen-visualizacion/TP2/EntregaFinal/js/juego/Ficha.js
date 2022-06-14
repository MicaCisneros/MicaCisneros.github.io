class Ficha {

    constructor(posX, posY, radio, color, contexto) {
        this.posX = posX;
        this.posY = posY;
        this.fill = color;
        this.ctx = contexto;
        this.radio = radio;
        this.resaltado = false;
        this.resaltadoEstilo = 'purple';
    }


    setFill(fill) {
        this.fill = fill;
    }

    setPosicion(x, y) {
        posX = x;
        posY = y;
    }

    getPosition() {
        return {
            x: this.getPosX(),
            y: this.getPosY(),
        }
    }

    getPosX() {
        return this.posX;
    }

    getPosY() {
        return this.posY;
    }

    getFill() {
        return this.fill;
    }

    setResaltado(resaltado) {
        this.resaltado = resaltado;
    }

    // draw(){
    //     this.context.beginPath();
    //     this.context.arc(this.x, this.y, this.radio, 0, Math.PI*2);
    //     this.context.fillStyle = '#ffffff';
    //     this.context.fill();
    //     if (this.highlighted === true) {
    //         this.context.strokeStyle = this.highlightedStyle;
    //         this.context.lineWidth = 5;
    //         this.context.stroke();
    //     }

    //     this.context.drawImage(this.image, this.x - this.radio - 6, this.y - this.radio - 6);
    //     this.context.closePath();
    //     this.image.onload = () => {
    //     };
    // }

    draw() {
        this.ctx.fillStyle = this.fill;
        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI);
        this.ctx.fill();
        
        if (this.resaltado) {
            this.ctx.strokeStyle = this.resaltadoEstilo;
            this.ctx.lineWidth = 4;
            this.ctx.stroke();
        }
        this.ctx.closePath();
    }

    getRadio() {
        return this.radio;
    }


    isPointInside(x, y) {
        let _x = this.posX - x;
        let _y = this.posY - y;
        return Math.sqrt(_x * _x + _y * _y) < this.radio;
    }



}