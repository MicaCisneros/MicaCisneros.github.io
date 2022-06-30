

document.addEventListener("DOMContentLoaded", function(e) {
    let personaje = document.querySelector("#personaje");
    let muerte = document.querySelector("#muerte");
    muerte.setAttribute("hidden", "");
    let posicionPersona = personaje.getBoundingClientRect();
    console.log(posicionPersona);
    let juego = new Loop(personaje,muerte);
    let topPersona = personaje.style.top;

    let divJuego = document.querySelector("#game-loop");
    divJuego.addEventListener('mousedown', evento => {
        topPersona -= 10;
        personaje.style.top = topPersona;
    });



    let timerVariable = setInterval(juego.accionMuerte, 10000);

})


