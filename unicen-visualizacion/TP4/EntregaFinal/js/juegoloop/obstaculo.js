class Obstaculo {

    constructor(bomba,posBomba) {
        this.bomba = bomba;
        this.posicion = bomba.offsetLeft;
        this.posBomba =posBomba;
    }

    generarObstaculo() {
        this.bomba.setAttribute("id", "bomba");
        this.bomba.style.top = this.posBomba;
    }

    ocultarBomba() {
        // this.posicion = bomba.offsetLeft;
        // console.log("Posicion:",this.posicion);
        // if (this.posicion == 100) {
            this.bomba.removeAttribute("id", "bomba");
            // this.generarObstaculo();
        // }
    }

    explotar(muerte) {
        // console.log(muerte)  VER PORQUE SIGUE IMPRIMIENDO CNDO MURIO
        this.bomba.setAttribute("hidden", "");
        muerte.style.top = this.bomba.offsetTop + "px";
        muerte.removeAttribute("hidden", "");
    }
}