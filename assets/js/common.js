// // 헤더메뉴
// let lastScrollTop = 0,
//     delta = 15;

// $(window).scroll(function () {
//     let scrollTop = $(this)
//         .scrollTop()
//     if (Math.abs(lastScrollTop - scrollTop) <= delta)
//         return;

//     if ((scrollTop > lastScrollTop) && (lastScrollTop > 0)) {

//         $(".header_dark").css("top", "-86px");
//     } else {
//         $(".header_dark").css("top", "0");
//     }
//     lastScrollTop = scrollTop;
// });

// // 드롭다운메뉴
// $(".item").hover(function () {
//     $(this).find(".menu_sub_list").toggle()
// });

// // 이미지 슬라이더
// const swiper = new Swiper('.swiper-container', {
//     direction: 'horizontal',
//     loop: true,

//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true
//     },

//     autoplay: {
//         delay: 3000,
//         disableOnInteraction: true
//     },
// });

// // fadeIn
// $(window).scroll(function(){
//     const scrollTopp = $(window).scrollTop();
//     const featureH = $(".feature").outerHeight();
//     const bannerH = $(".news").outerHeight();

//     if (scrollTopp > featureH){
//         $(".special_feature li").addClass("show");
//     }
//     else {
//         $(".special_feature li").removeClass("show");
//     };


//     if (scrollTopp > bannerH*2){
//         $(".news .text_area").addClass("show");
//         $(".news_list li").addClass("show");
//     }else {
//         $(".news .text_area").removeClass("show");
//         $(".news_list li").removeClass("show");
//     }

// });

//Nav
const menuList = document.querySelectorAll('.menu_list > li');

for (let i = 0; i < menuList.length; i++) {
    menuList[i].addEventListener('mouseenter', function (e) {
        e.target.classList.add('on');
    });

    menuList[i].addEventListener('mouseleave', function (e) {
        e.target.classList.remove('on');
    });
}


//Header_menu scroll
const mainHeader = document.querySelector('.header_dark');
let beforePosition = document.documentElement.scrollTop;

window.addEventListener('scroll', function () {
    let afterPosition = document.documentElement.scrollTop;

    if (afterPosition > 180) {
        if (beforePosition < afterPosition) {
            mainHeader.style.top = -86 + 'px';
        } else {
            mainHeader.style.top = 0 + 'px';
            mainHeader.classList.add('up');
        }
    } else if (afterPosition == 0) {
        mainHeader.classList.remove('up');
    }
    beforePosition = afterPosition;
});


document.addEventListener('DOMContentLoaded', function () {

    // 변수 지정    
    let slideWrap = document.querySelector('.slide_wrap'),
        slideContainer = document.querySelector('.slide_container'),
        slides = document.querySelectorAll('.slide'),
        slideCount = slides.length,
        currentIndex = 0,
        timer = undefined,
        pagerBtn = document.querySelectorAll('.pager a');

    // 슬라이드 가로로 배열하기
    for (let i = 0; i < slideCount; i++) {
        slides[i].style.left = i * 100 + '%';
    }

    // 슬라이드 이동함수
    function goToSlide(idx) {
        slideContainer.classList.add('animate');
        slideContainer.style.left = -100 * idx + '%';
        currentIndex = idx;

        for(let y = 0; y < pagerBtn.length; y++){
            pagerBtn[y].classList.remove('on');
        }
        pagerBtn[idx].classList.add('on');

        for(let s = 0; s < slideCount; s++){
            slides[s].classList.remove('fade_in')
        }
        slides[idx].classList.add('fade_in')
    }

    goToSlide(0);

    //자동 슬라이드 함수
    function startAutoSlide (){
        
        timer = setInterval(function(){
            let nextIdx = (currentIndex + 1) % slideCount;
    
            goToSlide(nextIdx);
    
        },4000);
    }

    startAutoSlide();

    // 슬라이드 정지 함수
    function stopAutoSlide(){
        clearInterval(timer);
    }

    //slideWrap에 마우스가 들어오면 할일, 나가면 할일
    slideWrap.addEventListener('mouseenter',function(){
        stopAutoSlide();
    });

    slideWrap.addEventListener('mouseleave',function(){
        startAutoSlide();
    });

    //pager로 슬라이드 이동하기
    for(let a = 0; a < pagerBtn.length; a++){
        pagerBtn[a].addEventListener('click',function(e){

            let pagerNum = e.target.getAttribute('data-idx');
            goToSlide(pagerNum);

        });
    }
});