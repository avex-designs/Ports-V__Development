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

