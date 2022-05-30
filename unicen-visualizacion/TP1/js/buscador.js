let juegos = [{
        'nombre': 'jueguito3',
        'calificacion': 3,
        'img': '<img class="imgJuegoCategoria" src="img/juego4.jfif" alt="">'
    },
    {
        'nombre': 'ajueguito1',
        'calificacion': 4,
        'img': '<img class="imgJuegoCategoria" src="img/juego4.jfif" alt="">'
    },
    {
        'nombre': 'cjueguito2',
        'calificacion': 5,
        'img': '<img class="imgJuegoCategoria" src="img/juego4.jfif" alt="">'
    },
    {
        'nombre': 'aaa2',
        'calificacion': 1,
        'img': '<img class="imgJuegoCategoria" src="img/juego4.jfif" alt="">'
    },
];










calificacion = document.querySelector('#mejor-calificado');

document.querySelector('#select-ordenar').addEventListener('click', () => {
    select = document.querySelector('#select-ordenar').value;
    if (select == "nombre") {
        let j = juegos.sort(SortArray);
        console.log(j);


    } else
    if (select == "mejor-calificado") {
        let j = juegos.sort(SortCalificacion);
        console.log(j);


    }

})

function SortArray(x, y) {
    return x.nombre.localeCompare(y.nombre);
}

function SortCalificacion(x, y) {
    return x.calificacion.localeCompare(y.calificacion);
}