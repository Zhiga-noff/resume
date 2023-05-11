export function createFooter() {
  const wrapper = document.querySelector('.wrapper');
  wrapper.insertAdjacentHTML(
    'beforeend',
    `
  <footer class='footer footer_dark'>
  <nav class='footer__row'>
    <div class='footer__block-with-link'>
      <h3 class='footer__title'>01/ карта сайта</h3>
      <ul class='footer__list'>
        <li class='footer__link'><a href=''>Главная</a></li>
        <li class='footer__link'><a href=''>Портфолио</a></li>
        <li class='footer__link'><a href=''>Обо мне</a></li>
      </ul>
    </div>
    <div class='footer__block-with-link'>
      <h3 class='footer__title'>02/ Соц. сети</h3>
      <ul class='footer__list'>
        <li class='footer__link'><a href=''>HeadHunter</a></li>
        <li class='footer__link'><a href=''>Dribbble</a></li>
        <li class='footer__link'><a href=''>Behance</a></li>
        <li class='footer__link'><a href=''>Instagram</a></li>
      </ul>
    </div>
    <div class='footer__block-with-link'>
      <h3 class='footer__title'>03/ контакты</h3>
      <ul class='footer__list'>
        <li class='footer__link'><a href=''>Тел: +7 (916) 695 49-54</a></li>
        <li class='footer__link'><a href=''>E-mail: zhiganov_k.n@mail.ru</a></li>
      </ul>
    </div>
  </nav>
  <h2 class='footer__full-name coluna'>Кирилл Жиганов</h2>
</footer>
  `
  );
}
