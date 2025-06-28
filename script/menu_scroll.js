AOS.init({ once: true, duration: 800 });

const header = document.querySelector('header');
const toggle = document.querySelector('.mobile-nav-toggle');

window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});

toggle.addEventListener('click', () => {
    header.classList.toggle('mobile-nav-open');
});