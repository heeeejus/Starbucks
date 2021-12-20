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

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY); //과부화 방지 _.throttle(함수, 시간)
  if(window.scrollY >500){
    //배지 숨기기
    // badgeEl.style.display = 'none' ;
    // gsap.to(요소,지속시간,옵션);
    gsap.to(badgeEl, .6, { //애니메이션 처리
      opacity: 0,
      display: 'none'
    });
    //버튼 보이기!
    gsap.to(toTopEl, .2, {
      x:0
    });
  }else {
    //배지 보이기
    // badgeEl.style.display = 'block' ;
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기
    gsap.to(toTopEl, .2, {
      x:100
    });
  }
}, 300));

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

// 컵, 텍스트 순차 등장
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) { //반복적으로 처리 fade-in 개수만큼 실행
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, //index는 0부터 시작해서 +1 해줘서 순차적으로 딜레이가 발생할 수 있도록 
    opacity: 1
  });
});


new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  //direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides : true,
  loop: true,
  // autoplay: {
  //   delay: 5000
  // },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl : '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper-container', {
  autoplay: true, 
  loop: true, 
  spaceBetween: 30, 
  slidesPerView: 5,
  navigation: { 
    prevEl: '.awards .swiper-prev', 
    nextEl: '.awards .swiper-next' 
  }
});

//프로모션 숨김 처리
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion){
    //숨김처리
    promotionEl.classList.add('hide');
  }else {
    //보임처리
    promotionEl.classList.remove('hide');
  }
});

//영상위에 떠있는 이미지
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), { // 선택자, 애니메이션 동작시간, 옵션
    y: size,
    repeat: -1, //무한반복
    yoyo : true, //다시 원상복귀
    ease: Power1.easeInOut, //자연스럽게 움직임
    delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //년도 반환