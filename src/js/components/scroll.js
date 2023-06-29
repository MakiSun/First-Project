let headerLinks = document.querySelectorAll('.header__link[data-goto]');

if (headerLinks.length > 0) {
  headerLinks.forEach(headerLink => {
    headerLink.addEventListener('click', onHeaderLinkClick);
  });

  function onHeaderLinkClick(e) {
    e.preventDefault();

    const headerLink = e.target;
    if (headerLink.dataset.goto && document.querySelector(headerLink.dataset.goto)) {
      const gotoBlock = document.querySelector(headerLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - document.querySelector('header').offsetHeight;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth'
      });
    }
  }
}
