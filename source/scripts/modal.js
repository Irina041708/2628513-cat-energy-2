
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');


navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// const blockMap = document.querySelector('.location__link');
// const staticMap = document.querySelector('.location__link-static');
// const dynamicMap = document.querySelector('.location__link-dynamic');

// blockMap.classList.remove('location__link--nojs');
// blockMap.classList.add('location__link--js');

// if (blockMap.classList.contains('location__link--nojs')) {
//   blockMap.classList.remove(dynamicMap);
//   blockMap.classList.add(staticMap);
// } else {
//   blockMap.classList.add(dynamicMap);
//   blockMap.classList.remove(staticMap);
// }

