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

