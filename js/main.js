// Tab Section Functional Using JQury

$(document).ready(function(){


	$('.hotdeals-slider').owlCarousel({
	    loop:true,
	    autoplay:false,
	    autoplayTimeout:3000,
	    margin:10,
	    dots:false,
	    nav:true,
	    navText:['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }  
	});


	$('.owl-carousel').owlCarousel({
	    loop:true,
	    autoplay:true,
	    autoplayTimeout:3000,
	    margin:10,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:6
	        }
	    }  
	});





})