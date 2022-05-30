let juegos = [{
        'nombre': 'Among Us',
        'calificacion': 5,
        'img': '<img class="imgJuegoCategoria" src="img/juego18.jfif" alt="">'
    },
    {
        'nombre': 'Trophy Challenge',
        'calificacion': 3,
        'img': '<img class="imgJuegoCategoria" src="img/juego1.jfif" alt="">'
    },
    {
        'nombre': 'Minecraft',
        'calificacion': 4,
        'img': '<img class="imgJuegoCategoria" src="img/juego10.jfif" alt="">'
    },
    {
        'nombre': 'Fortnite',
        'calificacion': 1,
        'img': '<img class="imgJuegoCategoria" src="img/juego10.jfif" alt="">'
    },
    {
        'nombre': 'Gta',
        'calificacion': 5,
        'img': '<img class="imgJuegoCategoria" src="img/juego19.jfif" alt="">'
    },
    {
        'nombre': 'Rogue',
        'calificacion': 2,
        'img': '<img class="imgJuegoCategoria" src="img/juego13.jfif" alt="">'
    },
    {
        'nombre': 'Moving Out',
        'calificacion': 3,
        'img': '<img class="imgJuegoCategoria" src="img/juego4.jfif" alt="">'
    },
    {
        'nombre': 'Gta 2',
        'calificacion': 4,
        'img': '<img class="imgJuegoCategoria" src="img/juego14.jfif" alt="">'
    },
    {
        'nombre': 'Mario Bros',
        'calificacion': 5,
        'img': '<img class="imgJuegoCategoria" src="img/juego22.jfif" alt="">'
    },
];










calificacion = document.querySelector('#mejor-calificado');

document.querySelector('#select-ordenar').addEventListener('click', () => {

    let j = [{}];
    select = document.querySelector('#select-ordenar').value;
    if (select == "nombre") {
        j = juegos.sort(SortArray);
        console.log(j);
        mostrar(j);

    } else
    if (select == "mejor-calificado") {
        j = juegos.sort(SortCalificacion);
        console.log(j);

        mostrar(j);
    }


})

function SortArray(x, y) {
    return x.nombre.localeCompare(y.nombre);
}

function SortCalificacion(x, y) {
    return x.calificacion.localeCompare(y.calificacion);
}

function mostrar(games) {
    let contenedor = document.getElementById('cont-secc-busqueda');
    let contenido = '';

    games.forEach(element => {
        contenido += '  <div class="bg-gris-oscuro juegoBusqueda"> <div class="divImgJuegoCategoria">' + element.img +
            '</div> <div class="tituloJuegoCategoria">' +
            element.nombre + ' </div> </div>';

    });

    console.log(contenido);

    contenido += '</div>';

    contenedor.innerHTML = contenido;

}