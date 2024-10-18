// Script para o Menu Responsivo
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('nav');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fechar o menu ao clicar em um link
navLinks.addEventListener('click', () => {
    navLinks.classList.remove('active');
});

// Animações de Scroll Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
