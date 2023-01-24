$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  var typed = new Typed(".typing", {
    strings: ["Viagem", "Confiança", "Conforto", "Referência"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPauser: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

$(document).on("input", "#slider", function () {
  var num = $(this).val();
  var days = [
    "1 dia",
    "2 dias",
    "3 dias",
    "4 dias",
    "5 dias",
    "6 dias",
    "7 dias",
  ];
  var price = [
    "R$ 100,00",
    "R$ 200,00",
    "R$ 300,00",
    "R$ 400,00",
    "R$ 500,00",
    "R$ 600,00",
    "R$ 700,00",
  ];
  $(".text-3-days-span").text(days[num-1]);
  $(".text-3-price-span").text(price[num-1]);
});
