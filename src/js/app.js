import * as flsFunction from './modules/functions';
import { buttonHoverAnimation } from './modules/buttonMove';
import { addAnimateInDOM } from './modules/animateElements';
import { midnight } from './modules/midnight';

// Подключение стилей
import '../scss/style.scss';

// Подключение шапки
import { createHeader } from './util/createHeader';

//Подключение футтера
import { createFooter } from './util/createFooter';

flsFunction.isWebp();
buttonHoverAnimation();
addAnimateInDOM();
midnight();

createHeader();
createFooter();

// Start midnight
$(document).ready(function () {
  // Change this to the correct selector.
  $('header').midnight();
});

const burger = document.querySelector('.header__burger');
const menu = document.querySelectorAll('.header__menu');
const logo = document.querySelector('.logo');
const bodyElement = document.body;

// Самостоятельная функция для бургер меню
burger.addEventListener('click', (event) => {
  menu.forEach((element) => element.classList.toggle('active'));
  logo.classList.toggle('hidden');
  bodyElement.classList.toggle('lock');
  burger.classList.toggle('active');
});
