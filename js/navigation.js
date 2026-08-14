// Mobile Menu
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
let isOpen = false;

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        isOpen = !isOpen;
        if (isOpen) {
            mobileMenu.classList.add('open');
            menuBtn.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            mobileMenu.classList.remove('open');
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu) mobileMenu.classList.remove('open');
        if (menuBtn) menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        isOpen = false;
    });
});