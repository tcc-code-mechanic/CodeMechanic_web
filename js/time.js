// Carrossel Automático
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const dots = document.querySelectorAll('.carousel-dots .dot');

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === index) {
            img.classList.add('active');
            dots[i].classList.add('active');
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Inicia o carrossel automático
setInterval(nextImage, 3000); // Muda a cada 3 segundos

// Permite clicar nas bolinhas para mudar de imagem
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showImage(currentIndex);
    });
});