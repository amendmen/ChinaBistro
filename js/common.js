  $(document).ready(function() {

  	$('.carousel').carousel({
  		interval: 4000
  	});



  	var $menu = $("#nmenu");

  	$(window).scroll(function(){
  		if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
  			$menu.removeClass("default").addClass("fixed visib");
  			$('.sm-menu').removeClass('def').addClass('fix');
  			$('div.logo img').removeClass('def').addClass('fix');
  		} else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
  			$menu.removeClass("fixed").addClass("default");
  			$('.sm-menu').removeClass('fix').addClass('def');
  			$('div.logo img').removeClass('fix').addClass('def');
  			$('.navbar').removeClass('visib');
  		}

  	}); 

  	$('.go_to').click( function(){ 
  		var scroll_el = $(this).attr('href'); 
  		if ($(scroll_el).length != 0) { 
  			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); 
  		}
  		return false; 
  	}); 

  	$('.sm-menu').click(function(){
  		$('.navbar').addClass('visib');
  		$('ul.nav.nav-tabs').addClass('mini-m')
  	})
  	$('a.go_to').click(function(){
  		$('ul.nav.nav-tabs').removeClass('mini-m');
  		//
  	})    

  	$(function(){
  		$('#Container').mixItUp();
  	});

  	$('.popup-gallery').magnificPopup({
  		delegate: 'a',
  		type: 'image',
  		tLoading: 'Loading image #%curr%...',
  		mainClass: 'mfp-img-mobile',
  		gallery: {
  			enabled: true,
  			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		}
	});

  	

  	function animated(obj, addC, remC) {
  		$(obj).css('opacity', 0).addClass('animated').waypoint(function(direction) {
  			if (direction === 'down') {

  				$(obj).removeClass(remC).addClass(addC).css('opacity', 1);
  			} 
  			else {
  				$(obj).removeClass(addC).addClass(remC).css('opacity', 1);
  			}

  		}, {
  			offset: '80%'
  	})
  		
  	}

  animated($('.cock'), 'fadeInLeft', 'fadeOutRight');
  animated($('.about-text'), 'fadeInRight', 'fadeOutLeft');

  animated($('.s-item:first-child'), 'slideInLeft', 'fadeOut');
  animated($('.s-item:nth-child(2)'), 'fadeIn', 'fadeOut');
  animated($('.s-item:nth-child(4)'), 'slideInRight', 'fadeOut');
  animated($('.s-item:nth-child(5)'), 'slideInLeft', 'fadeOut');
  animated($('.s-item:nth-child(6)'), 'fadeIn', 'fadeOut');
  animated($('.s-item:last-child'), 'slideInRight', 'fadeOut'); 

  animated($('.column:first-child'), 'slideInRight', 'bounceInLeft');
  animated($('.column:last-child'), 'slideInLeft', 'bounceInRight');
  
  animated($('.filter:first-child'), 'rollIn', 'rollOut');
  animated($('.filter:nth-child(2)'), 'rotateInDownLeft', 'rollOut');
  animated($('.filter:nth-child(3)'), 'swing', 'rollOut');
  animated($('.filter:last-child'), 'rotateInUpLeft', 'rollOut'); 
  
  animated($('.popup-gallery img'), 'pulse', 'fadeOut');
  animated($('.stat-item'), 'flipInY', 'rotateOutDownLeft');
  
  animated($('.chef:first-child img'), 'fadeInRight', 'fadeOut');
  animated($('.chef:nth-child(2) img'), 'fadeIn', 'fadeOut');
  animated($('.chef:last-child img'), 'fadeInLeft', 'fadeOut');
  animated($('.chef h4'), 'fadeInDown', 'fadeOut');
  animated($('.chef p'), 'fadeInUp', 'fadeOut');

  animated($('.form-animated-1'), 'slideInLeft', 'slideOutRight');
  animated($('.form-animated-2'), 'slideInRight', 'slideOutLeft');
  animated($('.form-animated-3'), 'slideInUp', 'fadeOut');


});
