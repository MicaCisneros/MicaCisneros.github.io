class Loop {
    constructor(personaje, obstaculos, puntos,divPersonaje) {
        this.personaje = personaje;
        this.divPersonaje = divPersonaje;
        this.explosion;
        this.obstaculos = obstaculos;
        this.obstaculo = null;
        this.estrella = null;
        this.pausar = false;
        this.puntos = puntos;
        this.puntosPantalla = document.querySelector(".cantPuntos");
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

    mostrarPuntosInicial(){
        this.puntosPantalla.innerHTML = 'X' + this.puntos;
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

    chequearColision(divElemento, elemento) {
        this.updatePosition()
        //this.personaje.chequearColision(this.estrellaDiv, this.bomba);
        // if (
        //     this.divPersonaje.left + this.divPersonaje.width > divElemento.left &&
        //     this.divPersonaje.left < divElemento.left + divElemento.width &&
        //     this.divPersonaje.bottom > divElemento.bottom - this.personaje.height &&
        //     this.divPersonaje.bottom - this.personaje.height < divElemento.bottom
        //   ){

        if (divElemento.offsetLeft <= this.divPersonaje.offsetLeft + this.divPersonaje.clientWidth &&
            divElemento.offsetTop >= this.divPersonaje.offsetTop - this.divPersonaje.clientHeight &&
            divElemento.offsetTop <= this.divPersonaje.offsetTop - this.divPersonaje.clientHeight+100 || (this.personaje.getSalto() && 
            divElemento.offsetLeft <= this.divPersonaje.offsetLeft + this.divPersonaje.clientWidth +10 && elemento.getId() == 1)) {
            
            if (elemento.getId() == 0) {
                console.log("id", elemento.getId())
                elemento.explotar("explosion");
                this.pierdeVida();
                elemento.setId(2);
                //this.fin(divElemento);
                // this.accionMuerte();
                let interval = setInterval(() => {
                    elemento.ocultarElemento();
                    clearInterval(interval);
                }, 1000);

                return this.vidas;
            } else if(elemento.getId() == 1) {
                console.log('sumar puntos');
                this.puntos++;
                console.log('puntos: ' + this.puntos);
                
                this.puntosPantalla.innerHTML = 'X' + this.puntos;
                elemento.explotar("estrellitas");
                elemento.setId(2);
                // this.estrella.juntar();
                // let posEstrella = Math.floor(Math.random() * (10 - 300 + 1) + 100) + "px";
                // this.estrella = new Estrella(this.estrellaDiv, posEstrella);
                let interval2 = setInterval(() => {
                    elemento.ocultarElemento();
                    clearInterval(interval2);
                }, 1000);

                return this.vidas;
                // this.estrella.generarEstrella();
            }


            // } else if (this.estrellaDiv.offsetLeft <= personaje.offsetLeft + personaje.clientWidth &&
            //     this.estrellaDiv.offsetTop >= personaje.offsetTop - personaje.clientHeight &&
            //     this.estrellaDiv.offsetTop <= personaje.offsetTop - personaje.clientHeight + 100) {

        }
    }

    updatePosition(){
        return personaje.getBoundingClientRect().y;
      } 

    mostrarVidas(){
        for(let i=1;i<=this.vidas;i++){
            let contenido= ".divVida"+i;
            console.log(contenido);
            let contenidoVida = "vida"+i
            let div = document.querySelector(contenido);
            console.log(div);
            div.classList.add(contenidoVida);
        }
    }


    pierdeVida() {
        console.log(this.vidas)
        let divVida = "vida" + this.vidas;
        let vida = document.querySelector("." + divVida);
        vida.classList.remove(divVida);
        this.vidas = this.vidas - 1;
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

    getPuntos(){
        return this.puntos;
    }

    setPuntos(puntos){
        this.puntos = puntos;
    }

    setVidas(vidas){
        this.vidas = vidas;
    }
}