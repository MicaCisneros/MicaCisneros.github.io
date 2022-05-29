let slider_index = 5;

function show_slide(index) {
    let slides = document.querySelectorAll('.slide');

    if (index >= slides.length) slider_index = 6;
    if (index < 5) { slider_index = slides.length };

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (let i = slider_index - 5; i < slider_index; i++) {

        console.log(i);
        slides[i].style.display = 'block';
    }

}

show_slide(slider_index);

document.querySelector('#arrow-prev').addEventListener('click', () => {
    show_slide(--slider_index);
});


document.querySelector('#arrow-next').addEventListener('click', () => {
    show_slide(++slider_index);
});