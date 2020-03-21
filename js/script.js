$(document).ready(function () {

  $('.navbar-toggler').click(function () {
    $('.navbar-toggler').toggleClass('change')

  })



  // ripples
  $("#header, .info").ripples({
    dropRadius: 12,
    perturbance: 0.0000001,
  });

  //magnific popup

  $('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',

    gallery: {
      enabled: true
    }

  });

});