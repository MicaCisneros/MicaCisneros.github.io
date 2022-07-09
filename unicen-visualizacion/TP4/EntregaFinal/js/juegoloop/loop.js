class Loop {
    constructor(personaje, explosion, bomba, estrellaDiv, muertePersonaje, puntos) {
        this.personaje = personaje;
        this.explosion = explosion;
        this.bomba = bomba;
        this.obstaculo = null;
        this.estrella = null;
        this.estrellaDiv = estrellaDiv;
        this.pausar = false;
        this.muertePersonaje = muertePersonaje;
        this.puntos = puntos;
        this.vidas = 3;
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
            this.chequearColision();
        } else {
            this.fin();
            this.accionMuerte();
        }
    }

    accionMuerte() {
        this.personaje.morir();
        
    }

    generarObstaculos(){
        
        let posBomba = Math.floor(Math.random() * (10 - 300 + 1) + 100) + "px";
        
        let posEstrella = Math.floor(Math.random() * (10 - 300 + 1) + 100) + "px";
        // while(posBomba == posEstrella ){
        //     posEstrella = Math.floor(Math.random() * (10 - 300 + 1) + 50) + "px";
        //     posBomba = Math.floor(Math.random() * (10 - 300 + 1) + 50) + "px";
        // }
        this.estrella = new Estrella(this.estrellaDiv,posEstrella);
        this.estrella.generarEstrella();
        
        this.obstaculo = new Obstaculo(this.bomba, posBomba);
        this.obstaculo.generarObstaculo();

    }

    chequearColision() {

        //this.personaje.chequearColision(this.estrellaDiv, this.bomba);


        //console.log(this.estrellaDiv.offsetLeft, personaje.offsetLeft, personaje.clientWidth);
        if (bomba.offsetLeft <= personaje.offsetLeft + personaje.clientWidth &&
            bomba.offsetTop >= personaje.offsetTop - personaje.clientHeight &&
            bomba.offsetTop <= personaje.offsetTop - personaje.clientHeight + 100) {
            this.obstaculo.explotar(this.explosion);
            this.pierdeVida();
            this.fin();
            this.accionMuerte();

        } else if (this.estrellaDiv.offsetLeft <= personaje.offsetLeft + personaje.clientWidth &&
            this.estrellaDiv.offsetTop >= personaje.offsetTop - personaje.clientHeight &&
            this.estrellaDiv.offsetTop <= personaje.offsetTop - personaje.clientHeight + 100) {
            console.log('sumar puntos');
            this.puntos++;
            console.log('puntos: ' + this.puntos);
        }
    }

    pierdeVida(){
        // this.vidas=this.vidas-1;
        // let divVida = "vida"+this.vidas;
        // console.log("Anda",divVida);
        // //document.querySelector()

        // if(this.vidas = 0){
        //     this.personaje.morir();
        // }
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
        bomba.style.animationPlayState = 'paused';
        this.pausar = true;
    }
}