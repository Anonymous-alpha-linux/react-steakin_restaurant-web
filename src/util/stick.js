window.addEventListener('scroll', () => {
 const header = document.querySelector('.st-admin-header__wrapper');
 header.classList.toggle('sticky', window.scrollY > 0);
});