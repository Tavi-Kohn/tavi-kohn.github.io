var encodedGithubAddress = "aHR0cHM6Ly9naXRodWIuY29tL1RhdmktS29obg==";	//This must not contain a trailing newline

$("#github-popover-button").popover({
	content: function() {
		return "<a class=\"btn btn-secondary\"  onmousedown=\"new function() {var popup = window.open('" + atob(encodedGithubAddress) + "');}\" >" + atob(encodedGithubAddress) + "</a>"
	},
	html:true,
	trigger:"focus",
	constraints: [{
		to: 'window',
		pin: true,
	}],
});
