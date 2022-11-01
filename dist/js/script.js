// webpCheck
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});




$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
  $(".header__list, .header__logo").click(function (event) {
    $(".header__burger,.header__menu").removeClass("active");
    $("body").removeClass("lock");
  });
  $(window).scroll(function () {
    let height = $(window).scrollTop();
    if (height > 50) {
      $(".header").addClass("--fixed");
    } else {
      $(".header").removeClass("--fixed");
    }
  });
});


const carusel=$('.page__mid .owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})
const head=$('.owl-carousel .slider-block').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    responsive:{
        0:{
            items:1
          
        },

    }
    
  })


let total = 4;
let currentIndex = 1;

function setActiveslide(currentIndex,total) {
    $('.current-item').text('0'+ currentIndex)

}
setActiveslide(currentIndex,total);

  const headerSlider = $('.slide').owlCarousel({  
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
          
        },

    }
    
  });

  headerSlider.on('changed.owl.carousel',function(data){
    currentIndex = data.item.index - 1;
    setActiveslide(currentIndex,total);


  })

$('.next').click(function() {
    headerSlider.trigger('next.owl.carousel');
})
$('.prev').click(function() {

    headerSlider.trigger('prev.owl.carousel', [300]);
})
console.log(headerSlider);

                     


document.querySelectorAll(".tab-triggers__item").forEach((item) =>
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.target.getAttribute("href").replace("#", "");

    document
      .querySelectorAll(".tabs-content__item")
      .forEach((child) => child.classList.remove("tabs-content__item--active"));

    document
      .querySelectorAll(".tab-triggers__item")
      .forEach((child) => child.classList.remove("tab-triggers__item--active"));

    item.classList.add("tab-triggers__item--active");
    document.getElementById(id).classList.add("tabs-content__item--active");
  })
);

//document.querySelector(".tab-triggers__item").click();


