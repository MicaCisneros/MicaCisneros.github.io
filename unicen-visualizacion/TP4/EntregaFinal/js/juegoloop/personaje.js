class Personaje {

    constructor(personaje, muertePersonaje, topPersona) {
        this.personaje = personaje;
        this.muertePersonaje = muertePersonaje;
        this.topPersona = topPersona;
    }

    // caerPersonaje() {
    //     this.topPersona = this.topPersona + 10;
    //     personaje.style.top = this.topPersona + 'px';
    //     this.muertePersonaje.style.top = this.topPersona + 'px';
    // }


    saltaPersonaje() {
        this.personaje.removeAttribute("id", "personaje");
        this.personaje.setAttribute("id", "saltaPersonaje");
        // let piso = document.querySelector(".piso");
        // let num = 350;
        // let intervaloSalto = setInterval(() => {
        //     piso.style.top = "355px";
        //     piso.style.top = "360px";
        //     piso.style.top = "370px";
        // }, 200);


        let interval = setInterval(() => {
            // clearInterval(intervaloSalto)
            this.personaje.removeAttribute("id", "saltaPersonaje");
            this.personaje.setAttribute("id", "personaje");
            // piso.style.top = "360px";
            // piso.style.top = "350px";
            clearInterval(interval);
        }, 2000);
    }

    verificarPerdedor() {
        if ( /*this.topPersona <= -30 || */ this.topPersona >= 350) {
            return true;
        } else return false;
    }

    morir() {
        this.personaje.removeAttribute("id", "personaje");
        this.personaje.setAttribute("id", "muertePersonaje");
    }

    // chequearColision(estrellaDiv, bomba) {
    //     console.log('llega?');
    //     if (this.offsetLeft + this.clientWidth > estrellaDiv.offsetLeft &&
    //         this.offsetLeft < estrellaDiv.offsetleft + estrellaDiv.clientWidth &&
    //         this.offsetbottom > estrellaDiv.offsetbottom - this.clientHeight &&
    //         this.offsetbottom - this.clientHeight < estrellaDiv.offsetbottom) {
    //         console.log('anda!!');
    //     }
    // }NO ANDAAAAAAAAAAAA
}