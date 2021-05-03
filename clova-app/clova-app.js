// Nav Menu
const menuList = document.querySelectorAll('.menu_list > li');

for (let i = 0; i < menuList.length; i++) {
    menuList[i].addEventListener('mouseenter', function (e) {
        e.target.classList.add('on');
    });

    menuList[i].addEventListener('mouseleave', function (e) {
        e.target.classList.remove('on');
    });
}

//Scroll Event
const mainHeader = document.querySelector('.header_dark');
const secMainList = document.querySelector('.section_main');
const infoList = document.querySelector('.section_info');
const fadeInList = [secMainList, infoList];

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
        }
    } else if (afterPosition == 0) {
        mainHeader.classList.remove('up');
    };

    beforePosition = afterPosition;

    for (let i = 0; i < fadeInList.length; i++) {

        let elem = fadeInList[i];
        let distinView = elem.getBoundingClientRect().top - window.innerHeight + 20;

        if (distinView < 0) {
            elem.classList.add('fade_in');
        } else {
            elem.classList.remove('fade_in');
        }
    }
};