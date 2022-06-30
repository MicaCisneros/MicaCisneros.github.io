
    let personaje = document.querySelector("#personaje");
    let muerte = document.querySelector("#muerte");
    muerte.setAttribute("hidden", "");
    let posicionPersona = personaje.getBoundingClientRect();
    console.log(posicionPersona);
    let juego = new Loop(personaje,muerte);
    let topPersona = posicionPersona['top'];
    console.log(topPersona);
    let divJuego = document.querySelector("#game-loop");
    divJuego.addEventListener('mousedown', moverPersonaje);

    let bomba = document.querySelector(".divBomba");
    let obstaculo = new Obstaculo(bomba);
    obstaculo.generarObstaculo();
    let timerVariable = setInterval(caerPersonaje, 500);


    function caerPersonaje(){
        if(verificarPerdedor()){
            topPersona= topPersona +10;
            personaje.style.top = topPersona+'px';
            muerte.style.top = topPersona+'px';
        }else{
            juego.accionMuerte();
        }
    }
    function moverPersonaje(){
        if(verificarPerdedor()){
            topPersona= topPersona -10;
            personaje.style.top = topPersona+'px';
            muerte.style.top = topPersona+'px';
        }else{
            juego.accionMuerte();
        }
    }

    function verificarPerdedor(){
        if(topPersona <= 0 || topPersona>=400 ){
            return false
        }else return true;
    }

