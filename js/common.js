$(document).ready(function() {
	//fancybox
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	

	//slick
	$('.tabs_slider_inner').slick({
		 dots: true,
		  fade: true,
	});

	//tabs
	 $('.tabs_nav li a').click(function(event){
        event.preventDefault();
        $('.tabs_nav li a').removeClass('active');
        $(this).addClass('active');
        $('.tabs_slider').hide();
        $($(this).attr('href')).show();
    });

	 //scroll anchor
		$('.head_right nav li a').on('click',function(){
			$('html,body').animate({scrollTop:$($(this).attr('href')).offset().top-0},800);
			return false;
		});

});


