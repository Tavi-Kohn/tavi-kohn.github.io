var encodedEmailAddress = "dGF2aS5rb2huQGdtYWlsLmNvbQ==";	//This must not contain a trailing newline

$("#email-popover-button").popover({
	content: function() {
		return "<a class=\"btn btn-secondary\"  onmousedown=\"new function() {var popup = window.open('mailto:"+ atob(encodedEmailAddress) + "');popup.close();}\" >mailto:" + atob(encodedEmailAddress) + "</a>"
	},
	html:true,
	trigger:"focus",
	constraints: [{
		to: 'window',
		pin: true,
	}],
});
