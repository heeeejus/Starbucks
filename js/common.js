const searchEl = document.querySelector('.search');
const searchinputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function (){
  searchinputEl.focus();
});

searchinputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchinputEl.setAttribute('placeholder', '통합검색');
});

searchinputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchinputEl.setAttribute('placeholder', '');
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //년도 반환