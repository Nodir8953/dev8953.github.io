$(function(){


	$('.slider_inner, .news-slider_inner').slick({
		prevArrow:'<button type="button" class="slick-btn slick-prev"></button>',
		nextArrow:'<button type="button" class="slick-btn slick-next"></button>'
		/*infinite: false*/
	})

	$('select').styler();
	$('.logo_slider').slick({		
		autoplay: true,
		autoplaySpeed: 2000,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow:'<button type="button" class="slick-btn slick-prev"></button>',
		nextArrow:'<button type="button" class="slick-btn slick-next"></button>'


	});	


})