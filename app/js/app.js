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
			dots: false,
			fade: true,
			asNavFor: '#slide-priject-min'
		});
		$('#slide-priject-min').slick({
			infinite: true,
			variableWidth: true,
			swipeToSlide: true,
			asNavFor: '#slide-priject-big',
			arrows: false,
			dots: false,
			focusOnSelect: true,
			slidesToShow: 6,
			slidesToScroll: 6,
			responsive: [{
					breakpoint: 1200,
					settings: {
						slidesToShow: 5,
						slidesToScroll: 5,
					}
				},
				{
					breakpoint: 992,
					settings: {
						variableWidth: false,
						slidesToShow: 3,
						slidesToScroll: 3,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
			]
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
		let header = document.querySelector('.header');
		let btn = document.querySelector('.js-open-nav');
		let menu = document.querySelector('.js-nav-menu');
		let overlay = document.querySelector('.js-nav-overlay');

		btn.addEventListener('click', function () {
			this.classList.toggle('header__open');
			menu.classList.toggle('nav--open');
			header.classList.toggle('open-menu')
		});

		overlay.addEventListener('click', function (evt) {
			btn.classList.remove('header__open');
			menu.classList.remove('nav--open');
			header.classList.remove('open-menu');
		});
	};

	navMenu();

	// открыть форму
	function openForm() {
		const form = document.querySelector('.popup-form');
		const success = document.querySelector('.popup-success');
		const btnSuccess = document.querySelector('.js-submit');

		const btnOpenForm = document.querySelectorAll('.js-open-form');
		if (form === null || success === null || btnOpenForm === null) {
			console.log('form: ', form);
			console.log('success: ', success);
			console.log('btnOpenForm: ', btnOpenForm);
			console.log('Нет модалок или  класса .js-open-form');
			return;
		}

		function openForm() {
			form.classList.add('open');
		}

		function closeForm() {
			form.classList.remove('open');
		}

		function openSuccess() {
			success.classList.add('open');
		}

		function closeSuccess() {
			success.classList.remove('open');
		}

		btnOpenForm.forEach(el => {
			el.addEventListener('click', function (evt) {
				evt.preventDefault();
				openForm();
			})
		});

		form.addEventListener('click', function (evt) {
			if (evt.target.matches('.popup-overlay')) {
				closeForm();
			}
			if (evt.target.closest('.popup-close')) {
				closeForm();
			}
			if (evt.target.matches('.js-submit')) {
				evt.preventDefault();
				closeForm();
				openSuccess();
			}
		})

		success.addEventListener('click', function (evt) {

			if (evt.target.matches('.popup-overlay')) {
				closeSuccess();

			}
			if (evt.target.closest('.popup-close')) {
				closeSuccess();
			}
		});

		btnSuccess.addEventListener('click', function (evt) {
			evt.preventDefault();
			openSuccess();
		});

		// close ecs keydown

		document.addEventListener('keydown', function (evt) {

			let form = document.querySelector('.popup.open');
			if (event.keyCode == 27 && form) {
				closeForm();
				closeSuccess();
			}
		});
	}
	openForm();


	function heightHeader() {
		window.addEventListener("resize", () => {
			resize();
		});

		function resize() {
			const header = document.querySelector('.header').clientHeight;
			let heightHeader = document.querySelector('.height-header');
			if (heightHeader) {
				heightHeader.style.marginTop = header + 'px';
			}
		}
		resize();
	}
	heightHeader();

});
