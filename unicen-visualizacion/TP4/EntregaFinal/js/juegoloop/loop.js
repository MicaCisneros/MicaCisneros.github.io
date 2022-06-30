class Loop{
    constructor(personaje,muerte) {
        this.personaje = personaje;
        this.muerte = muerte;
    }




    accionMuerte(){
        this.personaje.setAttribute("hidden", "")
        this.muerte.removeAttribute("hidden", "");

    }
}

