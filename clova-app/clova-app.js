// Nav Menu
const menuList = document.querySelectorAll('.menu_list > li');

menuList.forEach(menu => {
  menu.addEventListener('mouseenter', function (e) {
    e.target.classList.add('on');
  });

  menu.addEventListener('mouseleave', function (e) {
    e.target.classList.remove('on');
  });
})

//Scroll Event
const mainHeader = document.querySelector('.header_dark');

let beforePosition = document.documentElement.scrollTop;

window.addEventListener('scroll', fadeIn);

function fadeIn() {

  let afterPosition = document.documentElement.scrollTop;

  if (afterPosition > 180) {
    if (beforePosition < afterPosition) {
      mainHeader.style.top = -86 + 'px';
    } else {
      mainHeader.style.top = 0 + 'px';
      mainHeader.classList.add('up');
      mainHeader.style.backgroundColor = '#000';
    }
  } else if (afterPosition == 0) {
    mainHeader.classList.remove('up');
    mainHeader.style.backgroundColor = '';
  };

  beforePosition = afterPosition;
};

// Slider
document.addEventListener("DOMContentLoaded", function () {

  // 변수 지정
  const slideWrap = document.querySelector(".img_area");
  const slideContainer = document.querySelector(".info_list");
  const slides = document.querySelectorAll(".info_list li");
  const pagerBtn = document.querySelectorAll(".paginate a");

  let slideCount = slides.length;
  let currentIndex = 0;
  let timer = null;

  let slideWidth = slides[0].clientWidth;


  // 슬라이드 가로로 배열하기
  for (let i = 0; i < slideCount; i++) {
    slides[i].style.left = i * 0 + "px";
  }

  // 슬라이드 이동함수
  const goToSlide = (idx) => {
    slideContainer.classList.add("animate");
    slideContainer.style.left = -slideWidth * idx + "px";
    currentIndex = idx;

    for (let y = 0; y < pagerBtn.length; y++) {
      pagerBtn[y].classList.remove("on");
    }
    pagerBtn[idx].classList.add("on");

    for (let s = 0; s < slideCount; s++) {
      slides[s].classList.remove("fade_in");
    }
    slides[idx].classList.add("fade_in");
  }

  goToSlide(0);

  // desc_list 제어 함수
  const $swiperDesc = document.querySelectorAll('.desc_list .desc');
  const descHandler = (a, b) => {

    if (pagerBtn[a].classList.contains('on')) {
      $swiperDesc[a].style.display = 'block'
      $swiperDesc[b].style.display = 'none'
    } else {
      $swiperDesc[a].style.display = 'none'
      $swiperDesc[b].style.display = 'block'
    }

  }

  //자동 슬라이드 함수
  function startAutoSlide() {
    timer = setInterval(function () {
      let nextIdx = (currentIndex + 1) % slideCount;

      goToSlide(nextIdx);
      descHandler(0, 1);
    }, 4500);
  }
  startAutoSlide();

  //pager로 슬라이드 이동하기
  for (let a = 0, max = pagerBtn.length; a < max; a++) {
    pagerBtn[a].addEventListener("click", function (e) {
      e.preventDefault();
      let pagerNum = e.target.getAttribute("data-idx");
      goToSlide(pagerNum);
    });
  }

});

const ul = document.querySelector(".card_list ul");
const width = document.querySelector(".card_item").offsetWidth;
const totalWidth = width * 7;

ul.style.width = totalWidth + "px"; // 이미지 크기만큼 width 증가

const moveLeftAntimation = ul.animate([
  { transform: 'translateX(0px)' }, 
  { transform: 'translateX(0px)', offset: 0.95}, 
  { transform: `translateX(-456px)` }
], { 
  duration: 3500,
}); 


moveLeftAntimation.onfinish = function() {
  const removeItem = ul.removeChild(ul.firstElementChild);
  ul.appendChild(removeItem); 
  moveLeftAntimation.play();  
}





