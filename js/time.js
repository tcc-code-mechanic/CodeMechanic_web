// Carrossel do App
let currentIndexApp = 0;
const imagesApp = document.querySelectorAll('.carousel-images-app img');
const dotsApp = document.querySelectorAll('.carousel-dots-app .dot');
const captionApp = document.querySelector('.carousel-caption');

// Legendas do app
const captionsApp = [
    'Tela de Splash do App, onde o usuário visualiza o logotipo ao abrir.',
    'Tela de Login, onde o usuário pode entrar com seu email e senha.',
    'Tela de Cadastro, permitindo que novos usuários se cadastrem.',
    'Tela Home, com atualizações e ajuda com dicas de manutenção.',
    'Tela de chat, onde o usuário pode se comunicar com o mecânico.',
    'Tela do mapa de socorro, onde será exibido os mecânicos mais próximos, e enviará um alerta de solicitação de guincho.'
];

function showImageApp(index) {
    imagesApp.forEach((img, i) => {
        img.classList.remove('active');
        dotsApp[i].classList.remove('active');
        if (i === index) {
            img.classList.add('active');
            dotsApp[i].classList.add('active');
        }
    });
    captionApp.textContent = captionsApp[index];
}

function nextImageApp() {
    currentIndexApp = (currentIndexApp + 1) % imagesApp.length;
    showImageApp(currentIndexApp);
}

// Inicia o carrossel do app
setInterval(nextImageApp, 3000);

dotsApp.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndexApp = index;
        showImageApp(currentIndexApp);
    });
});

// Exibe a primeira imagem e legenda ao carregar a página
showImageApp(currentIndexApp);


// Carrossel do Desktop
let currentIndexDesktop = 0;
const imagesDesktop = document.querySelectorAll('.carousel-images-desktop img');
const dotsDesktop = document.querySelectorAll('.carousel-dots-desktop .dot');
const captionDesktop = document.querySelector('.carousel-caption'); // Pode criar uma nova legenda para desktop

// Legendas do desktop
const captionsDesktop = [
    'Tela de Splash do Sistema, com o logotipo ao iniciar.',
    'Tela de Login, onde os usuários autorizados entram no sistema para gerenciar a mecânica.',
    'Tela Home, com informações gerais e controle de atividades.',
    'Tela de Gerenciamento de Serviços, onde é possível gerenciar ordens de serviço.',
    'Tela de Cadastro de Clientes, com as informações dos clientes.',
    'Tela de Produtos, onde é possível cadastrar e gerenciar produtos.'
];

function showImageDesktop(index) {
    imagesDesktop.forEach((img, i) => {
        img.classList.remove('active');
        dotsDesktop[i].classList.remove('active');
        if (i === index) {
            img.classList.add('active');
            dotsDesktop[i].classList.add('active');
        }
    });
    captionDesktop.textContent = captionsDesktop[index];
}

function nextImageDesktop() {
    currentIndexDesktop = (currentIndexDesktop + 1) % imagesDesktop.length;
    showImageDesktop(currentIndexDesktop);
}

// Inicia o carrossel do desktop
setInterval(nextImageDesktop, 3000);

dotsDesktop.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndexDesktop = index;
        showImageDesktop(currentIndexDesktop);
    });
});

// Exibe a primeira imagem e legenda ao carregar a página
showImageDesktop(currentIndexDesktop);