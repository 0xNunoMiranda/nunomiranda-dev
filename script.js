// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

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

const closeMenu = () => {
  if (!menuBtn || !menu) return;
  menuBtn.setAttribute("aria-expanded", "false");
  menu.classList.remove("is-open");
};

const openMenu = () => {
  if (!menuBtn || !menu) return;
  menuBtn.setAttribute("aria-expanded", "true");
  menu.classList.add("is-open");
};

const toggleMenu = () => {
  if (!menuBtn || !menu) return;
  const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
  if (isOpen) closeMenu();
  else openMenu();
};

if (menuBtn && menu) {
  menuBtn.addEventListener("click", toggleMenu);

  document.addEventListener("click", (e) => {
    if (window.innerWidth > 768) return;
    const target = e.target;
    if (!(target instanceof Element)) return;
    if (menu.contains(target) || menuBtn.contains(target)) return;
    closeMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) closeMenu();
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) closeMenu();
    });
  });
}
