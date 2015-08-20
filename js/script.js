$(function(){

	// плавное перемещение вниз к таблице
	$('.button__down').click(function(){
		var anchor = $(this);
		$('html, body').stop().animate({
		   scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
	});

	// появление обьектов на карте
	$('.object__link').click(function(){
		if ($(this).children('img').hasClass('active')) {
			return false;
		} else {
			$('.object__inner').hide();
			$('.object__circle').attr('src', 'img/circle.png');
			$('.object__circle').removeClass('active');
			$(this).parent().find('.object__inner').fadeIn(500);
			$(this).children('img').attr('src', 'img/active_circle.png');
			$(this).children('img').addClass('active');
			return	false;
		}
		
	});

	// ресайз окна
	// $(window).resize(function(){
	// 	return $('.video__play').css('max-height', $(window).height());
	// 	return $('.video__play').width($(window).width());
	// });

});