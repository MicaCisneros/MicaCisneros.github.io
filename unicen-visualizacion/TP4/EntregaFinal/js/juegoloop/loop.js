class Loop {
    constructor(personaje, explosion, bomba, obstaculo, estrellaDiv, muertePersonaje, puntos) {
        this.personaje = personaje;
        this.explosion = explosion;
        this.bomba = bomba;
        this.obstaculo = obstaculo;
        this.estrellaDiv = estrellaDiv;
        this.pausar = false;
        this.muertePersonaje = muertePersonaje;
        this.puntos = puntos;
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

        this.personaje.chequearColision(this.estrellaDiv, this.bomba);


        console.log(this.estrellaDiv.offsetLeft, personaje.offsetLeft, personaje.clientWidth);
        if (bomba.offsetLeft <= personaje.offsetLeft + personaje.clientWidth &&
            bomba.offsetTop >= personaje.offsetTop - personaje.clientHeight &&
            bomba.offsetTop <= personaje.offsetTop - personaje.clientHeight + 100) {
            this.fin();
            this.accionMuerte();

        } else if (this.estrellaDiv.offsetLeft <= personaje.offsetLeft + personaje.clientWidth &&
            this.estrellaDiv.offsetTop >= personaje.offsetTop - personaje.clientHeight &&
            this.estrellaDiv.offsetTop <= personaje.offsetTop - personaje.clientHeight + 100) {
            console.log('sumar puntos');
            this.puntos++;
            console.log('puntos: ' + this.puntos);
            this.fin();
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