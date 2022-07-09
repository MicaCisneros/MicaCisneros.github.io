class Elemento{

    constructor(tipo,idObstaculo) {
        this.tipo = tipo;
        this.idObstaculo = idObstaculo;
        this.clase = "."+tipo;
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

    getPosicion(){
        this.posicion = this.divElemento.offsetLeft;
        return this.posicion;
    }

    ocultarElemento() {
        
        // console.log("Posicion:",this.posicion)
            this.divElemento.removeAttribute("id",this.tipo);
            // this.generarObstaculo();
    }

    explotar(muerte) {
        // console.log(muerte)  VER PORQUE SIGUE IMPRIMIENDO CNDO MURIO
        this.bomba.setAttribute("hidden", "");
        muerte.style.top = this.bomba.offsetTop + "px";
        muerte.removeAttribute("hidden", "");
    }
}