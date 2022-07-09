class Personaje {

    constructor(personaje, muertePersonaje, topPersona) {
        this.personaje = personaje;
        this.muertePersonaje = muertePersonaje;
        this.topPersona = topPersona;
    }

    caerPersonaje() {
        this.topPersona = this.topPersona + 10;
        personaje.style.top = this.topPersona + 'px';
        this.muertePersonaje.style.top = this.topPersona + 'px';
    }

    moverPersonaje() {

        this.topPersona = this.topPersona - 10;
        personaje.style.top = this.topPersona + 'px';
        this.muertePersonaje.style.top = this.topPersona + 'px';
    }

    verificarPerdedor() {
        if ( /*this.topPersona <= -30 || */ this.topPersona >= 350) {
            return true;
        } else return false;
    }

    morir() {
        this.personaje.setAttribute("hidden", "");
        this.muertePersonaje.removeAttribute("hidden", "");
    }

    // chequearColision(estrellaDiv, bomba) {
    //     console.log('llega?');
    //     if (this.offsetLeft + this.clientWidth > estrellaDiv.offsetLeft &&
    //         this.offsetLeft < estrellaDiv.offsetleft + estrellaDiv.clientWidth &&
    //         this.offsetbottom > estrellaDiv.offsetbottom - this.clientHeight &&
    //         this.offsetbottom - this.clientHeight < estrellaDiv.offsetbottom) {
    //         console.log('anda!!');
    //     }
    // }NO ANDAAAAAAAAAAAA
}