export function addAnimateInDOM() {
  const animItems = document.querySelectorAll('.animate');
  if (animItems.length > 0) {
    window.addEventListener('scroll', animateScroll, true);

    function animateScroll() {
      animItems.forEach((animItem) => {
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (
          pageYOffset > animItemOffset - animItemPoint &&
          pageYOffset < animItemOffset + animItemHeight
        ) {
          animItem.classList.add('active');
        } else {
          if (!animItem.classList.contains('no-anim-again')) {
            animItem.classList.remove('active');
          }
        }
      });
    }

    animateScroll();
  }

  function offset(el) {
    const rect = el.getBoundingClientRect();
    let scrollLeft = window.scrollY || document.documentElement.scrollLeft;
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
}

export function recolorHeaderAndBurger(logo, burger) {
  const animItems = document.querySelectorAll('.recolor-header');
  if (animItems.length > 0) {
    window.addEventListener('scroll', animateScroll, true);

    function animateScroll() {
      animItems.forEach((animItem) => {
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 1;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (
          pageYOffset > animItemOffset - animItemPoint &&
          pageYOffset < animItemOffset + animItemHeight
        ) {
          burger.classList.add('white-burger');
          logo.classList.add('white-header');
        } else {

            burger.classList.remove('white-burger');
            logo.classList.remove('white-header');

        }
      });
    }

    animateScroll();
  }

  function offset(el) {
    const rect = el.getBoundingClientRect();
    let scrollLeft = window.scrollY || document.documentElement.scrollLeft;
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
}
