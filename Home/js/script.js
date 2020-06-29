$(document).ready(function(){
	//Navbar And Introduce
	$('.menu-toggle').on('click', function(){
		$('.nav').toggleClass('showing');
		$('.introduce').toggleClass('showingdown');
	});
	$('.account-toggle').on('click', function() {
		$('.account-toggle ul').toggleClass('showing');
	});

	$('.account-toggle').hover(function(){
		$('.introduce').toggleClass('showingdown2');
	});
    // Post Slider
	$('.post-wrapper').slick({
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  prevArrow: $('.prev'),
	  nextArrow: $('.next'),
	  responsive: [
      {
	      breakpoint: 1040,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
      },
	  {
	      breakpoint: 750,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
      },
	  {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
      }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
      ]
	});

	//Tabbar 

	$('.content .content-left .tabbar-control .line-control .trending').hover(function(){
		$('.content .content-left .tabbar-control .line-control .trending').toggleClass('.line-control-color');
	});
	//End Tabbar
	
});

