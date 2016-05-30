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
		 dots: true
	});

	//tabs
	 $('.tabs_nav li a').click(function(event){
        event.preventDefault();
        $('.tabs_nav li a').removeClass('active');
        $(this).addClass('active');
        $('.tabs_slider').hide();
        $($(this).attr('href')).show();
    });

});