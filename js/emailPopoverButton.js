var emailPopoverButton = document.getElementById("email-popover-button");
emailPopoverButton.onfocusin = function() {
	console.log("Focus in");
	// emailPopoverButton.setAttribute("data-content", "ayyy");
	emailPopoverNodes = document.getElementById(emailPopoverButton.getAttribute("aria-describedby")).childNodes;
	for(var i = 0; i < emailPopoverNodes.length; i++) {
		if(emailPopoverNodes[i].className === "popover-content") {
			emailPopoverNodes[i].innerHTML = atob("dGF2aS5rb2huQGdtYWlsLmNvbQo=");
		}
	}
}
emailPopoverButton.onfocusout = function() {
	console.log("Focus out");
	// emailPopoverButton.setAttribute("data-content", "...");
	emailPopoverNodes = document.getElementById(emailPopoverButton.getAttribute("aria-describedby")).childNodes;
	for(var i = 0; i < emailPopoverNodes.length; i++) {
		if(emailPopoverNodes[i].className === "popover-content") {
			emailPopoverNodes[i].innerHTML = "...";
		}
	}
}
