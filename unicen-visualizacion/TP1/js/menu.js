document.addEventListener("DOMContentLoaded", function(e) {
    "use strict";

    let btn1 = document.querySelector(".icon-menu");
    btn1.addEventListener("click", cambiar);

    //funcion para el boton del menu hamburguesa
    function cambiar() {
        document.querySelector(".menuMobile").classList.toggle("active");
    }
});