// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {
	function slider() {

		let image = document.querySelector(`#image`);

		if (image === null) return;

		let dots = document.querySelector(`#dots`);
		let dotsImg = dots.querySelectorAll(`img`);
		dots.addEventListener(`click`, function (evt) {
			if (evt.target.matches(`.article-project__buulet-img`)) {
				dotsImg.forEach(img => {
					img.classList.remove(`active`);
				});
				image.src = evt.target.src;
				evt.target.classList.add(`active`);
			}
		})
	}
	slider();

	$( ".slider" ).each(function(index) {
		console.log($(this));
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
			responsive: [
				{
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
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			]
		});
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

});