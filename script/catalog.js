export const catalog = () => {
  const btnBurger = document.querySelector('.btn-burger');
  const catalog = document.querySelector('.catalog');
  const btnClose = document.querySelector('.btn-close');
  const btnReturn = document.querySelector('.btn-return');
  const subCatalog = document.querySelector('.subcatalog');
  const subCatalogHeader = document.querySelector('.subcatalog-header');
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.append(overlay);
  const openMenu = function () {
    catalog.classList.add('open');
    overlay.classList.add('active');
  };
  const closeMenu = function () {
    catalog.classList.remove('open');
    overlay.classList.remove('active');
    closeSubMenu();
    document.removeEventListener('keydown', onEscBtn);
  };
  const openSubMenu = event => {
    event.preventDefault();
    const target = event.target;
    const itemList = event.target.closest('.catalog-list__item');
    if (itemList) {
      subCatalogHeader.innerHTML = itemList.innerHTML;
      subCatalogHeader.href = target.href;
      subCatalog.classList.add('subopen');
    }
  };
  const closeSubMenu = () => {
    subCatalog.classList.remove('subopen');
  };
  const onEscBtn = function (event) {
    if (event.code === 'Escape') {
      closeMenu();
    }
  };
  btnBurger.addEventListener('click', openMenu);
  btnClose.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
  btnReturn.addEventListener('click', closeSubMenu);
  document.addEventListener('keydown', onEscBtn);
  catalog.addEventListener('click', openSubMenu);
};
