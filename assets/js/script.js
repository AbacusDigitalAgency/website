var swiper = new Swiper(".workSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".testiSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
$('.mobilemenu').click(function (e) {
    e.preventDefault();
    $('.mobilebox').show('fast');
});

$('.cross_icon').click(function (e) {
    e.preventDefault();
    $('.mobilebox').hide('fast');
});

$('.tab-btn').click(function (e) {
    e.preventDefault();
    var dropdownContainer = $(this).next('.mobile-submenu');
    var isRotated = $(this).attr('style') === 'transform: rotate(180deg);';
    if (isRotated) {
        $(this).removeAttr('style');
    } else {
        $(this).attr('style', 'transform: rotate(180deg);');
    }
    if (dropdownContainer.is(':visible')) {
        dropdownContainer.slideUp('fast');
    } else {
        dropdownContainer.slideDown('fast');
    }
});