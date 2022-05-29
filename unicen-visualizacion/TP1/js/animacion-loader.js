temporizadorDeRetraso();

let identificador;

function temporizadorDeRetraso() {
    identificador = setTimeout(loaderF, 3000);
}


function loaderF() {
    let contenedorLoader = document.querySelector('#contenedor-loader');

    console.log('hola mundo!');
    contenedorLoader.style.opacity = 0;
    contenedorLoader.style.visibility = 'hidden';
    contenedorLoader.style.display = 'none';
}