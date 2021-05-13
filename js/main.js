let navToggle   =   document.querySelector('.nav-toggle-btn');
let navContent  =   document.querySelector('.nav-content');
// let header      =   document.querySelector('header');
// let navLinks    =   document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
   
    if (navContent.classList.contains('show-nav-content')) {
        navContent.classList.add('hide-nav-content');
        navContent.classList.remove('show-nav-content');
        navToggle.firstElementChild.src = 'images/icon-hamburger.svg';
    } else {
        navContent.classList.add('show-nav-content');
        navContent.classList.remove('hide-nav-content');
        navToggle.firstElementChild.src = 'images/icon-close.svg';
    }

});

// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         navLinks.forEach(link => link.classList.remove('active'));
//         link.classList.add('active');
//     });
// });


// function scrollToView(element, elemToScroll) {
//     let scrollElem = document.querySelector(elemToScroll);
//     let scrollCtrls = document.querySelector(element);

//     scrollCtrls.addEventListener('click', () => {
//         scrollElem.scrollIntoView();
//         navContent.classList.remove('nav-content-show');
//         navToggle.classList.remove('nav-toggle-close');
//     });
// }

// scrollToView('.to-home', 'body');
// scrollToView('.to-features', '#features');
// scrollToView('.to-team', '#teams');
// scrollToView('.to-sign-in', '#email');