document.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.promo__nav-menu'),
		menuItem = document.querySelectorAll('.promo__nav-item'),
		hamburger = document.querySelector('.hamburger');

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('hamburger_active');
		menu.classList.toggle('promo__nav-menu_active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger_active');
			menu.classList.toggle('promo__nav-menu_active');
		})
	});

	// slick slider 
	// $('.testimonials__wrapper').slick({
	// 	centerMode: true,
	// 	centerPadding: '60px',
	// 	slidesToShow: 3,
	// 	responsive: [{
	// 			breakpoint: 768,
	// 			settings: {
	// 				arrows: false,
	// 				centerMode: true,
	// 				centerPadding: '40px',
	// 				slidesToShow: 3
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 480,
	// 			settings: {
	// 				arrows: false,
	// 				centerMode: true,
	// 				centerPadding: '40px',
	// 				slidesToShow: 1
	// 			}
	// 		}
	// 	]
	// });
	$('.testimonials__wrapper').slick({
		centerMode: true,
		centerPadding: '200px',
		infinite: true,
		slidesToShow: 1,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/prevArrow.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/nextArrow.png"></button>',
		responsive: [{
				breakpoint: 769,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '140px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
		]
	});
});