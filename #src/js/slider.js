
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

                     

