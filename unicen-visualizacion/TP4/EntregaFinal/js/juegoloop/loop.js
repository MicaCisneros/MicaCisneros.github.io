class Loop {
    constructor(personaje, muerte, bomba) {
        this.personaje = personaje;
        this.muerte = muerte;
        this.bomba = bomba;
    }


    caerPersonaje(){
        if (this.personaje.verificarPerdedor()) {
            this.personaje.caerPersonaje();
            this.chequearColision();
        } else {
            this.fin();
            this.accionMuerte();
        }
    }

    moverPersonaje(){
        if (this.personaje.verificarPerdedor()) {
            this.personaje.moverPersonaje();
        } else {
            this.fin();
            this.accionMuerte();
    
        }
    }

    accionMuerte() {
        this.personaje.morir();

    }

    chequearColision() {
        console.log(bomba.offsetTop,personaje.offsetTop - personaje.clientHeight,bomba.offsetTop,personaje.offsetTop);
        if (bomba.offsetLeft <= personaje.offsetLeft + personaje.clientWidth && bomba.offsetTop >= personaje.offsetTop - personaje.clientHeight && bomba.offsetTop <= personaje.offsetTop - personaje.clientHeight + 100) {
            this.fin();
            this.accionMuerte();
        }
    }
    
    
    fin() {
        console.log('jsjs');
        let nube = document.querySelector(".nubes");
        let nube2 = document.querySelector(".nubes-2");
        let arbusto = document.querySelector(".arbustos");
        let piso = document.querySelector(".piso");
        
        nube.style.animationPlayState = 'paused';
        nube2.style.animationPlayState = 'paused';
        arbusto.style.animationPlayState = 'paused';
        piso.style.animationPlayState = 'paused';
        //estrella.style.animationPlayState = 'paused';
        //bomba.style.animationPlayState = 'paused';
    }
}