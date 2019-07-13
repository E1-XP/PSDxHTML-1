const mainNav = document.getElementById('main-nav');
const navList = document.getElementById('nav-list');
const navButton = document.getElementById('nav-btn');

const isNavOpen = () => mainNav.classList.contains('js-is-open');
const blockScroll = () => window.scrollTo(0, 0);
const enableTransition = () => navList.classList.remove('js-transition-none');
const disableTransition = () => {
  if (!isNavOpen()) navList.classList.add('js-transition-none');
};

const onNavClick = () => {
  mainNav.classList.toggle('js-is-open');
  if (isNavOpen()) enableTransition();

  const methods = ['removeEventListener', 'addEventListener'];
  window[methods[+isNavOpen()]]('scroll', blockScroll);
};

navButton.addEventListener('click', onNavClick);
navList.addEventListener('transitionend', disableTransition);
