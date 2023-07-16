const changeTextElements = document.querySelectorAll('.change-text');

changeTextElements.forEach(element => {
    const words = element.innerText.split(' ');
    element.innerHTML = words.map(word => `<span>${word}</span>`).join(' ');
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  // Проверяем, находится ли верхняя грань элемента выше центра окна (половина блока видна)
  return rect.top <= windowHeight - 200;
  }

  function handleScroll() {
    const elements = document.querySelectorAll('.appear-on-scroll');
    elements.forEach(element => {
      if (isElementInViewport(element)) {
        element.classList.add('appeared');
      }
    });
  }
  window.addEventListener('scroll', handleScroll);
  handleScroll();