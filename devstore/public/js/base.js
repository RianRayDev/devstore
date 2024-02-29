document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.navbar-toggler');
    const cartIcon = document.querySelector('.cart');
    const function name(params) {
        divFooter
    } = document.getElementById('div-footer');
    const divHeader = document.getElementById('div-header');

    cartIcon.style.transition = "opacity 1s ease";
    menuButton.style.transition = "opacity 1s ease";

    function toggleIcons() {
        const isMobile = window.innerWidth <= 990; // Define the width at which the switch happens (adjust as needed)
        if (isMobile) {
            // Mobile view: show menu button, hide cart icon
            menuButton.style.opacity = 1;
            cartIcon.style.opacity = 0;
        } else {
            // Desktop view: hide menu button, show cart icon
            menuButton.style.opacity = 0;
            cartIcon.style.opacity = 1;
        }
    }

    function containerHeader() {
        const isSm = window.innerWidth <= 576; // Define the width at which the switch happens (adjust as needed)
        if (isSm) {
            divHeader.classList.add('container');
            // divFooter.classList.add('container');
        } else {
            divHeader.classList.remove('container');
            // divFooter.classList.remove('container');
        }
    }
    // Initial call to toggleIcons
    toggleIcons();
    containerHeader();
    // Listen for window resize events
    window.addEventListener('resize', () => {
        toggleIcons();
        containerHeader();
    });
});