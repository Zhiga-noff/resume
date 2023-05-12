export function createHeader() {
  const wrapper = document.querySelector('.wrapper');
  wrapper.insertAdjacentHTML(
    'afterbegin',
    `
  <header class='header' id='header'>
  <div class='header__row'>
    <div class='header__logo logo coluna'>
      <a href='index.html'
        >КЖ
        <!-- <span class="logo__item">И</span>
                           <span class="logo__item">Р</span>
                           <span class="logo__item">И</span>
                           <span class="logo__item">Л</span>
                           <span class="logo__item">Л</span> -->
        <!-- <span class="logo__item">И</span>
                           <span class="logo__item">Г</span>
                           <span class="logo__item">А</span>
                           <span class="logo__item">Н</span>
                           <span class="logo__item">О</span>
                           <span class="logo__item">В</span> -->
      </a>
    </div>
    <div class='header__menu header__menu_left'>
      <p class='header__wisw'>Надеюсь, у тебя отличный день ;)</p>
      <div class='header__info-about-page'>
        <p class='header__number-page'>01/</p>
        <p class='header__text-info'>Главная страница моего портфолио</p>
      </div>
    </div>
    <div class='header__menu header__menu_right'>
      <div class='header__my-name'>
        <p class=''>Кирилл Жиганов - Портфолио</p>
      </div>
      <ul class='header__menu-list'>
        <li>
          <a href='#' class='header__link active' id="main-item">
            <p class='header__number-page header__number-page_visible'>01/</p>
            <p class='header__link-page'>Главная</p>
          </a>
        </li>
        <li>
          <a href='#' class='header__link' id="portfolio-item">
            <p class='header__number-page header__number-page_visible'>02/</p>
            <p class='header__link-page'>Портфолио</p>
          </a>
        </li>
        <li>
          <a href='#' class='header__link' id="about-item">
            <p class='header__number-page header__number-page_visible'>03/</p>
            <p class='header__link-page'>Обо мне</p>
          </a>
        </li>
        <li>
          <a href='#' class='header__link' id="contacts-item">
            <p class='header__number-page header__number-page_visible'>04/</p>
            <p class='header__link-page'>Контакты</p>
          </a>
        </li>
      </ul>
    </div>
    <div class='header__burger'></div>
  </div>
</header>

  `
  );
}
