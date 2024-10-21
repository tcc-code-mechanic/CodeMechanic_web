const carouselImages = document.querySelector('.carousel-images');
const totalImages = carouselImages.querySelectorAll('img').length;
let currentIndex = 1; // Começa da segunda imagem (índice 1 após a clonagem)

// Clonamos a primeira e a última imagem
const firstImage = carouselImages.querySelector('img').cloneNode(true);
const lastImage = carouselImages.querySelector('img:last-child').cloneNode(true);

// Adiciona a última imagem clonada no início e a primeira no final
carouselImages.insertBefore(lastImage, carouselImages.firstChild);
carouselImages.appendChild(firstImage);

// Atualizar o total de imagens incluindo as clonadas
const newTotalImages = totalImages + 2;
carouselImages.style.transform = `translateX(-100%)`; // Ajusta a posição inicial

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex--;
    updateCarousel();
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex++;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselImages.style.transition = 'transform 0.5s ease-in-out';
    carouselImages.style.transform = `translateX(${offset}%)`;

    // Verifica se chegamos à imagem clonada e ajusta o índice
    carouselImages.addEventListener('transitionend', () => {
        if (currentIndex === 0) {
            // Voltamos ao final real sem transição (sem o clone)
            carouselImages.style.transition = 'none';
            currentIndex = totalImages;
            carouselImages.style.transform = `translateX(${-currentIndex * 100}%)`;
        } else if (currentIndex === newTotalImages - 1) {
            // Voltamos ao início real sem transição (sem o clone)
            carouselImages.style.transition = 'none';
            currentIndex = 1;
            carouselImages.style.transform = `translateX(-100%)`;
        }
    });
}
