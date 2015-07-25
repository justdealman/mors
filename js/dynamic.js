function position() {
	if ( $(window).height() > $('.wrapper').height() ) {
		$('.wrapper').css({
			'top': ($(window).height()-$('.wrapper').height())/2+'px'
		});
	}
	else {
		$('.wrapper').css({
			'top': '0'
		});
	}
}
$(document).ready(function() {
	position();
	if ( $('.about').length > 0 ) {
		$('.about > div').jScrollPane({
			showArrows: false,
			animateScroll: true,
			animateDuration: 200,
			mouseWheelSpeed: 200,
			keyboardSpeed: 200,
			animateSteps: true
		});
	}
	if ( $('.friends').length > 0 ) {
		var element = $('.friends').jScrollPane({
			showArrows: false,
			animateScroll: true,
			animateDuration: 200,
			mouseWheelSpeed: 200,
			keyboardSpeed: 200,
			animateSteps: true
		});
		var api = element.data('jsp');
		element.bind('mousewheel', function (event, delta, deltaX, deltaY) {
			api.scrollByX(delta*-200); 
			return false;
		});
	}
	if ( $('.gallery').length > 0 ) {
		$('.gallery > div').jScrollPane({
			showArrows: false,
			animateScroll: true,
			animateDuration: 200,
			mouseWheelSpeed: 200,
			keyboardSpeed: 200,
			animateSteps: true
		});
	}
	if ( $('.navigation').length > 0 ) {
		$('.navigation > div').jScrollPane({
			showArrows: false,
			animateScroll: true,
			animateDuration: 200,
			mouseWheelSpeed: 200,
			keyboardSpeed: 200,
			animateSteps: true
		});
	}
});
$(window).resize(function() {
	position();
});