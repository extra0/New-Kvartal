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

	// показываем пикторгамку меню
	var btn = $('.header__menu-btn');
	if ($(window).width() < 992) {
		btn.show();
	} else {
		btn.hide();
	}
	$(window).resize(function(){
		var btn = $('.header__menu-btn');
		if ($(this).width() < 992) {
			btn.show();
		} else {
			btn.hide();
		}

		// меняем фиксированное меню
		if ($(this).width() < 768) {
			$('.mobile__menu').addClass('_fixed');
		} else {
			$('.mobile__menu').removeClass('_fixed');
		}

		// переопределение отступа для бокового меню на мобле
		$('.mobile__menu').css('left', $(window).width());

	});

	if ($(window).width() < 992 && $(window).width() > 767) {
		// показываем/скрываем меню
		btn.click(function(){
			$('.mobile__menu').slideToggle(500);
			return false;
		});
	}

	// закрываем окно звонка
	$(document).click(function(event) {
		if ($(event.target).closest(".phone__window-call").length) return;
		$('.phone__window-call').fadeOut(500);
		indexClick = 0;
		event.stopPropagation();
	});
	
	// окно обратного звонка
	$('.phone__call-me').click(function(){
		$('.phone__window-call').fadeToggle(500);
		return false;
	});

	$('.mask').mask('+9 (999) 999-99-99');

	// меню на мобле до 768 точек
	if ($(window).width() < 768) {
		$('.mobile__menu').addClass('_fixed');
		$('.mobile__menu').css('left', $(window).width());
		$('.header__menu-btn').click(function(){
			$('.main-wrapper').toggleClass('_fixed');
			$('.video__play').toggleClass('ml');
			return false;
		});
	}

	
});