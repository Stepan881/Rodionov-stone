// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')



document.addEventListener('DOMContentLoaded', () => {

	const heade = document.querySelector(`.header`);
	const navBtn = document.querySelector(`.nav-open-btn`);
	window.addEventListener(`resize`, () => {
		if (window.innerWidth < 992) {
			heade.classList.remove(`header-nav-open`);
		}
	});

	navBtn.addEventListener(`click`, (evt) => {
		evt.preventDefault();
		if (window.innerWidth < 992) {
			heade.classList.toggle(`header-nav-open`);
		}
	});

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

	function accordion() {
		const questions = document.querySelector(`.js-questions`);
		if (!questions) return;
		questions.addEventListener(`click`, (evt) => {
			if (evt.target.matches(`.questions__link`)) {
				evt.preventDefault();
				evt.target.classList.toggle(`questions__link--open`);
			}
		});
	}
	accordion();

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


	function sliderIndex() {
		$('.js-slider-index').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: true,
			dotsClass: 'slider__boolets',
			customPaging: function (slider, i) {
				return '<span class="slider__dot"></span>';
			},
		});
	}
	sliderIndex();

	function sliderArticle() {
		$('#slide-priject-big').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
			dots: true,
			// prevArrow: ".article__arrow-prev",
			// nextArrow: ".article__arrow-next",
			asNavFor: '#slide-priject-min',
			dotsClass: 'slider__boolets',
			customPaging: function (slider, i) {
				return '<span class="slider__dot"></span>';
			},
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
	sliderArticle();
});