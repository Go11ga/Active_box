// Nav toggle
(function(){

    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on("click",function() {

        nav.toggleClass("nav--show");

    });

}());

