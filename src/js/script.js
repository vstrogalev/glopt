document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.promo__nav-menu'),
    menuItem = document.querySelectorAll('.promo__nav-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('promo__nav-menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('promo__nav-menu_active');
        })
    })
})