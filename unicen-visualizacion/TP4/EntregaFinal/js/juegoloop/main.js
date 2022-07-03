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
let posicionPersona = personaje.getBoundingClientRect();
console.log(posicionPersona);
let topPersona = posicionPersona['top'];
console.log(topPersona);

/* JUEGO */
let juego = new Loop(personaje, muerte);
let divJuego = document.querySelector("#game-loop");
divJuego.addEventListener('mousedown', moverPersonaje);

/* OBSTACULOS */
let bomba = document.querySelector(".divBomba");
let obstaculo = new Obstaculo(bomba);
obstaculo.generarObstaculo();


/* PUNTOS */
let estrella = document.querySelector(".estrella");
let star = new Estrella(estrella);
star.generarEstrella();

let timerVariable = setInterval(caerPersonaje, 500);


function caerPersonaje() {
    if (verificarPerdedor()) {
        topPersona = topPersona + 10;
        personaje.style.top = topPersona + 'px';
        muerte.style.top = topPersona + 'px';
    } else {
        juego.accionMuerte();
    }
}

function moverPersonaje() {
    if (verificarPerdedor()) {
        topPersona = topPersona - 10;
        personaje.style.top = topPersona + 'px';
        muerte.style.top = topPersona + 'px';
    } else {
        juego.accionMuerte();
    }
}

function verificarPerdedor() {
    if (topPersona <= -30 || topPersona >= 300) {
        return false
    } else return true;
}