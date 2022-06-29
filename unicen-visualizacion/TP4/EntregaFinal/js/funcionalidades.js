document.querySelector('#like').addEventListener('click', e => {
    e.preventDefault();

    let boton = document.querySelector('#like');
    let botonDislike = document.querySelector('#dislike');
    botonDislike.classList.remove("iconoSeleccionDislike");
    botonDislike.classList.add("color-blanco");

    boton.classList.add("iconoSeleccion");
    boton.classList.remove("color-blanco");
});

document.querySelector('#dislike').addEventListener('click', e => {
    e.preventDefault();

    let botonDislike = document.querySelector('#dislike');
    let boton = document.querySelector('#like');
    console.log(boton);
    botonDislike.classList.add("iconoSeleccionDislike");
    botonDislike.classList.remove("color-blanco");

    boton.classList.remove("iconoSeleccion");
    boton.classList.add("color-blanco");
});

document.querySelector('.iconoFavoritos').addEventListener('click', e => {
    e.preventDefault();

    let boton = document.querySelector('.iconoFavoritos');

    boton.classList.toggle("color-rosa");
});
