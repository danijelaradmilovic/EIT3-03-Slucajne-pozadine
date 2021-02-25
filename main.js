let imgs = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];

function randomImg(number) {
    return Math.floor(Math.random() * number);
}
// randomImg(imgs.length)
let body = document.querySelector('body');
function changeBg() {
    body.style.backgroundImage =   `url('images/${imgs[randomImg(imgs.length)]}')`;
}

body.onload = changeBg();