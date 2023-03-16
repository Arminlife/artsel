import Swiper from 'swiper';
import 'swiper/css';
import jquery from 'jquery';
import jqueryValidate from 'jquery-validation';

const index = () => {
	// init Swiper:
	const swiper = new Swiper('.team_swiper', {
		spaceBetween: 40,

		breakpoints: {
			767: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			},
		},
	});

	window.addEventListener('load', () => {
		const $recaptcha = document.querySelector('#g-recaptcha-response');
		if ($recaptcha) {
			$recaptcha.setAttribute('required', 'required');
		}
	});

	$('.contact_form').validate({

		highlight: (element) => {
			$(element).parent().addClass('error');
		},
		unhighlight: (element) => {
			$(element).parent().removeClass('error');
		},
	});
};

export default index;
