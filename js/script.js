document.addEventListener("DOMContentLoaded", () => {
  // header buttom
  $(".hamburger").on("click", function () {
    if ($(this).hasClass("is-active")) {
      $(this).removeClass("is-active");
      $(".header-mobile-wrap").slideUp(500);
    } else {
      $(this).addClass("is-active");
      $(".header-mobile-wrap").slideDown(500);
    }
  });

  // banner
  const bannerSwiper = new Swiper(".banner-swiper", {
    speed: 1000,
    spaceBetween: 0,
    autoHeight: true,
    navigation: {
      nextEl: ".banner-swiper .swiper-button-next",
      prevEl: ".banner-swiper .swiper-button-prev",
    },
    pagination: {
      el: ".banner-swiper .swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  // services
  $(".services-btn").magnificPopup({
    type: "inline",
  });
  $(".modal-form-close").on("click", function () {
    $.magnificPopup.close();
  });

  $(".gallery-wrap a").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  $(".gallery-btn a").on("click", function (e) {
    e.preventDefault();
    var galleryItem = $(".gallery-item");

    if ($(this).hasClass("is-active")) {
      $(this).removeClass("is-active");
      $(this).text("Показать еще");
      galleryItem.each(function () {
        if ($(this).hasClass("is-active")) {
          $(this).removeClass("is-active");
          $(this).slideUp();
        }
      });
    } else {
      $(this).addClass("is-active");
      $(this).text("Скрыть");
      galleryItem.each(function () {
        if (!$(this).is(":visible")) {
          $(this).addClass("is-active");
          $(this).slideDown();
        }
      });
    }
  });

  const reviewsSwiper = new Swiper(".reviews-swiper", {
    speed: 1000,
    spaceBetween: 20,
    pagination: {
      el: ".reviews-swiper .swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
});
