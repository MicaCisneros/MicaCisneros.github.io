/**
 * iniciar() inicia personaje, puntaje, tiempo, fondo
 * procsarInput()  leer teclas
 * actualizarEstado() mover personaje
 * draw() dibujo escena, actualio posicion de las cosas
 * 
 * end() apret esc, perdio o gano
 */



/* PERSONAJE */
let jugando = false;
let obstaculos = [];

let personaje = document.querySelector("#personaje");
let muertePersonaje = document.querySelector('#muertePersonaje');
muertePersonaje.setAttribute("hidden", "");
// let posicionPersona = personaje.getBoundingClientRect();
// console.log(posicionPersona);
let topPersona = personaje.offsetTop;
let persona = new Personaje(personaje, muertePersonaje, topPersona);


/* OBSTACULOS */
// let bomba = document.querySelector(".divBomba");
//let obstaculo = new Obstaculo(bomba);
//obstaculo.generarObstaculo();
let explosion = document.querySelector("#explosion");
explosion.setAttribute("hidden", "");

/* COLECCIONABLES */
// let estrellaDiv = document.querySelector(".estrella");
//let estrella = new Estrella(estrellaDiv);
//estrella.generarEstrella();

/*  PUNTOS  */
let puntos = 0;


/* JUEGO */
let intervaloCrearElementos = null;
let intervaloChequearColision = null;
let juego = new Loop(persona, explosion, obstaculos, muertePersonaje, puntos);
// juego.generarObstaculos()
let divJuego = document.querySelector("#game-loop");

window.onkeyup = function(event) {

        if (event.keyCode === 32 || event.keyCode === 38 || event.keyCode === 87) {
            // contempla barra espaciadora flechita arriba  y la W
            juego.saltaPersonaje();
        }
    }
    //divJuego.addEventListener('mousedown', moverPersonaje);
    //Deberia llamarse al hacer click en un boton
jugar();

function jugar() {
    jugando = true;

    //vamos creando obstaculos y coleccionables
    intervaloCrearElementos = setInterval(() => {
        if (jugando) {
            generarObstaculos();
        }
    }, 1100);

    //chequeamos colisiones en cada elemento del arreglo
    intervaloChequearColision = setInterval(() => {

        for (let ob of obstaculos) {

            if ((ob.chequearColision(juego))) {
                terminarJuego();
            }
        }

    }, 300);


}

function generarObstaculos() {
    if (obstaculos.length < 4) {
        let num = ((Math.floor(Math.random() * 3)));
        let obstaculo1;
        switch (num) {
            case 0:
                obstaculo1 = new Elemento("estrella", 1);
                obstaculos.push(obstaculo1);
                break;
            case 1:
                obstaculo1 = new Elemento("bomba", 0);
                obstaculos.push(obstaculo1);
                break;
        }

    } else {
        let posicion = obstaculos[0].getPosicion();
        if (posicion <= 50) {
            obstaculos[0].ocultarElemento();
            obstaculos.splice(0, 1);
        }
    }
}

function terminarJuego() {

    console.log('terminar');
    obstaculos.forEach(elem => {
        elem.frenarAnimacion();
    });
    clearInterval(intervaloCrearElementos);
    clearInterval(intervaloChequearColision);
    jugando = false;
}

// function caerPersonaje() {
//     juego.caerPersonaje();
// }