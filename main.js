$(document).ready(function () {
    $('.menu-toggler') .on("click", function() {
      $(this).toggleClass("open");
      $(".top-nav").toggleClass("open");
});

$('.top-nav .nav-link') .on("click", function() {
  $('.menu-toggler').removeClass("open");
  $(".top-nav").removeClass("open");

});

$('nav a[href*="#"]') .on("click", function() {
  $('html, body').animate( {
    scrollTop: $($(this).attr('href')).offset().top - 100
  }, 2000);
 
});

$('#up') .on("click", function() {
  $('html, body').animate( {
    scrollTop: 0
  }, 2000);
});

$('#contact').submit(function(e) {
  var name =document.getElementById('inputName'),
  email =document.getElementById('inputEmail'),
  message =document.getElementById('inputMessage');

  if (!name.value || !email.value  || !message.value){
    alertify.error ('Please check your entries')
  }  else{

    $.ajax ({
        url: 'https://formspree.io/stathis.nik5@gmail.com',
        method: 'POST',
        data: $(this).serialize(),
        datatype: 'json'
    });
    e.preventDefault()
    $(this).get(0).reset()
    alertify.success('Message sent')
  }
})

AOS.init({
easing: 'ease',
duration: 1800,
once: true

});

});

