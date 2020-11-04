const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}
$(document).ready(function () {
    $nav = $('.nav');
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: true,
        responsive: responsive
    });


    // click to scroll top
    $('.move-up span').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 3000)
    });

    //animation on scroll
    AOS.init();

});

