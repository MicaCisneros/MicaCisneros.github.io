/**
 * iniciar() inicia personaje, puntaje, tiempo, fondo
 * procsarInput()  leer teclas
 * actualizarEstado() mover personaje
 * draw() dibujo escena, actualio posicion de las cosas
 * 
 * end() apret esc, perdio o gano
 */



/* PERSONAJE */
let jugando = true; //Para probar lo pongo en true, aunque deberia hacerlo al apretar un boton jugar
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
// let explosion = document.querySelector("#explosion");
// explosion.setAttribute("hidden", "");

/* COLECCIONABLES */
// let estrellaDiv = document.querySelector(".estrella");
//let estrella = new Estrella(estrellaDiv);
//estrella.generarEstrella();

/*  PUNTOS  */
let puntos = 0;


/* JUEGO */
let intervaloCrearElementos = null;
let intervaloChequearColision = null;
let juego = new Loop(persona, obstaculos, muertePersonaje, puntos);
// juego.generarObstaculos()
let divJuego = document.querySelector("#game-loop");

window.onkeyup = function(event) {

        if (event.keyCode === 32 || event.keyCode === 38 || event.keyCode === 87) {
            // contempla barra espaciadora flechita arriba  y la W
            if(jugando == true){
                juego.saltaPersonaje();
            }
            
        }
    }
    //divJuego.addEventListener('mousedown', moverPersonaje);
    //Deberia llamarse al hacer click en un boton
jugar();

function jugar() {
    jugando = true;

    //creamos obstaculos
    intervaloCrearElementos = setInterval(() => {
        if (jugando) {
            generarObstaculos();
        }
    }, 1100);

    //chequeamos colisiones en cada elemento del arreglo
    intervaloChequearColision = setInterval(() => {

        for (let ob of obstaculos) {

            if ((ob.chequearColision(juego)) == 0) {
                terminarJuego();
            }
        }

    }, 600);


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
    jugando = false;
    let nube = document.querySelector(".nubes");
    let nube2 = document.querySelector(".nubes-2");
    let arbusto = document.querySelector(".arbustos");
    let piso = document.querySelector(".piso");
    console.log('terminar');

    persona.morir();
    nube.style.animationPlayState = 'paused';
    nube2.style.animationPlayState = 'paused';
    arbusto.style.animationPlayState = 'paused';
    piso.style.animationPlayState = 'paused';
    let intervalPersonaje = setInterval(() => {
        obstaculos.forEach(elem => {
            elem.frenarAnimacion();
        });
        personaje.style.animationPlayState = 'paused';
        clearInterval(intervalPersonaje);
    }, 900);
    clearInterval(intervaloCrearElementos);
    clearInterval(intervaloChequearColision);
    
}
