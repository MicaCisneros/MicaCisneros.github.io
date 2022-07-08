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



let muertePersonaje = document.querySelector('#muertePersonaje');
muertePersonaje.setAttribute("hidden", "");
// let posicionPersona = personaje.getBoundingClientRect();
// console.log(posicionPersona);
let topPersona = personaje.offsetTop;
console.log(topPersona);
let persona = new Personaje(personaje, muertePersonaje, topPersona);


/* OBSTACULOS */
let bomba = document.querySelector(".divBomba");
let obstaculo = new Obstaculo(bomba);
obstaculo.generarObstaculo();
let explosion = document.querySelector("#explosion");
explosion.setAttribute("hidden", "");

/* COLECCIONABLES */
let estrellaDiv = document.querySelector(".estrella");
let estrella = new Estrella(estrellaDiv);
estrella.generarEstrella();

/*  PUNTOS  */
let puntos = 0;


/* JUEGO */
let juego = new Loop(persona, explosion, bomba, obstaculo, estrellaDiv, muertePersonaje, puntos);
let divJuego = document.querySelector("#game-loop");

window.onkeyup = function(event) {

        if (event.keyCode === 32 || event.keyCode === 38 || event.keyCode === 87) {
            // contempla barra espaciadora flechita arriba  y la W
            juego.moverPersonaje();
        }
    }
    //divJuego.addEventListener('mousedown', moverPersonaje);


let timerVariable = setInterval(caerPersonaje, 500);

function caerPersonaje() {
    juego.caerPersonaje();
}