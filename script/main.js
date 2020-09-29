const btnBurger = document.querySelector('.btn-burger');
const catalog = document.querySelector('.catalog');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.btn-close');
console.log(btnClose);
const openMenu = function () {
  catalog.classList.add('open');
  overlay.classList.add('active');
};
const closeMenu = function () {
  catalog.classList.remove('open');
  overlay.classList.remove('active');
};
btnBurger.addEventListener('click', openMenu);
btnClose.addEventListener('click,', closeMenu);
overlay.addEventListener('click,', closeMenu);
