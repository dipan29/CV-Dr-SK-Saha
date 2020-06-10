$(document).ready(function () {
    $(".overlayer").delay(1000).fadeOut(2000);
    $(".loading").delay(1000).fadeOut(2000);

    $(".menu-icon").on("click", function () {
        $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    }
    else {
        $('nav').removeClass('black');
    }
})

