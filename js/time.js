let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const dots = document.querySelectorAll('.carousel-dots .dot');
const caption = document.querySelector('.carousel-caption');

// Array com as legendas de cada imagem
const captions = [
    'Tela de Splash do App, onde o usuário visualiza o logotipo ao abrir.',
    'Tela de Login, onde o usuário pode entrar com seu email e senha.',
    'Tela de Cadastro, permitindo que novos usuários se cadastrem.'
];

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === index) {
            img.classList.add('active');
            dots[i].classList.add('active');
        }
    });
    // Atualiza a legenda com base no índice da imagem
    caption.textContent = captions[index];
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

// Exibe a primeira imagem e legenda ao carregar a página
showImage(currentIndex);
