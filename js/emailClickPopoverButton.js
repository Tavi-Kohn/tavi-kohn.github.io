var encodedEmailAddress = "dGF2aS5rb2huQGdtYWlsLmNvbQ==";	//This must not contain a trailing newline
// var emailPopoverButton = document.getElementById("email-popover-button");
// emailPopoverButton.onmousedown = function() {
function emailPopoverButtonOnclickCallback(emailPopoverButton) {
	new MutationObserver(function(mutations) {
		var emailPopover = document.getElementById(emailPopoverButton.getAttribute("aria-describedby"));

		if(emailPopover) {
			this.disconnect();
			var emailPopoverNodes = emailPopover.childNodes;
			for(var i = 0; i < emailPopoverNodes.length; i++) {
				if(emailPopoverNodes[i].className === "popover-content") {
					console.log("Found Popover");
					emailPopoverNodes[i].innerHTML = "<a class=\"btn btn-secondary\"  onmousedown=\"new function() {var popup = window.open('mailto:"+ atob(encodedEmailAddress) + "');popup.close()}\" >mailto:" + atob(encodedEmailAddress) + "</a>";
				}
			}
		}
	}).observe(document, {
		subtree: true,
		childList: true,
	});
};
