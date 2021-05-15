let navToggle   =   document.querySelector('.nav-toggle-btn');
let navContent  =   document.querySelector('.nav-content');

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