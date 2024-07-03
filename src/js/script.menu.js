const hamburger = document.querySelector('.header__hamburger');
const navigation = document.querySelector('.header__content');
const overlay = document.querySelector('.header__background');

if (hamburger) {
  hamburger.addEventListener('click', (even) => {
    document.body.classList.toggle('body__no-scroll');
    hamburger.classList.toggle('header__hamburger-active');
    navigation.classList.toggle('header__content-active');
    overlay.classList.toggle('header__background-active');
  });
}

const navigationItems = document.querySelectorAll('.navigation__link');

if (navigationItems) {
  navigationItems.forEach(navigationItems => {
    navigationItems.addEventListener('click', (even) => {
      document.body.classList.remove('body__no-scroll');
      hamburger.classList.remove('header__hamburger-active');
      navigation.classList.remove('header__content-active');
      overlay.classList.remove('header__background-active');
    });
  });
}

if (overlay) {
  overlay.addEventListener('click', (even) => {
    document.body.classList.remove('body__no-scroll');
    hamburger.classList.remove('header__hamburger-active');
    navigation.classList.remove('header__content-active');
    overlay.classList.remove('header__background-active');
  });
}
