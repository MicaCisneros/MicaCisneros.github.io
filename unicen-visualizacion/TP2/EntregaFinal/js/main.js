let slider_index = 5;

let slider_index2 = 5;

function show_slide(index) {
    let slides = document.querySelectorAll('.slide');

    if (index > slides.length) slider_index = 5;
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


function show_slide2(index) {
    let slides = document.querySelectorAll('.slide2');

    if (index > slides.length) slider_index2 = 5;
    if (index < 5){ slider_index2 = slides.length};

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (let i = slider_index2 - 5; i < slider_index2; i++) {
        console.log(i);
        if(i<slides.length){
            slides[i].style.display = 'block';
        }
        
    }

}

show_slide2(slider_index2);

document.querySelector('#arrow-prev2').addEventListener('click', () => {
    show_slide2(--slider_index2);
});


document.querySelector('#arrow-next2').addEventListener('click', () => {
    console.log("matenme");
    show_slide2(++slider_index2);
});
