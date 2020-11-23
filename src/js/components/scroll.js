// Smooth scroll
(function(){

    let nav = $("#nav");
    let navLink = $(".nav__link");
    let header = $("#header");
    //console.log(header.outerHeight()); // 50

    $("[data-scroll]").on("click",function(event) {
        event.preventDefault();

        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("nav--show");
        navLink.removeClass("nav__link--active");
        $(this).addClass("nav__link--active");


        $("html, body").animate({
            scrollTop: elementOffset - 55
        }, 700);
    });

}());


