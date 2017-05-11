$(document).ready(function(){
	$('.popover-hover-dismiss').popover({
		trigger: 'hover',
		constraints: [{
			to: 'window',
			pin: true,
		}],
	});
});
