class Obstaculo {

    constructor(bomba) {
        this.bomba = bomba;
        this.posicion = bomba.offsetTop;
    }

    generarObstaculo() {
        this.bomba.setAttribute("id", "bomba");
        this.bomba.style.top = Math.floor(Math.random() * (10 - 300 + 1) + 50) + "px";
        this.ocultarBomba()
    }

    ocultarBomba() {
        if (this.posicion < 0) {
            this.bomba.removeAttribute("id", "bomba");
        }
    }

    explotar(muerte) {
        console.log(muerte)
        this.bomba.setAttribute("hidden", "");
        muerte.removeAttribute("hidden", "");
    }
}