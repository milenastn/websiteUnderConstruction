const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');
const icon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('menu-show');
    navMenu.classList.toggle('menu-closed');
    document.body.classList.toggle('no-scroll');

    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

const openModal = document.querySelector('.open-modal');
const modal = document.querySelector('.modal');
const closeModal = modal.querySelector('i');

openModal.addEventListener('click', () => {
    modal.classList.remove('modal-hidden');
});

closeModal.addEventListener('click', () => {
    modal.classList.add('modal-hidden');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('modal-hidden');
    }
});