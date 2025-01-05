// Burger Menu

const burgerBtn = document.querySelector('#burger')
const header = document.querySelector('.header')
const body = document.querySelector('body')

burgerBtn.addEventListener('click', () => {
	header.classList.toggle('active')
  body.classList.toggle('overflow')
})



// Accordions

const accordions = document.querySelectorAll('.accordions__btn');

for (let accord of accordions) {
  accord.addEventListener('click', function () {
    this.classList.toggle('active');

    let text = this.nextElementSibling;

    if (text.style.maxHeight) {
      text.style.maxHeight = null; // Сворачивание
    } else {
      closeAccording(accordions, this);
      text.style.maxHeight = text.scrollHeight + 'px'; // Раскрытие
    }
  });
}

function closeAccording(accordions, current) {
  for (let accord of accordions) {
    if (accord !== current && accord.classList.contains('active')) {
      accord.classList.remove('active');
      accord.nextElementSibling.style.maxHeight = null; // Сворачивание других блоков
    }
  }
}

