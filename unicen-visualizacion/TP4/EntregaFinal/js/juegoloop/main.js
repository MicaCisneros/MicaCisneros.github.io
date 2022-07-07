/**
 * iniciar() inicia personaje, puntaje, tiempo, fondo
 * procsarInput()  leer teclas
 * actualizarEstado() mover personaje
 * draw() dibujo escena, actualio posicion de las cosas
 * 
 * end() apret esc, perdio o gano
 */







/* PERSONAJE */
let personaje = document.querySelector("#personaje");

let muerte = document.querySelector("#muerte");
muerte.setAttribute("hidden", "");
// let posicionPersona = personaje.getBoundingClientRect();
// console.log(posicionPersona);
let topPersona = personaje.offsetTop;
console.log(topPersona);
let persona = new Personaje(personaje, muerte, topPersona);
/* OBSTACULOS */
let bomba = document.querySelector(".divBomba");
let obstaculo = new Obstaculo(bomba);
obstaculo.generarObstaculo();


/* PUNTOS */
let estrella = document.querySelector(".estrella");
let star = new Estrella(estrella);
star.generarEstrella();


/* JUEGO */
let juego = new Loop(persona, muerte, bomba);
let divJuego = document.querySelector("#game-loop");

window.onkeyup = function (event) {
       
    if (event.keyCode === 32 || event.keyCode === 38 || event.keyCode === 87) { 
        // contempla barra espaciadora flechita arriba  y la W
            juego.moverPersonaje();
     } 
}
//divJuego.addEventListener('mousedown', moverPersonaje);


let timerVariable = setInterval(caerPersonaje, 500);

function caerPersonaje(){
    juego.caerPersonaje();
}




