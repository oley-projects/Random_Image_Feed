const container = document.querySelector('.container');
const imageRows = 5;

for(let i = 0; i < imageRows * 3; i++) {
    const image = document.createElement('img');
    image.classList.add('image');
    image.src = (`https://picsum.photos/${randomImageSize()}`);
    container.appendChild(image);
}

function randomImageSize() {
    return `${randomNum()}/${randomNum()}`;
}

function randomNum() {
    return Math.floor(Math.random() * 10) + 300;
}
