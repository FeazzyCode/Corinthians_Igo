// Variáveis do slider
let current_slide_index = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

function showPage(pageId) {
    // Esconder todas as páginas
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Remover classe active de todos os links
    const navLinks = document.querySelectorAll('.navlink');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Mostrar a página selecionada
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Adicionar classe active ao link clicado
    const clickedLink = event.target;
    clickedLink.classList.add('active');
    
    // Scroll para o topo
    window.scrollTo(0, 0);
}

// Funções do Slider
function showSlide(index) {
    // Remover active de todos os slides e indicadores
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Adicionar active ao slide e indicador atual
    if (slides[index]) {
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        current_slide_index = index;
    }
}

function changeSlide(direction) {
    let new_index = current_slide_index + direction;
    
    if (new_index >= slides.length) {
        new_index = 0;
    } else if (new_index < 0) {
        new_index = slides.length - 1;
    }
    
    showSlide(new_index);
}

function currentSlide(index) {
    showSlide(index - 1);
}

// Auto‑play do slider
function autoSlide() {
    changeSlide(1);
}

// Iniciar auto‑play
let slide_interval = setInterval(autoSlide, 4000);

// Pausar auto‑play quando hover no slider
const slider_container = document.querySelector('.slider_container');
if (slider_container) {
    slider_container.addEventListener('mouseenter', () => {
        clearInterval(slide_interval);
    });
    
    slider_container.addEventListener('mouseleave', () => {
        slide_interval = setInterval(autoSlide, 4000);
    });
}

// Função para detectar scroll e adicionar efeito no header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = '#000';
    } else {
        header.style.backgroundColor = '#000';
    }
});
