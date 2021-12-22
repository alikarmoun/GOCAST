// Header fixed scroll
$(window).scroll(function(){
    if ($(window).scrollTop() >= 60) {
        $('#head').addClass('scrollbarre');
    }else {
        $('#head').removeClass('scrollbarre');
    }
});

function resize() {
    if ($(window).width() <= 768) {
        $('#head').removeClass('container');
    } else {
        $('#head').addClass('container');
    }
}

$(document).ready(function () {
    $(window).resize(resize);
    resize();
});

// Menu burger
var menu = document.querySelector('.hamburger');
            
function toggleMenu (event) {
    this.classList.toggle('is-active');
    document.querySelector(".menuppal").classList.toggle("is_active");
    event.preventDefault();
}
            
menu.addEventListener('click', toggleMenu, false);

// Slick
$('.center').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    responsive: [
        {
        breakpoint: 768,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
        }
        },
        {
        breakpoint: 480,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1,
            dots: true
        }
        }
    ]
});