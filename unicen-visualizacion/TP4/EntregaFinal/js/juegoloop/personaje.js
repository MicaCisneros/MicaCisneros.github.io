class Personaje {

    constructor(personaje, muertePersonaje, topPersona) {
        this.personaje = personaje;
        this.muertePersonaje = muertePersonaje;
        this.topPersona = topPersona;
    }

    caerPersonaje() {
        console.log(this.topPersona);
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
        if (this.topPersona <= -30 || this.topPersona >= 350) {
            return true;
        } else return false;
    }

    morir() {
        this.personaje.setAttribute("hidden", "");
        this.muertePersonaje.removeAttribute("hidden", "");
    }
}