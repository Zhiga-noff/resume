export function isWebp() {
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector('body').classList.add('webp');
    } else {
      document.querySelector('body').classList.add('no-webp');
    }
  });
}

export function recolorBurger(logo, burger) {
  const midnightWhite = logo.querySelector('.white')
  let current = midnightWhite.style.transform
  current = current.replaceAll('translateY(','')
  current = current.replaceAll('%) translateZ(0px)','')
  if (current <=80 && current>= -14) {
    burger.classList.add('white-burger')
  } else {
    burger.classList.remove('white-burger')
  }
}
