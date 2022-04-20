(function ($) {
  "use strict";

  // Preloader
  function stylePreloader() {
    $("body").addClass("preloader-deactive");
  }

  // Background Image
  const bgSelector = $("[data-bg-img]");
  bgSelector.each(function (index, elem) {
    let element = $(elem),
      bgSource = element.data("bg-img");
    element.css("background-image", "url(" + bgSource + ")");
  });

  // Margin Bottom
  $("[data-margin-bottom]").each(function () {
    $(this).css("margin-bottom", $(this).data("margin-bottom"));
  });
  // Padding Top
  $("[data-padding-top]").each(function () {
    $(this).css("padding-top", $(this).data("padding-top"));
  });
  // Padding Bottom
  $("[data-padding-bottom]").each(function () {
    $(this).css("padding-bottom", $(this).data("padding-bottom"));
  });

  // Off Canvas JS
  var canvasWrapper = $(".off-canvas-wrapper");
  $(".btn-menu").on("click", function () {
    canvasWrapper.addClass("active");
    $("body").addClass("fix");
  });

  $(".close-action > .btn-menu-close, .off-canvas-overlay").on(
    "click",
    function () {
      canvasWrapper.removeClass("active");
      $("body").removeClass("fix");
    }
  );

  // Sticky Header Js
  var headroom = $(".sticky-header");
  headroom.headroom({
    offset: 280,
    tolerance: 5,
    classes: {
      initial: "headroom",
      pinned: "slideDown",
      unpinned: "slideUp",
      notTop: "sticky",
    },
  });

  //Responsive Slicknav JS
  $(".main-menu").slicknav({
    appendTo: ".res-mobile-menu",
    closeOnClick: false,
    removeClasses: true,
    closedSymbol: '<i class="icofont-plus"></i>',
    openedSymbol: '<i class="icofont-minus"></i>',
  });

  // Menu Activeion Js
  var cururl = window.location.pathname;
  var curpage = cururl.substr(cururl.lastIndexOf("/") + 1);
  var hash = window.location.hash.substr(1);
  if ((curpage == "" || curpage == "/" || curpage == "admin") && hash == "") {
  } else {
    $(".header-navigation-area li").each(function () {
      $(this).removeClass("active");
    });
    if (hash != "")
      $(".header-navigation-area li a[href*='" + hash + "']")
        .parents("li")
        .addClass("active");
    else
      $(".header-navigation-area li a[href*='" + curpage + "']")
        .parents("li")
        .addClass("active");
  }

  // Swiper Slider Js
  var carouselSlider = new Swiper(".default-slider-container", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    speed: 500,
    spaceBetween: 0,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: ".swiper-pagination-t01",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + "</span>";
      },
    },
  });
  $(".default-slider-container").hover(
    function () {
      this.swiper.autoplay.stop();
    },
    function () {
      this.swiper.autoplay.start();
    }
  );

  // Service Slider Js
  var swiper = new Swiper(".service-slider-container", {
    autoplay: false,
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 35,
    speed: 500,
    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 77,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 35,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 35,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },
  });

  // Team Slider Js
  var swiper = new Swiper(".team-slider-container", {
    autoplay: false,
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 53,
    speed: 500,
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 53,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 25,
      },
    },
  });

  // Team Slider Js
  var swiper = new Swiper(".testimonial-slider-container", {
    autoplay: false,
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 90,
    speed: 500,
    scrollbar: {
      el: ".testimonial-slider-container .testi-swiper-scrollbar",
      hide: false,
    },
    breakpoints: {
      1200: {
        slidesPerView: 2,
        spaceBetween: 90,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 25,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 25,
      },
    },
  });

  // Brand Logo Slider Js
  var swiper = new Swiper(".brand-logo-slider-container", {
    autoplay: false,
    slidesPerView: 5,
    slidesPerGroup: 1,
    spaceBetween: 96,
    speed: 500,
    breakpoints: {
      1200: {
        slidesPerView: 5,
        spaceBetween: 96,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 60,
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 60,
      },
    },
  });

  // Projecet Slider Js
  var carouselSlider = new Swiper(".projecet-slider-container", {
    slidesPerView: "auto",
    loop: true,
    speed: 500,
    spaceBetween: 70,
    autoplay: {
      delay: 4000,
    },
    navigation: {
      nextEl: ".projecet-slider-container .swiper-btn-next",
      prevEl: ".projecet-slider-container .swiper-btn-prev",
    },
    breakpoints: {
      1200: {
        spaceBetween: 70,
      },
      0: {
        spaceBetween: 30,
      },
    },
  });
  $(".projecet-slider-container").hover(
    function () {
      this.swiper.autoplay.stop();
    },
    function () {
      this.swiper.autoplay.start();
    }
  );

  // Counter Up Js
  var counterId = $(".counter");
  if (counterId.length) {
    counterId.counterUp({
      delay: 10,
      time: 3000,
    });
  }

  // Fancybox Js
  $(".video-popup").fancybox();

  // Aos Js
  AOS.init({
    once: true,
    duration: 1200,
  });

  // Parallax Scene Js
  $(".scene").each(function () {
    new Parallax($(this)[0]);
  });

  // Ajax Contact Form JS
  var form = $("#contact-form");
  var formMessages = $(".form-message");

  $(form).submit(function (e) {
    e.preventDefault();
    var formData = form.serialize();
    $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: formData,
    })
      .done(function (response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass("alert alert-danger");
        $(formMessages).addClass("alert alert-success fade show");

        // Set the message text.
        formMessages.html(
          "<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>"
        );
        formMessages.append(response);

        // Clear the form.
        $("#contact-form input,#contact-form textarea").val("");
      })
      .fail(function (data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass("alert alert-success");
        $(formMessages).addClass("alert alert-danger fade show");

        // Set the message text.
        if (data.responseText !== "") {
          formMessages.html(
            "<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>"
          );
          formMessages.append(data.responseText);
        } else {
          $(formMessages).text(
            "Oops! An error occurred and your message could not be sent."
          );
        }
      });
  });

  function scrollToTop() {
    var $scrollUp = $("#scroll-to-top"),
      $lastScrollTop = 0,
      $window = $(window);
    $window.on("scroll", function () {
      var st = $(this).scrollTop();
      if (st > $lastScrollTop) {
        $scrollUp.removeClass("show");
      } else {
        if ($window.scrollTop() > 120) {
          $scrollUp.addClass("show");
        } else {
          $scrollUp.removeClass("show");
        }
      }
      $lastScrollTop = st;
    });
    $scrollUp.on("click", function (evt) {
      $("html, body").animate({ scrollTop: 0 }, 50);
      evt.preventDefault();
    });
  }
  scrollToTop();

  /* ==========================================================================
   When document is loading, do
   ========================================================================== */
  var varWindow = $(window);
  varWindow.on("load", function () {
    stylePreloader();
  });
})(window.jQuery);
