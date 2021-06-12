// Nav Menu
const menuList = document.querySelectorAll('.menu_list > li');

for (let i = 0, max = menuList.length; i < max; i++) {
  menuList[i].addEventListener('mouseenter', function (e) {
    e.target.classList.add('on');
  });

  menuList[i].addEventListener('mouseleave', function (e) {
    e.target.classList.remove('on');
  });
}

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

  // for (let i = 0; i < fadeInList.length; i++) {

  //     let elem = fadeInList[i];
  //     let distinView = elem.getBoundingClientRect().top - window.innerHeight + 20;

  //     if (distinView < 0) {
  //         elem.classList.add('fade_in');
  //     } else {
  //         elem.classList.remove('fade_in');
  //     }
  // }
};

// Slider
document.addEventListener("DOMContentLoaded", function () {

  // 변수 지정
  const slideWrap = document.querySelector(".img_area"),
    slideContainer = document.querySelector(".info_list"),
    slides = document.querySelectorAll(".info_list li"),
    pagerBtn = document.querySelectorAll(".paginate a");

  let slideCount = slides.length,
    currentIndex = 0,
    timer = null;

  let slideWidth = slides[0].clientWidth;

  // 슬라이드 가로로 배열하기
  for (let i = 0; i < slideCount; i++) {
    slides[i].style.left = i * 0 + "px";
  }

  // 슬라이드 이동함수
  function goToSlide(idx) {
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