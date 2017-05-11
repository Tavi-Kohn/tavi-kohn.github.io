$(document).ready(function(){
	// $('[data-toggle="popover"]').popover();
	$('.popover-click-dismiss').popover({
		trigger: 'click',
		constraints: [{
			to: 'window',
			pin: true,
		}],
	});
});
