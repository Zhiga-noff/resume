import { pageMenu } from '../util/page-info-arr';

export function renameDescription() {
  // const headerLinks = document.querySelectorAll('.header__link');
  const menuList = document.querySelector('.header__menu-list');
  const infoPage = document.querySelector('.header__info-about-page');

  menuList.addEventListener('mouseover', (event) => {
    listener(event, pageMenu, infoPage);
  });

  menuList.addEventListener('mouseout', () => {
    infoPage.textContent = '';
    infoPage.insertAdjacentHTML(
      'beforeend',
      `
    
    <p class='header__number-page'>01/</p>
        <p class='header__text-info'>Главная страница моего портфолио</p>`
    );
  });
}

function listener(event, array, info) {
  const { target } = event;
  const parent = target.closest('.header__link');

  if (!parent) {
    return;
  }
  array.forEach((element) => {
    if (parent.id === element.id) {
      info.textContent = '';
      info.insertAdjacentHTML(
        'beforeend',
        `
        <p class='header__number-page'>${element.number}</p>
        <p class='header__text-info'>${element.textInfo}</p>
        `
      );
    }
  });
}
