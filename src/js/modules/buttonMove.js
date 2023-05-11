export function buttonHoverAnimation() {
  // Получаю блок в котором находят нужные кнопки
  const blockSelector = document.querySelectorAll('.template-block__row');
  blockSelector.forEach((item) => {
    // Получаю кнопку внутри блока
    const buttonSelector = item.querySelector('.button-move');

    // Функция для mousemove
    function mousemoveFn(event) {
      // Получаю координату X и Y для левого верхнего края кнопки
      const buttonPosX = event.currentTarget.getBoundingClientRect().left;
      const buttonPosY = event.currentTarget.getBoundingClientRect().top;

      // Получаю положение мыши внутри элемента от левого верхнего края
      // (текущая позиция мыши по оси X и Y - координата кнопки по оси x)
      const xPosOfMouse = event.clientX - buttonPosX;
      const yPosOfMouse = event.clientY - buttonPosY;

      // Получить положение мыши относительно центра кнопки
      // Позиция мыши внутри элемента - ширина кнопки / 2
      // Чтобы получить положительное или отрицательное движение
      const xPosOfMouseInsideButton = xPosOfMouse - item.offsetWidth / 1.8;

      const yPosOfMouseInsideButton = yPosOfMouse - item.offsetHeight;

      // Разделитель текста кнопки для увеличения или уменьшения пути текста
      // в моем случае методом подбора подобрал центр кнопки
      const animationDivider = 1.2;

      // Анимация текста кнопки в положительном или отрицательном направлении от центра
      TweenMax.to(buttonSelector, 2, {
        x: xPosOfMouseInsideButton / animationDivider,
        y: yPosOfMouseInsideButton / animationDivider,
        ease: Power3.easeOut
      });
    }

    // функция для mouseleave
    function mouseleaveFn() {
      // сбрасывается анимации кнопки в исходное положение (в центре)
      TweenMax.to(buttonSelector, 1, {
        x: 0,
        ease: Power3.easeOut
      });
    }

    item.addEventListener('mousemove', mousemoveFn);

    item.addEventListener('mouseleave', mouseleaveFn);
  });
}
