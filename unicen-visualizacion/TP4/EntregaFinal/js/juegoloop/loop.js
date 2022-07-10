class Loop {
    constructor(personaje, obstaculos, muertePersonaje, puntos) {
        this.personaje = personaje;
        this.explosion;
        this.obstaculos = obstaculos;
        this.obstaculo = null;
        this.estrella = null;
        this.pausar = false;
        this.muertePersonaje = muertePersonaje;
        this.puntos = puntos;
        this.vidas = 3;
    }


    // caerPersonaje() {
    //     if (!this.personaje.verificarPerdedor() && !this.pausar) {
    //         this.personaje.caerPersonaje();
    //         this.chequearColision();
    //     } else {
    //         this.fin();
    //         this.accionMuerte();
    //     }
    // }

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

    chequearColision(divElemento, elemento) { //Aun no anda



        // if (elemento.getBoundingClientRect().x + 10 <
        //     this.personaje.getBoundingClientRect().right &&
        //     elemento.getBoundingClientRect().x + elemento.getBoundingClientRect().width - 10 >
        //     personaje.getBoundingClientRect().right) {
        //     if (personaje.getBoundingClientRect().bottom >=
        //         elemento.getBoundingClientRect().y + 10) {
        //         console.log('lo logro');

        //     }
        // }










        //this.personaje.chequearColision(this.estrellaDiv, this.bomba);
        //console.log(this.estrellaDiv.offsetLeft, personaje.offsetLeft, personaje.clientWidth);
        if (divElemento.offsetLeft <= personaje.offsetLeft + personaje.clientWidth &&
            divElemento.offsetTop >= personaje.offsetTop - personaje.clientHeight &&
            divElemento.offsetTop <= personaje.offsetTop - personaje.clientHeight + 100) {
                // 
            if (elemento.getId() == 0) {
                console.log("id",elemento.getId())
                elemento.explotar("explosion");
                this.pierdeVida();
                elemento.setId(2);
                // this.fin(divElemento);
                // this.accionMuerte();
                let interval = setInterval(() => {
                    elemento.ocultarElemento();
                    clearInterval(interval);
                }, 3000);
                
                return this.vidas;
            } else {
                console.log('sumar puntos');
                this.puntos++;
                console.log('puntos: ' + this.puntos);
                // this.estrella.juntar();
                // let posEstrella = Math.floor(Math.random() * (10 - 300 + 1) + 100) + "px";
                // this.estrella = new Estrella(this.estrellaDiv, posEstrella);
                elemento.ocultarElemento();
                return this.vidas;
                // this.estrella.generarEstrella();
            }

            
            // } else if (this.estrellaDiv.offsetLeft <= personaje.offsetLeft + personaje.clientWidth &&
            //     this.estrellaDiv.offsetTop >= personaje.offsetTop - personaje.clientHeight &&
            //     this.estrellaDiv.offsetTop <= personaje.offsetTop - personaje.clientHeight + 100) {

        }
    }

    pierdeVida() {
        console.log(this.vidas)
        let divVida = "vida"+this.vidas;
        let vida = document.querySelector("."+divVida);
        vida.classList.remove(divVida);
        this.vidas=this.vidas-1;
        //document.querySelector()

        // if(this.vidas == 0){
        //     this.personaje.morir();
        // }
    }

    fin(divElemento) {
        let nube = document.querySelector(".nubes");
        let nube2 = document.querySelector(".nubes-2");
        let arbusto = document.querySelector(".arbustos");
        let piso = document.querySelector(".piso");



        nube.style.animationPlayState = 'paused';
        nube2.style.animationPlayState = 'paused';
        arbusto.style.animationPlayState = 'paused';
        piso.style.animationPlayState = 'paused';
        // estrellaDiv.style.animationPlayState = 'paused';
        // bomba.style.animationPlayState = 'paused';
        divElemento.style.animationPlayState = 'paused';
        this.pausar = true;
    }
}