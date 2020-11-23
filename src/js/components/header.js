// Fixed Header
(function(){

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos,introH);

    $(window).on("scroll load resize", function(){
        scrollPos = $(this).scrollTop();
        checkScroll(scrollPos,introH);
    });

    function checkScroll(scrollPos,introH) {
        if( scrollPos > introH){
            header.addClass("header--fixed");
        }else{
            header.removeClass("header--fixed");
        }
    }

}());
