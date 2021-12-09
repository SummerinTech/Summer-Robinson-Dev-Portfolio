const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-nav-bar");

function showMobileMenu() {
	mobileMenu.classList.remove = "hidden";
	mobileMenu.classList.add = "show";
}

hamburger.addEventListener("click", showMobileMenu);
