// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {
	$(".slider").each(function (index) {
		$('.slider-photos:not(.slider-documentation)', $(this)).slick({

			adaptiveHeight: true,
			dots: true,
			appendArrows: 'pagination',
			lazyLoad: 'ondemand',
			prevArrow: $(this).find('.prew'),
			nextArrow: $(this).find('.next'),
			dotsClass: 'boolets',
			customPaging: function (slider, i) {
				return '<span class="boolets-dot"></span>';
			},
		});


		$('.slider-documentation', $(this)).slick({
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 3,
			adaptiveHeight: true,
			dots: true,
			appendArrows: 'pagination',
			lazyLoad: 'ondemand',
			prevArrow: $(this).find('.prew'),
			nextArrow: $(this).find('.next'),
			dotsClass: 'boolets',
			customPaging: function (slider, i) {
				return '<span class="boolets-dot"></span>';
			},
			responsive: [{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	});

	function sliderProject() {
		$('#slide-priject-big').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '#slide-priject-min'
		});
		$('#slide-priject-min').slick({
			infinite: false,
			variableWidth: true,
			swipeToSlide: true,

			asNavFor: '#slide-priject-big',
			dots: true,
			focusOnSelect: true
		});
	}
	sliderProject();




	function headerColor() {
		function toggle() {
			var height = $(window).scrollTop();
			if (height > 100) {
				$('.header').removeClass('header__white');
			} else {
				$('.header').addClass('header__white');
			}
		}
		toggle();

		if ($('main.index').length) {
			$(window).scroll(function () {
				toggle();
			});
		} else {
			$('.header').removeClass('header__white');
		}
	}
	headerColor();


	// отзрыть закрыть меню
	function navMenu() {

		let btn = document.querySelector('.js-open-nav');
		let menu = document.querySelector('.js-nav-menu');
		let overlay = document.querySelector('.js-nav-overlay');

		btn.addEventListener('click', function () {
			this.classList.toggle('header__open');
			menu.classList.toggle('nav--open');
		});

		overlay.addEventListener('click', function (evt) {
			console.log(evt.target);
			btn.classList.remove('header__open');
			menu.classList.remove('nav--open');
		});
	};

	navMenu();
});