var encodedEmailAddress = "dGF2aS5rb2huQGdtYWlsLmNvbQ==";	//This must not contain a trailing newline
var emailPopoverButton = document.getElementById("email-popover-button");
function emailPopoverButtonOnfocusinCallback(emailPopoverButton) {
	// console.log("Focus in");
	emailPopover = document.getElementById(emailPopoverButton.getAttribute("aria-describedby"));
	if(emailPopover) {
		emailPopoverNodes = emailPopover.childNodes;
		for(var i = 0; i < emailPopoverNodes.length; i++) {
			if(emailPopoverNodes[i].className === "popover-content") {

				emailPopoverNodes[i].innerHTML = "<a class=\"btn btn-secondary\"  onmousedown=\"new function() {var popup = window.open('mailto:"+ atob(encodedEmailAddress) + "');popup.close()}\" >mailto:" + atob(encodedEmailAddress) + "</a>";
			}
		}
	} else {
		console.warn("Couldn't find popover to override!");
	}
}
/*
function emailPopoverButtonOnfocusoutCallback(emailPopoverButton) {
// console.log("Focus out");
// emailPopoverButton.setAttribute("data-content", "...");

emailPopoverNodes = document.getElementById(emailPopoverButton.getAttribute("aria-describedby")).childNodes;
for(var i = 0; i < emailPopoverNodes.length; i++) {
if(emailPopoverNodes[i].className === "popover-content") {
emailPopoverNodes[i].innerHTML = "...";
}
}

}
*/
