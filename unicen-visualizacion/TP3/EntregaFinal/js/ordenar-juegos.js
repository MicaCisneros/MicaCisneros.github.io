window.addEventListener('DOMContentLoaded', (event) => {
   
    let juegos = [{
        'nombre': 'Among Us',
        'calificacion': '<i class="estrella-juego fa-solid fa-star"></i><i class="estrella-juego fa-solid fa-star"></i><i class="estrella-juego fa-solid fa-star"></i><i class="estrella-juego fa-solid fa-star"></i><i class="estrella-juego fa-solid fa-star"></i>',
        'img': '<img class="imgJuegoCategoria" src="img/juego18.jfif" alt="">'
    },
    {
        'nombre': 'Trophy Challenge',
        'calificacion': '<i class="estrella-juego fa-solid fa-star"></i><i class="estrella-juego fa-solid fa-star"></i><i class="estrella-juego fa-solid fa-star"></i>',
        'img': '<img class="imgJuegoCategoria" src="img/juego1.jfif" alt="">'
    },
    {
        'nombre': 'Minecraft',
        'calificacion': '<i class="estrella-juego fa-solid fa-star"></i><i class="estrella-juego fa-solid fa-star"></i><i class="estrella-juego fa-solid fa-star"></i><i class="estrella-juego fa-solid fa-star"></i>',
        'img': '<img class="imgJuegoCategoria" src="img/juego10.jfif" alt="">'
    },
    {
        'nombre': 'Fortnite',
        'calificacion': '<i class="estrella-juego fa-solid fa-star"></i>',
        'img': '<img class="imgJuegoCategoria" src="img/juego10.jfif" alt="">'
    },
    {
        'nombre': 'Gta',
        'calificacion': '<i class="estrella-juego fa-solid fa-star"></i><i class="estrella-juego fa-solid fa-star"></i><i class="estrella-juego fa-solid fa-star"></i><i class="estrella-juego fa-solid fa-star"></i><i class="estrella-juego fa-solid fa-star"></i>',
        'img': '<img class="imgJuegoCategoria" src="img/juego19.jfif" alt="">'
    },
    {
        'nombre': 'Rogue',
        'calificacion': '<i class="estrella-juego fa-solid fa-star"></i><i class="estrella-juego fa-solid fa-star"></i>',
        'img': '<img class="imgJuegoCategoria" src="img/juego13.jfif" alt="">'
    },
    {
        'nombre': 'Moving Out',
        'calificacion': '<i class="estrella-juego fa-solid fa-star"></i><i class="estrella-juego fa-solid fa-star"></i><i class="estrella-juego fa-solid fa-star"></i>',
        'img': '<img class="imgJuegoCategoria" src="img/juego4.jfif" alt="">'
    },
    {
        'nombre': 'Gta 2',
        'calificacion': '<i class="estrella-juego fa-solid fa-star"></i><i class="estrella-juego fa-solid fa-star"></i><i class="estrella-juego fa-solid fa-star"></i><i class="estrella-juego fa-solid fa-star"></i>',
        'img': '<img class="imgJuegoCategoria" src="img/juego14.jfif" alt="">'
    },
    {
        'nombre': 'Mario Bros',
        'calificacion': '<i class="estrella-juego fa-solid fa-star"></i><i class="estrella-juego fa-solid fa-star"></i><i class="estrella-juego fa-solid fa-star"></i><i class="estrella-juego fa-solid fa-star"></i><i class="estrella-juego fa-solid fa-star"></i>',
        'img': '<img class="imgJuegoCategoria" src="img/juego22.jfif" alt="">'
    },
];
   

mostrar(juegos);




calificacion = document.querySelector('#mejor-calificado');

document.querySelector('#select-ordenar').addEventListener('click', () => {

    let j = [{}];
    select = document.querySelector('#select-ordenar').value;
    console.log(select);
    if (select == "nombre") {
        j = juegos.sort(function(x, y) {
            return x.nombre.localeCompare(y.nombre);
        });
        console.log(j);
        mostrar(j);

    } else
    if (select == "mejor-calificado") {
        j = juegos.sort(function(x, y) {
            return x.calificacion.localeCompare(y.calificacion);
        });
        console.log(j);

        j.reverse();
        mostrar(j);
    }


})











});












// function SortArray(x, y) {
//     return x.nombre.localeCompare(y.nombre);
// }

function SortCalificacion(x, y) {
    return x.calificacion.localeCompare(y.calificacion);
}

function mostrar(games) {
    let contenedorPrevio = document.getElementById('cont-previo');
    let contenedor = document.getElementById('cont-secc-busqueda');
    let contenido = '';

    games.forEach(element => {
        contenido += '  <div class="bg-gris-oscuro juegoBusqueda"> <div class="divImgJuegoCategoria">' + element.img +
            '</div> <div class="tituloJuegoCategoria"> <p>' +
            element.nombre + '</p>' + element.calificacion + ' </div> </div>';

    });

    console.log(contenido);

    contenido += '</div>';

   // contenedor.style.visibility = 'hidden';
    contenedorPrevio.classList.add("juegosSeccionBusqueda");
    contenedorPrevio.innerHTML = contenido;

}