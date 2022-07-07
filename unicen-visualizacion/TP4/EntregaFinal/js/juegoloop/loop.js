class Loop {
    constructor(personaje, explosion, bomba, obstaculo, estrellaDiv, muertePersonaje) {
        this.personaje = personaje;
        this.explosion = explosion;
        this.bomba = bomba;
        this.obstaculo = obstaculo;
        this.estrellaDiv = estrellaDiv;
        this.pausar = false;
        this.muertePersonaje = muertePersonaje;
    }


    caerPersonaje() {

        if (!this.personaje.verificarPerdedor() && !this.pausar) {
            this.personaje.caerPersonaje();
            this.chequearColision();
        } else {
            this.fin();
            this.accionMuerte();
        }
    }

    moverPersonaje() {
        if (!this.personaje.verificarPerdedor() && !this.pausar) {
            this.personaje.moverPersonaje();
        } else {
            this.fin();
            this.accionMuerte();
        }
    }

    accionMuerte() {
        this.personaje.morir();
        this.obstaculo.explotar(this.explosion);
    }

    chequearColision() {
        console.log(bomba.offsetTop, personaje.offsetTop - personaje.clientHeight, bomba.offsetTop, personaje.offsetTop);
        if (bomba.offsetLeft <= personaje.offsetLeft + personaje.clientWidth &&
            bomba.offsetTop >= personaje.offsetTop - personaje.clientHeight &&
            bomba.offsetTop <= personaje.offsetTop - personaje.clientHeight + 100) {
            this.fin();
            this.accionMuerte();
        }
    }


    fin() {
        let nube = document.querySelector(".nubes");
        let nube2 = document.querySelector(".nubes-2");
        let arbusto = document.querySelector(".arbustos");
        let piso = document.querySelector(".piso");



        nube.style.animationPlayState = 'paused';
        nube2.style.animationPlayState = 'paused';
        arbusto.style.animationPlayState = 'paused';
        piso.style.animationPlayState = 'paused';
        estrellaDiv.style.animationPlayState = 'paused';
        //bomba.style.animationPlayState = 'paused';
        this.pausar = true;
    }
}