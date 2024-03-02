document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.navbar-toggler');
    const cartIcon = document.querySelector('.cart');
    const divFooter = document.getElementById('div-footer');
    const divHeader = document.getElementById('div-header');

    cartIcon.style.transition = "opacity 1s ease";
    menuButton.style.transition = "opacity 1s ease";

    function toggleIcons() {
        const isMobile = window.innerWidth <= 990; 
        if (isMobile) {
            menuButton.style.opacity = 1;
            cartIcon.style.opacity = 0;
        } else {
            menuButton.style.opacity = 0;
            cartIcon.style.opacity = 1;
        }
    }

    function containerHeader() {
        const isSm = window.innerWidth <= 576; 
        if (isSm) {
            divHeader.classList.add('container');
            divFooter.classList.add('container');
        } else {
            divHeader.classList.remove('container');
            divFooter.classList.remove('container');
        }
    }

    toggleIcons();
    containerHeader();

    window.addEventListener('resize', () => {
        toggleIcons();
        containerHeader();
    });

// Get references to the card elements
const cardOne = document.getElementById('cardOne');
const cardTwo = document.getElementById('cardTwo');
const cardThree = document.getElementById('cardThree');

// Variables to track dragging state and initial positions
let isDragging = false;
let startX, scrollLeft;

// Function to handle mouse down event on cards
function handleMouseDown(event) {
    isDragging = true;
    startX = event.pageX - event.target.offsetLeft;
    scrollLeft = event.target.scrollLeft;
}

// Function to handle mouse move event on cards
function handleMouseMove(event) {
    if (!isDragging) return;
    const x = event.pageX - event.target.offsetLeft;
    const walk = (x - startX) * 1; // You can adjust the scrolling speed here
    event.target.scrollLeft = scrollLeft - walk;
}

// Function to handle mouse up event on cards
function handleMouseUp() {
    isDragging = false;
}

// Add event listeners to each card for mouse down, mouse move, and mouse up events
cardOne.addEventListener('mousedown', handleMouseDown);
cardTwo.addEventListener('mousedown', handleMouseDown);
cardThree.addEventListener('mousedown', handleMouseDown);

document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseup', handleMouseUp);


    // Initial check for overflow on page load
    window.addEventListener('load', function() {
        checkOverflow(cardOne);
        checkOverflow(cardTwo);
        checkOverflow(cardThree);
    });
});

// Function to check and handle overflow
function checkOverflow(card) {
    if (card.scrollWidth > card.clientWidth) {
        card.style.overflowX = 'hidden';
    } else {
        card.style.overflowX = 'visible';
    }
}
