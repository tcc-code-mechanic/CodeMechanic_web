let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const dots = document.querySelectorAll('.carousel-dots .dot');
const caption = document.querySelector('.carousel-caption');

// Array com as legendas de cada imagem
const captions = [
    'Tela de Splash do App, onde o usuário visualiza o logotipo ao abrir.',
    'Tela de Login, onde o usuário pode entrar com seu email e senha.',
    'Tela de Cadastro, permitindo que novos usuários se cadastrem.',
    'Tela Home, com atualizações e ajuda com dicas de manutenção.',
    'Tela de chat, onde o usuário pode se comunicar com o meânico',
];

console.log("Quantidade de imagens:", images.length);  // Verificar se as imagens estão sendo selecionadas corretamente
console.log("Quantidade de dots:", dots.length);      // Verificar se os dots estão sendo selecionados corretamente

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === index) {
            img.classList.add('active');
            dots[i].classList.add('active');
        }
    });
    caption.textContent = captions[index]; // Atualiza a legenda
    console.log("Mostrando imagem:", index); // Log para verificar se a função está sendo chamada corretamente
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
    console.log("Próxima imagem, índice atual:", currentIndex); // Log para verificar o comportamento do carrossel
}

// Inicia o carrossel automático
setInterval(nextImage, 3000); // Muda a cada 3 segundos

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showImage(currentIndex);
    });
});

// Exibe a primeira imagem e legenda ao carregar a página
showImage(currentIndex);
