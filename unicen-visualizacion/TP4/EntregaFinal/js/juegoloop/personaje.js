class Personaje {

    constructor(personaje,muerte,topPersona) {
        this.personaje = personaje;
        this.muerte = muerte;
        this.topPersona = topPersona;
    }

    caerPersonaje() {
        console.log(this.topPersona);
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
        if (this.topPersona <= -30 || this.topPersona >= 350) {
            return true;
        } else return false;
    }
    
    morir(){
        this.personaje.setAttribute("hidden", "");
        this.muerte.removeAttribute("hidden", "");
    }
}
