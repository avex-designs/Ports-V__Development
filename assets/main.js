;(function () {
	$(document).ready(function() {
		let gdprCookie = $.cookie('gdprShow');

		if(gdprCookie){
			return null;
		}

		let $gdprContainer = $('#gdpr');

		if(!$gdprContainer.length){
			return null;
		}

		let gdprModifier = 'gdpr--shown';

		$gdprContainer.on('click', '.js-gdpr-close', (e) => {
			e.preventDefault();

			$gdprContainer.removeClass(gdprModifier);
			$.cookie('gdprShow', 'true');
		});

		$gdprContainer.addClass(gdprModifier);
	});
})();

;(function(){
	const $accordion = $('.js-accordion');
	const buttonModifier = 'opened';

	$accordion.on('click', '.js-accordion-button', (e) =>{
		let $element = $(e.target);
		const data = $element.data('control');
		let $content = $accordion.find(`[data-answer="${data}"]`);

		$content.stop().slideToggle(400, () => {
			$element.css('height', '');
		});

		$element.toggleClass(buttonModifier);
	});
})();

;(function () {
    initSlider();

    function initSlider() {
        let sliderWrapper = $('.js-journal-post-slider__wrapper');

        sliderWrapper.slick({
            slidesToShow: 1,
            autoplay: false,
            arrows: true,
            prevArrow: $('.js-journal-post-slider__arrow--prev'),
            nextArrow: $('.js-journal-post-slider__arrow--next'),
            dots: true,
            dotsClass: 'journal-post-slider__dots'
        });
    }
}());
;(function () {
	let newsletterCookie = $.cookie('newsletterShow');

	if(newsletterCookie){
		return null;
	}

	let $newsletter = $('#newsletter-popup');
	let newsletterModifier = 'newsletter-popup--shown';

	if (!$newsletter.length){
		return null;
	}

	let $scrollingContent = $newsletter.find('.newsletter-popup__content');

	if(!$scrollingContent.length){
		return null;
	}

	function newsletterShow(){
		bodyScrollLock.disableBodyScroll($newsletter[0]);
		$newsletter.addClass(newsletterModifier);
	}

	function newsletterHide(){
		bodyScrollLock.clearAllBodyScrollLocks();
		$newsletter.removeClass(newsletterModifier);

		$.cookie('newsletterShow', 'true');
	}

	newsletterShow();

	$newsletter.on('click', '.js-newsletter-popup-close', () => {
		newsletterHide();
	});
})();

;(function () {
	let $container = $('.js-placeholder-shown');

	if(!$container.length){
		return null;
	}

	function placeholderShown($target) {
		let value = $target.val();

		if(value){
			$target.addClass('input--not-empty');
		} else{
			$target.removeClass('input--not-empty');
		}
	}

	setTimeout(function () {
		$container.find('.input').each(function () {
			placeholderShown($(this));
		});
	}, 0);

	$container.on('focusout', '.input', (e) => {
		placeholderShown($(e.target));
	});
})();

;(function () {
	const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

	$("form[data-klaviyo='true']").submit(function () {
		let valid = true;

		$(this).find("input[data-validate='email']").each(function (index, el) {
			let email = $(el).val();

			if ((new RegExp(regex)).test(email)) {
				$(el).removeClass("input--error");
			} else{
				$(el).addClass("input--error");
				valid = false;
			}
		});

		$(this).find("input[required='required']").each(function (index, el) {
			let value = $(el).val();

			if (value) {
				$(el).removeClass("input--error");
			} else{
				$(el).addClass("input--error");
				valid = false;
			}
		});

		return valid;
	});

	$("form[data-klaviyo='true'] .input").keydown(function (event) {
		$(event.currentTarget).removeClass("input--error");
	});

	$("form[data-klaviyo='true'] .input").keyup(function (event) {
		let el = $(event.currentTarget);
		let value = $(el).val();

		if (value) {
			$(el).removeClass("input--error");
		} else{
			$(el).addClass("input--error");
		}
	});
})();


