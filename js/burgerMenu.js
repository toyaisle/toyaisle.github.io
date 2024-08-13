const burgerMenu = document.getElementById('burger-menu');
const overlayNav = document.getElementById('myNav');

burgerMenu.addEventListener('click', () => {
    overlayNav.classList.toggle('show');
    document.body.classList.toggle('no-scroll');
});

function closeNav() {
    overlayNav.classList.remove('show');
    document.body.classList.remove('no-scroll');
}
