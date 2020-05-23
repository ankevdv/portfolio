let hamburgerIcon = document.querySelector("header div.hamburger");
let header = document.querySelector("header");

hamburgerIcon.addEventListener("click", function () {
	this.classList.toggle("actief");
	header.classList.toggle("uitgeklapt");
})
