const myFullpage = new fullpage("#fullpage", {
  //hey
  autoScrolling: false,
  navigation: true,
  navigationPosition: "right",
  // navigationTooltips: ['First page', 'Second page', 'Third and last page'],
  anchors: ["firstPage", "secondPage", "3rdPage"],
  showActiveTooltip: true,
});


const config = {
  type: "carousel",
  time: 1,
  autoplay: 4500,
  gap: 40,
  perView: 4,
  breakpoints: {
    1555: {
      perView: 3,
    },
    768: {
      perView: 2,
    },
    576: {
      perView: 2,
    },
    380: {
      perView: 1,
    },
  },
};
new Glide(".glide", config).mount();

$window = $(window);
$(document).ready(function () {
  $(".navbar-light .navbar-toggler-icon").addClass("active");
  $(".navbar-toggler").addClass("active");
});

$(function () {
  $(document).scroll(function () {
    var $nav = $("#mainNav");
    // var $navText = $(".nav-link");
    $nav.toggleClass("scrolled", $(this).scrollTop() > 35);
  });
});

$(window).scroll(function () {
  if ($window.scrollTop() > 35) {
    $("#mainNav .nav-link").addClass("active");
    $("#mainNav .navbar-brand").addClass("active");
    $("#mainNav .navbar-brand").addClass("active");
    $(".navbar-light .navbar-toggler-icon").removeClass("active");
    $(".navbar-toggler").removeClass("active");
    $("#mainNav .nav-profile").addClass("active");
  } else {
    $("#mainNav .nav-link").removeClass("active");
    $("#mainNav .navbar-brand").removeClass("active");
    $("#mainNav .navbar-brand").removeClass("active");
    $(".navbar-light .navbar-toggler-icon").addClass("active");
    $(".navbar-toggler").addClass("active");
    $("#mainNav .nav-profile").removeClass("active");
  }
});
