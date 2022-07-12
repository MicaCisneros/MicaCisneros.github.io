//FONDO JUEGO
let nube = document.querySelector(".nubes");
let nube2 = document.querySelector(".nubes-2");
let arbusto = document.querySelector(".arbustos");
let piso = document.querySelector(".piso");



let obstaculos = [];


let personaje = document.querySelector("#personaje");
let topPersona = personaje.offsetTop;
let persona = new Personaje(personaje, topPersona);


/*  PUNTOS  */
let puntos = 0;


/* JUEGO */
let jugando = false;
let intervaloCrearElementos = null;
let intervaloChequearColision = null;
let intervaloJuego = false;
let juego = new Loop(persona, obstaculos, puntos,personaje);
// juego.generarObstaculos()
let divJuego = document.querySelector("#game-loop");

let ganador = false;

let arrow_keys_handler = function(e) {
    switch(e.code){
        case "ArrowUp": case "ArrowDown": e.preventDefault(); break;
        default: break; // do not block other keys
    }
  };
  window.addEventListener("keydown", arrow_keys_handler, false);

/* SALTO PERSONAJE */
window.onkeyup = function(event) {
    if (event.keyCode === 32 || event.keyCode === 38 || event.keyCode === 87) {
        // contempla barra espaciadora flechita arriba  y la W
        if (jugando == true) {
            juego.saltaPersonaje();
        }
    }
}

document.querySelector('.selectNena').addEventListener('click', e => {
    persona.setPersonaje("nena");
    let nena = document.querySelector('.selectNena');
    nena.classList.add("seleccionado");
    let nene = document.querySelector('.selectNene');
    nene.classList.remove("seleccionado");
});

document.querySelector('.selectNene').addEventListener('click', e => {
    persona.setPersonaje("nene");
    let nena = document.querySelector('.selectNena');
    nena.classList.remove("seleccionado");
    let nene = document.querySelector('.selectNene');
    nene.classList.add("seleccionado");
});

document.querySelector('.jugar').addEventListener('click', e => {
    e.preventDefault();
    let divJugar = document.querySelector(".cartel");
    divJugar.setAttribute("hidden", "");
    iniciarJuego()
});


function iniciarJuego(){
    nube.classList.remove("paused");
    nube2.classList.remove("paused");
    piso.classList.remove("paused");
    arbusto.classList.remove("paused");

   
    jugando = true;
    timerJuego = setTimeout(ganar, 90000);
    jugar();
    
}

document.querySelector('.reiniciar').addEventListener('click', e => {
    e.preventDefault();
    juego.setPuntos(0);
    juego.setVidas(3);
    juego.mostrarVidas();
    juego.mostrarPuntosInicial();
    personaje.style.animationPlayState = 'running';
    
    let divJugar2 = document.querySelector(".cartelfin");
    divJugar2.style.visibility = "hidden";
    
    obstaculos = [];
    iniciarJuego()
});



/* PERSONAJE */
// let jugando = false; //Para probar lo pongo en true, aunque deberia hacerlo al apretar un boton jugar
// let obstaculos = [];

// let personaje = document.querySelector("#personaje");
// let muertePersonaje = document.querySelector('#muertePersonaje');
// muertePersonaje.setAttribute("hidden", "");
// // let posicionPersona = personaje.getBoundingClientRect();
// // console.log(posicionPersona);
// let topPersona = personaje.offsetTop;
// let persona = new Personaje(personaje, muertePersonaje, topPersona);
// let botonPlay = document.querySelector('.botonPlay');








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
// let puntos = 0;


// /* JUEGO */
// let intervaloCrearElementos = null;
// let intervaloChequearColision = null;
// let juego = new Loop(persona, obstaculos, muertePersonaje, puntos);
// // juego.generarObstaculos()
// let divJuego = document.querySelector("#game-loop");



//BOTON PLAY
// botonPlay.addEventListener('click', () => {

//     jugando = true;

//     timerJuego = setTimeout(ganar, 8000);
//     jugar();
//     botonPlay.style.visibility = 'hidden';

// });


function ganar() {
    ganador = true;
    if (jugando == true) {
        terminarJuego(ganador);
    }

}
window.onkeyup = function(event) {
    if (event.keyCode === 32 || event.keyCode === 38 || event.keyCode === 87) {
        // contempla barra espaciadora flechita arriba  y la W
        if (jugando == true) {
            juego.saltaPersonaje();
        }

    }
}









function jugar() {
    jugando = true;
    persona.creoPersonaje();
    //creamos obstaculos
    intervaloCrearElementos = setInterval(() => {
        if (jugando) {
            generarObstaculos();
        }
    }, 2500);

    //chequeamos colisiones en cada elemento del arreglo
    intervaloChequearColision = setInterval(() => {

        for (let ob of obstaculos) {

            if ((ob.chequearColision(juego)) == 0) {
                ganador = false;
                terminarJuego(ganador);
            }
        }

    }, 600);


}

function generarObstaculos() {
    // if (obstaculos.length < 4) {
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
        case 2:
            obstaculo1 = new Elemento("estrella", 1);
            obstaculos.push(obstaculo1);
            break;
    }

    // } else {
    let posicion = obstaculos[0].getPosicion();
    if (posicion <= 50) {
        obstaculos[0].ocultarElemento();
        obstaculos.splice(0, 1);
    }
    // }
}

function terminarJuego(juegoGanado) {
    jugando = false;

    nube.classList.add("paused");
    nube2.classList.add("paused");
    arbusto.classList.add("paused");
    piso.classList.add("paused");

    console.log('terminar');
    clearInterval(intervaloCrearElementos);
    clearInterval(intervaloChequearColision);

    clearInterval(intervaloJuego);
    clearTimeout(timerJuego);
    

    if (juegoGanado == false) {
       
        persona.morir();
  
        let gameover = document.querySelector(".cartelfin");
        gameover.style.visibility = "visible";
        gameover.classList.add('gameover');

        let intervalPersonaje = setInterval(() => {
            if(obstaculos.length != 0){
                obstaculos.forEach(elem => {
                    elem.ocultarElemento();
                });
                obstaculos.splice(0, obstaculos.length);
            }
            personaje.style.animationPlayState = 'paused';
            clearInterval(intervalPersonaje);
        }, 900);

    } else {
        personaje.style.animationPlayState = 'paused';
        if(obstaculos.length != 0){
            obstaculos.forEach(elem => {
                elem.ocultarElemento();
            });
            obstaculos.splice(0, obstaculos.length);
        }

        
        let win = document.querySelector(".cartelfin");
        win.style.visibility = "visible";
        win.classList.add('win');

    }
    let contenido = "Has obtenido " + juego.getPuntos() + " estrellas";
    let divPuntos = document.querySelector(".contenidoFin");
    divPuntos.innerHTML = contenido;





}