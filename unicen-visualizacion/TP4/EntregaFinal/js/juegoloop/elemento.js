class Elemento {

    constructor(tipo, idObstaculo) {
        this.tipo = tipo;
        this.idObstaculo = idObstaculo;
        this.clase = "." + tipo;
        this.divElemento;
        this.contenedor;
        this.posicion = null;
        this.generarObstaculo();
    }

    generarObstaculo() {
        this.contenedor = document.querySelector(".elementos");
        this.divElemento = document.createElement("div");
        this.divElemento.setAttribute("id", this.tipo);
        this.contenedor.appendChild(this.divElemento);
    }

    setId(id){
        this.idObstaculo =id;
    }
    getPosicion() {
        this.posicion = this.divElemento.offsetLeft;
        return this.posicion;
    }

    chequearColision(juego) {
        let pausar = false;
        pausar = juego.chequearColision(this.divElemento, this);
        return pausar;

    }

    ocultarElemento() {

        // console.log("Posicion:",this.posicion)
        this.divElemento.removeAttribute("id", this.tipo);
        // this.generarObstaculo();
    }

    explotar(tipo) {
        this.divElemento.removeAttribute("id",this.tipo);
        this.divElemento.setAttribute("id",tipo);
        this.tipo = tipo;
    }

    getId() {
        return this.idObstaculo;
    }

    frenarAnimacion() {
        this.divElemento.style.animationPlayState = 'paused';
    }

}