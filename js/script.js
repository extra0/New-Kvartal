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

	var btn = $('.header__menu-btn');
	$(window).resize(function() {
		if ($(this).width < 992 && $(this).width > 768) {
			console.log('mid');
			btn.addClass('slide');
			btn.removeClass('_fixed');
		} else if ($(this).width < 768) {
			console.log('small');
			btn.addClass('_fixed');
			btn.removeClass('slide');
			$('.mobile__menu').css('left', $(window).width());
		}

	});

	// if ($('body').width() < 992 && $('body').width() > 767) {
	// 	// показываем/скрываем меню
	// 	btn.click(function(){
	// 		$('.mobile__menu').slideToggle(500);
	// 		return false;
	// 	});
	// }

	// меню на мобле до 768 точек
	if ($(window).width() < 768) {
		$('.mobile__menu').addClass('_fixed');
		$('.mobile__menu').css('left', $(window).width());
		$('.header__menu-btn').click(function() {
			$('.main-wrapper').toggleClass('_fixed');
			$('.video__play').toggleClass('ml');
			return false;
		});
	}
});