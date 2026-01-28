// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Adicionar classe active ao link de navegação baseado na seção visível
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function updateActiveLink() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// Animação de entrada para elementos quando ficam visíveis
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos elementos
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.service-item, .pricing-card, .step, .why-item, .contact-item');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// Menu mobile toggle (caso queiras adicionar um hamburger menu)
const createMobileMenu = () => {
    const nav = document.querySelector('.nav-content');
    const navLinks = document.querySelector('.nav-links');
    
    // Criar botão hamburger
    const menuBtn = document.createElement('button');
    menuBtn.classList.add('mobile-menu-btn');
    menuBtn.innerHTML = '☰';
    menuBtn.style.display = 'none';
    menuBtn.style.background = 'none';
    menuBtn.style.border = 'none';
    menuBtn.style.fontSize = '1.5rem';
    menuBtn.style.cursor = 'pointer';
    menuBtn.style.color = 'var(--primary-color)';
    
    // Toggle menu
    menuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Inserir botão antes dos links
    nav.insertBefore(menuBtn, navLinks);
    
    // Mostrar/esconder menu baseado no tamanho da tela
    const handleResize = () => {
        if (window.innerWidth <= 768) {
            menuBtn.style.display = 'block';
            navLinks.style.display = 'none';
        } else {
            menuBtn.style.display = 'none';
            navLinks.style.display = 'flex';
        }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
};

// Inicializar menu mobile
createMobileMenu();

// Fechar menu mobile ao clicar num link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            document.querySelector('.nav-links').style.display = 'none';
        }
    });
});
