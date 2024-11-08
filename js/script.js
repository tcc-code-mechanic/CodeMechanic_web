const filterButtons = document.querySelectorAll('.filter-button');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const filter = button.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

const newsGrid = document.querySelector('.news-grid');
const prevBtn = document.querySelector('.carousel-nav.prev');
const nextBtn = document.querySelector('.carousel-nav.next');
const itemsVisible = 1; // Número de itens visíveis ao mesmo tempo
const itemWidth = 402; // Largura de cada item, incluindo margem
let currentPosition = 0;

function updateCarousel() {
    const totalWidth = itemWidth * newsGrid.children.length;
    const maxPosition = totalWidth / (itemWidth * itemsVisible) - 1;
    newsGrid.style.transform = `translateX(-${currentPosition * (itemWidth * itemsVisible)}px)`;
    
    // Desabilita o botão "prev" se na posição inicial
    prevBtn.style.display = currentPosition === 0 ? 'none' : 'block';
    // Desabilita o botão "next" se na última posição
    nextBtn.style.display = currentPosition >= maxPosition ? 'none' : 'block';
}

// Inicializa o estado dos botões
updateCarousel();

nextBtn.addEventListener('click', () => {
    const maxPosition = Math.ceil(newsGrid.children.length / itemsVisible) - 1;
    if (currentPosition < maxPosition) {
        currentPosition++;
        updateCarousel();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentPosition > 0) {
        currentPosition--;
        updateCarousel();
    }
});
