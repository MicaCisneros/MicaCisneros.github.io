class Estrella {

    constructor(estrella) {
        this.estrella = estrella;
        this.posicion = estrella.getBoundingClientRect();
    }

    generarEstrella() {
        this.estrella.setAttribute("id", "estrella");
        this.estrella.style.top = Math.floor(Math.random() * (10 - 300 + 1) + 300) + "px";
        this.ocultar()
    }

    ocultar() {
        if (this.posicion['y'] < 0) {
            this.estrella.removeAttribute("id", "estrella");
        }
    }

}