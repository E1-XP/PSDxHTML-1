const mainNav = document.getElementById('main-nav');
const navList = document.getElementById('nav-list');
const navButton = document.getElementById('nav-btn');

const isNavOpen = () => mainNav.classList.contains('js-is-open');
const toggleScrollBlock = () =>
  document.body.parentElement.classList.toggle('h-block-page-scroll');
const enableTransition = () => navList.classList.remove('h-transition-none');
const disableTransition = () => {
  if (!isNavOpen()) navList.classList.add('h-transition-none');
};

const onNavClick = () => {
  mainNav.classList.toggle('js-is-open');
  if (isNavOpen()) enableTransition();
  navButton.setAttribute('aria-expanded', `${isNavOpen()}`);

  toggleScrollBlock();
};

navButton.addEventListener('click', onNavClick);
navList.addEventListener('transitionend', disableTransition);
