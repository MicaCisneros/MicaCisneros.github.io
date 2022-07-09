class Loop {
    constructor(personaje, explosion, obstaculos, muertePersonaje, puntos) {
        this.personaje = personaje;
        this.explosion = explosion;
        this.obstaculos = obstaculos;
        this.obstaculo = null;
        this.estrella = null;
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

    saltaPersonaje() {
        if (!this.personaje.verificarPerdedor() && !this.pausar) {
            this.personaje.saltaPersonaje();
         }
         
        //   else {
        //     this.fin();
        //     this.accionMuerte();
        // }
    }

    accionMuerte() {
        this.personaje.morir();

    }

    generarObstaculos() {

        this.generarEstrella();

        let posBomba = Math.floor(Math.random() * (10 - 300 + 1) + 100) + "px";


        // while(posBomba == posEstrella ){
        //     posEstrella = Math.floor(Math.random() * (10 - 300 + 1) + 50) + "px";
        //     posBomba = Math.floor(Math.random() * (10 - 300 + 1) + 50) + "px";
        // }


        this.obstaculo = new Obstaculo(this.bomba, posBomba);
        this.obstaculo.generarObstaculo();

    }

    generarEstrella() {
        let posEstrella = Math.floor(Math.random() * (10 - 300 + 1) + 100) + "px";
        this.estrella = new Estrella(this.estrellaDiv, posEstrella);
        this.estrella.generarEstrella();
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
            this.estrella.juntar();
            let posEstrella = Math.floor(Math.random() * (10 - 300 + 1) + 100) + "px";
            this.estrella = new Estrella(this.estrellaDiv, posEstrella);


            this.estrella.generarEstrella();
        }
    }

    pierdeVida() {
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