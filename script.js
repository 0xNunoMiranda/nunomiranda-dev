// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (!href || href === "#") return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      
      // Fechar menu mobile se estiver aberto
      const menu = document.querySelector(".nav-links");
      const menuBtn = document.querySelector(".mobile-menu-btn");
      if (menu && menuBtn && window.innerWidth <= 768) {
        menu.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    }
  });
});

// Sistema de Idiomas
function initLanguageSystem() {
  const langBtn = document.querySelector('.lang-btn');
  const langDropdown = document.querySelector('.lang-dropdown');
  const langOptions = document.querySelectorAll('.lang-option');
  
  if (!langBtn || !langDropdown) return;
  
  // Toggle dropdown
  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('active');
  });
  
  // Fechar dropdown ao clicar fora
  document.addEventListener('click', () => {
    langDropdown.classList.remove('active');
  });
  
  // Selecionar idioma
  langOptions.forEach(option => {
    option.addEventListener('click', (e) => {
      e.stopPropagation();
      const lang = option.getAttribute('data-lang');
      if (lang && typeof loadLanguage === 'function') {
        loadLanguage(lang);
      }
      langDropdown.classList.remove('active');
    });
  });
  
  // Carregar idioma salvo ou padrão
  const savedLang = localStorage.getItem('preferredLanguage') || 'pt-PT';
  if (typeof loadLanguage === 'function') {
    loadLanguage(savedLang);
  }
}

// Sistema de Theme Toggle
function initThemeSystem() {
  const themeToggle = document.querySelector('.theme-toggle');
  if (!themeToggle) return;
  
  // Carregar tema salvo (dark mode é padrão)
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    updateThemeIcon(true);
  } else {
    updateThemeIcon(false);
  }
  
  // Toggle theme
  themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    updateThemeIcon(isLight);
  });
}

function updateThemeIcon(isLight) {
  const themeToggle = document.querySelector('.theme-toggle');
  if (!themeToggle) return;
  
  themeToggle.innerHTML = isLight 
    ? '<span class="theme-icon">🌙</span>' 
    : '<span class="theme-icon">☀️</span>';
  
  themeToggle.setAttribute('aria-label', isLight ? 'Ativar modo escuro' : 'Ativar modo claro');
}

// Adicionar classe active ao link de navegação baseado na seção visível
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

function updateActiveLink() {
  const offset = 220;
  const y = window.scrollY + offset;
  let current = sections[0]?.getAttribute("id") ?? "";

  sections.forEach((section) => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    if (y >= top && y < bottom) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);

// Animação de entrada para elementos quando ficam visíveis
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Aplicar animação aos elementos
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(
    ".service-item, .pricing-card, .step, .why-item, .contact-item",
  );

  animatedElements.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
  });
});

// Menu mobile
const menuBtn = document.querySelector(".mobile-menu-btn");
const menu = document.querySelector(".nav-links");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", function() {
    const isExpanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", !isExpanded);
    menu.classList.toggle("active");
  });

  // Fechar menu ao clicar fora
  document.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      const target = e.target;
      if (target instanceof Element && !menu.contains(target) && !menuBtn.contains(target)) {
        menu.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    }
  });

  // Fechar menu com ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("active")) {
      menu.classList.remove("active");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });

  // Fechar menu ao redimensionar para desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      menu.classList.remove("active");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });
}

// Inicializar sistemas ao carregar página
document.addEventListener('DOMContentLoaded', () => {
  initLanguageSystem();
  initThemeSystem();
});
