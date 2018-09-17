$(function() {

    'use strict';


    /******************************************************************/
    //MENU TOGGLE
    /******************************************************************/

    const $headerNavButton = $('.header__nav-button'),
        $nav = $('.nav');

    $headerNavButton.click(function() {
        $(this).toggleClass('active');
        $nav.fadeToggle(300);
    });

    //Выключение при клике по ссылке
    $nav.on('click', 'a', function() {
        $headerNavButton.removeClass('active');
        $nav.fadeOut(300);
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800, 'swing');
    });

    /******************************************************************/
    //SCROLL
    /******************************************************************/

    $('.scroll').on('click', function(e) {
        e.preventDefault();

    });


    /******************************************************************/
    //ABOUT SLIDER
    /******************************************************************/

    $('.about').addClass('owl-carousel').owlCarousel({
        loop: false,
        nav: true,
        navText: '',
        items: 1,
        smartSpeed: 1000,
        autoplay: false
    });


    /******************************************************************/
    //JURY
    /******************************************************************/

    const $juryBox = $('.jury__box'),
        $juryItem = $('.jury__item');
    let heightBox = $juryBox.height(),
        heightItem = $juryItem.height();

    $juryBox.addClass('close').css({
        'max-height': heightItem
    });

    $(window).resize(function() {
        heightItem = $juryItem.height();
        $juryBox.removeAttr('style');
        heightBox = $juryBox.height();

        $juryBox.css({
            'max-height': $juryBox.hasClass('close') ? heightItem : heightBox
        });
    });

    $('.jury-button-show').click(function() {
        if ($juryBox.hasClass('close')) {
            $(this).text('Скрыть список');
            $juryBox.animate({
                'max-height': heightBox
            },  heightBox * 0.1 + 600).removeClass('close');
        } else {
            $(this).text('Полный список');
            $juryBox.animate({
                'max-height': heightItem
            }, heightBox * 0.1 + 600).addClass('close');
            $('html, body').animate({scrollTop: $juryBox.offset().top }, heightBox * 0.1 + 600, 'swing');
        }
    });

});
