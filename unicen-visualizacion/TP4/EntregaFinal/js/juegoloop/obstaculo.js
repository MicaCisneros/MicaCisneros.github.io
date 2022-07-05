class Obstaculo {

    constructor(bomba) {
        this.bomba = bomba;
        this.posicion = bomba.getBoundingClientRect();
    }

    generarObstaculo() {
        this.bomba.setAttribute("id", "bomba");
        this.bomba.style.top = Math.floor(Math.random() * (10 - 300 + 1) + 50) + "px";
        this.ocultarBomba()
    }

    ocultarBomba() {
        if (this.posicion['y'] < 0) {
            this.bomba.removeAttribute("id", "bomba");
        }
    }

}