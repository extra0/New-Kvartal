$(function() {

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

});
$(function() {



	// видео
	$('video, object').maximage('maxcover');

	// плавное перемещение вниз к таблице
	$('.button__down').click(function() {
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
	});

	$('.fancy').fancybox();

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

	// закрываем окно звонка
	$(document).click(function(event) {
		if ($(event.target).closest(".phone__window-call").length) return;
		$('.phone__window-call').fadeOut(500);
		$('.window_wrap').remove();
		indexClick = 0;
		event.stopPropagation();
	});

	// окно обратного звонка
	$('.phone__call-me').click(function() {
		$('.phone__window-call').fadeToggle(500);
		$('.main-wrapper').prepend('<div class="window_wrap"></div>');
		return false;
	});

	$('.mask').mask('+9 (999) 999-99-99');

	$('.mobile__menu._fixed').css('left', $(window).width());
	$(window).resize(function(){
		$('.mobile__menu._fixed').css('left', $(window).width());
	});

	var slide = $('.header__menu-btn._slide'),
		fix = $('.header__menu-btn._fix')

	slide.click(function() {
		$('.mobile__menu._slide').slideToggle(500);
	});

	fix.click(function() {
		$('.mobile__menu._fixed').css('left', $(window).width());
		$('.main-wrapper').toggleClass('_fixed');
		$('.video__play').toggleClass('ml');
	});

});