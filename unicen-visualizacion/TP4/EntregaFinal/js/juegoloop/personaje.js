class Personaje {

    constructor(personaje,muerte,topPersona) {
        this.personaje = personaje;
        this.muerte = muerte;
        this.topPersona = topPersona;
    }

    caerPersonaje() {
        this.topPersona = this.topPersona + 10;
        personaje.style.top = this.topPersona + 'px';
        muerte.style.top = this.topPersona + 'px';
    }
    
    moverPersonaje() {
        this.topPersona = this.topPersona - 10;
        personaje.style.top = this.topPersona + 'px';
        muerte.style.top = this.topPersona + 'px';
    }

    verificarPerdedor() {
        if (this.topPersona <= -30 || this.topPersona >= 300) {
            return false
        } else return true;
    }
    
    morir(){
        this.personaje.setAttribute("hidden", "");
        this.muerte.removeAttribute("hidden", "");
    }
}
