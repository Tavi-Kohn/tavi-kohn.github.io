$(document).ready(function(){
	$('.popover-focus-dismiss').popover({
		trigger: 'focus',
		constraints: [{
			to: 'window',
			pin: true,
		}],
	});
});
