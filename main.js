/*
const menuBtn = document.querySelector('.menu-toggler');
const topNav = document.querySelector('.top-nav');
const up =  document.querySelector('.up');
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
topNav.addEventListener('click', toggleMenu);
up.addEventListener('click', upp);


function toggleMenu() {
    if(!showMenu)
    {
        menuBtn.classList.add('open');
        topNav.classList.add('open');
        showMenu = true;
    }
    else
    {
        menuBtn.classList.remove('open');
        topNav.classList.remove('open');
        showMenu = false;
    }
}
*/
$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
       $(this).toggleClass('open');
       $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click' ,function () {
        $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top -100 }, 2000);
    });

    $('.up').on('click' ,function () {
        $('html, body').animate({scrollTop: 0}, 2000)

    })

    AOS.init({
       easing: 'ease',
       duration : 1800,
        once : true
    });
});


