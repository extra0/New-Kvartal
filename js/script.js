$(function() {

	// плавное перемещение вниз к таблице
	$('.button__down').click(function() {
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
	});

	// появление обьектов на карте
	$('.object__link').click(function() {
		if ($(this).children('img').hasClass('active')) {
			return false;
		} else {
			$('.object__inner').hide();
			$('.object__circle').attr('src', 'img/circle.png');
			$('.object__circle').removeClass('active');
			$(this).parent().find('.object__inner').fadeIn(500);
			$(this).children('img').attr('src', 'img/active_circle.png');
			$(this).children('img').addClass('active');
			return false;
		}
	});

	// hover на блок с историей
	$('.history__block').hover(function() {
		$(this).toggleClass('hover');
	});

	// галерея 
	var GammaSettings = {
		// order is important!
		viewport: [{
			width: 1200,
			columns: 5
		}, {
			width: 900,
			columns: 4
		}, {
			width: 500,
			columns: 3
		}, {
			width: 320,
			columns: 2
		}, {
			width: 0,
			columns: 2
		}]
	};
	Gamma.init(GammaSettings);

	$(window).resize(function() {
		return [
			$('.video__play').width($(window).width()),
			$('.video__play').height($(window).height()),
			$('.video__block').width($(window).width()),
			$('.video__block').height($(window).height()),
			$('.full__screen').width($(window).width()),
			$('.full__screen').height($(window).height())
		];
	});

	// ресайз окна
	return [
		$('.video__play').width($(window).width()),
		$('.video__play').height($(window).height()),
		$('.video__block').width($(window).width()),
		$('.video__block').height($(window).height()),
		$('.full__screen').width($(window).width()),
		$('.full__screen').height($(window).height())
	];



});