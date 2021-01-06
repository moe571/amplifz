  $(document).ready(function() {
    $('.carousel').carousel({
      interval: 4500
    })
  });


    $(document).ready(function() {
        $(".main-slider-container").basicSlider();
    });





$("#services-btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#services").offset().top -140},
        'slow');
    $('#services-btn').addClass("selected");
    $('#portfolio-btn').removeClass("selected");
    $('#contact-btn').removeClass("selected");
});

$("#portfolio-btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#portfolio").offset().top -60},
        'slow');
    $('#portfolio-btn').addClass("selected");
    $('#services-btn').removeClass("selected");
    $('#contact-btn').removeClass("selected");
});

$("#contact-btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact").offset().top -100},
        'slow');
    $('#contact-btn').addClass("selected");
    $('#services-btn').removeClass("selected");
    $('#portfolio-btn').removeClass("selected");
});