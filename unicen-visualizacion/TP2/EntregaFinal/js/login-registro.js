// function clickRotate() {
//     card.classList.toggle('rotated');
// }
// card.addEventListener('click', clickRotate);



document.querySelectorAll(".rotar-card").forEach(boton => {
    boton.addEventListener('click', e => {
        const card = document.querySelector('.card');
        card.classList.toggle('rotated');
    });
});