const burgerMenu = document.getElementById('burger-menu');
const overlayNav = document.getElementById('myNav');

burgerMenu.addEventListener('click', () => {
    overlayNav.classList.toggle('show');
});

function closeNav() {
    overlayNav.classList.remove('show');
}
