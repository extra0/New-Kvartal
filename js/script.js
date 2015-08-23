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

	// слайдер на странице обьекта
	$('.estate__slider').bxSlider({
		controls: false,
		pagerCustom: '.bx-pager__block',
		slideWidth: 645
	});

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