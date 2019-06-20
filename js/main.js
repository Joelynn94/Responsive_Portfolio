// Select DOM Items 
const menuButton = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const menuItems = document.querySelectorAll('.menu-item');


// Set Initial State of Menu
let showMenu = false;

menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu){
        menuButton.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        menuItems.forEach(item => item.classList.add('show'));

        // Set menu State
        showMenu = true;
    } else {
        menuButton.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        menuItems.forEach(item => item.classList.remove('show'));

        // Set menu State
        showMenu = false;
    }
}