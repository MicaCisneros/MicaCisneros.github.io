class Estrella {

    constructor(estrella) {
        this.estrella = estrella;
        this.posicion = estrella.offsetTop;
    }

    generarEstrella() {
        this.estrella.setAttribute("id", "estrella");
        // this.estrella.style.left = "800px";
        //this.estrella.setAttribute("animation", "obstaculo");
        // this.estrella.style.WebkitAnimation = "obstaculo 11s linear infinite"
        /* no andaa! no puedo ponerla en la posicion de X original*/
        // this.estrella.style.webkitAnimationPlayState = "initial";
        this.estrella.style.top = Math.floor(Math.random() * (10 - 300 + 1) + 50) + "px";

        this.ocultar()
    }

    ocultar() {
        if (this.posicion['y'] < 0) {
            this.estrella.removeAttribute("id", "estrella");
        }
    }

    juntar() {
        //primero animacon, dsp oculto
        // this.estrella.removeAttribute("id", "estrella");
        this.estrella.removeAttribute("animation", "obstaculo");
        this.estrella = null;

    }

}