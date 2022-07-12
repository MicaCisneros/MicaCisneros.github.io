document.getElementById("buscador-desplegable").addEventListener('keypress', eventoBuscador => {

    let div = document.querySelector(".dropdown-content ");
    div.classList.add("display-show");

});

// let buscador = document.getElementById("buscador-desplegable").value
// if (buscador == "") {
//     div.classList.remove("display-show");
// }

// document.getElementById("buscador-desplegable").addEventListener('onblur', (event) => {
//     let div = document.querySelector(".dropdown-content ");
//     div.classList.remove("display-show");
// });