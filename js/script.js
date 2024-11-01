$(document).ready(function(){
  $(".column-one").slice(0, 4).show();
  $("#view-more").on("click", function(e){
    e.preventDefault();
    $(".column-one:hidden").slice(0, 4).slideDown();
    if($(".column-one:hidden").length == 0) {
      $("#view-more").css('visibility', 'hidden');
    }
  });
  
})

// go to the top

var btn = $('#button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});


// fixed header

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 200) {
    $(".page-heading").addClass("fixed");
  }
  else {
    $(".page-heading").removeClass("fixed");
  }
})

// share btn

// $(".share-btn").on("click",function(){
//   $(".tip").toggleClass("open")
// })

$(".share-btn").on("click", function() {
  $(this).next(".tip").toggleClass("open");
});

$(".share-btn").on("click", function() {
  $(this).next(".tip-inner").toggleClass("open");
});



// add class

$(".navbar-toggler").on('click', function(){
  $('body').toggleClass("body-fixed");
})