// Mensaje de bienvenida
console.log("¡Bienvenido a la web de imshefter!");

// Ejemplo: Cambio de color del nav al hacer scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});