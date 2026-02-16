/**
 * NAVBAR FUNCTIONALITY
 * Maneja la apertura/cierre del menú hamburguesa en dispositivos móviles
 */

// Seleccionar elementos del navbar
const hamburgerBtn = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

/**
 * Toggle del menú hamburguesa
 */
function toggleHamburger() {
  hamburgerBtn.classList.toggle('active');
  navMenu.classList.toggle('active');
}

/**
 * Cerrar menú cuando se hace click en un link
 */
function closeMenu() {
  hamburgerBtn.classList.remove('active');
  navMenu.classList.remove('active');
}

/**
 * Event Listeners
 */
if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', toggleHamburger);
}

// Cerrar menú cuando se hace click en un nav-link
navLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// Cerrar menú cuando usuario hace click fuera
document.addEventListener('click', (e) => {
  if (!e.target.closest('.navbar')) {
    closeMenu();
  }
});
