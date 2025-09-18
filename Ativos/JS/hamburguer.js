//navegador em hamburguer 
const header = document.querySelector('header');
const nav = document.getElementById('nav_bar');

// Cria botão hambúrguer
const menuToggle = document.createElement('div');
menuToggle.id = 'menu-toggle';
menuToggle.innerHTML = '&#9776;';
header.appendChild(menuToggle);

// Ao clicar, alterna a classe active no nav
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});
