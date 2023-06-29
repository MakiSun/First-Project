const burgerMenu = document.querySelector('.burger__menu');
const headerNav = document.querySelector('.header__nav');

burgerMenu.addEventListener('click', () => {

  burgerMenu.classList.toggle('active');
  headerNav.classList.toggle('active');
});
