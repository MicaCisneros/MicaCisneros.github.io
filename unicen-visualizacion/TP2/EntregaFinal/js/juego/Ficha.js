class Ficha {

    constructor(posX, posY, radio, color, contexto, colorBorde, id, jugador) {
        this.posX = posX;
        this.posY = posY;
        this.fill = color;
        this.colorBorde = colorBorde;
        this.ctx = contexto;
        this.radio = radio;
        this.resaltado = false;
        this.resaltadoEstilo = 'purple';
        this.jugador = jugador;
        this.id = id;
    }


    setFill(fill) {
        this.fill = fill;
    }

    setPosicion(x, y) {
        this.posX = x;
        this.posY = y;
    }

    getJugador() {
        console.log(this.jugador);
        return this.jugador;
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

    draw() {

        this.ctx.fillStyle = this.fill;
        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI);
        this.ctx.fill();
        //this.ctx.arc(this.posX, this.posY, 10, 0, 2 * Math.PI);
        // this.ctx.strokeStyle = this.colorBorde;
        // this.ctx.lineWidth = 5;
        // ctx.stroke();


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
        // console.log(this.id);
        let _x = this.posX - x;
        let _y = this.posY - y;
        return Math.sqrt(_x * _x + _y * _y) < this.radio;
    }



}