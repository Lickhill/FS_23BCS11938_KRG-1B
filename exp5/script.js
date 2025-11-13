document.addEventListener("DOMContentLoaded", function () {
	const navLinks = document.querySelectorAll("nav ul li a");

	navLinks.forEach(function (link) {
		link.addEventListener("click", function (e) {
			const linkText = link.textContent;
			alert("You clicked on " + linkText + " button!");
		});
	});
});
