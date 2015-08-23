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

	// показываем пикторгамку меню
	var btn = $('.header__menu-btn');
	if ($(window).width() < 992) {
		btn.show();
	} else {
		btn.hide();
	}
	$(window).resize(function(){
		if ($(this).width() < 992) {
			btn.show();
		} else {
			btn.hide();
		}
	});

	// показываем/скрываем меню
	btn.click(function(){
		$('.header__menu').slideToggle(500);
		return false;
	});

	// закрываем меню вне его области
	$(document).click(function(event) {
		if ($(event.target).closest(".header__menu").length) return;
		$('.header__menu').slideUp(500);
		indexClick = 0;
		event.stopPropagation();
	});

	// закрываем обьекты
	$(document).click(function(event) {
		if ($(event.target).closest(".object__inner").length) return;
		$('.object__inner').fadeOut(500);
		$('.object__circle').attr('src', 'img/circle.png');
		$('.object__circle').removeClass('active');
		indexClick = 0;
		event.stopPropagation();
	});

});