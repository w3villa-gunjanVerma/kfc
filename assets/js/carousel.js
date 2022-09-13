
$(document).ready(function () {
// Hero section

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots:3,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
$('.hero-owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
//food list
$('.menu-owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots:false,

    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 3
        },
        1000: {
            items: 7
        }
    }
});
//feedback
$('.feedback-owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});
});


