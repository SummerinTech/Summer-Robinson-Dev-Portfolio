let hamburger = $(".hamburger");
console.log(hamburger);
let mobileMenu = $(".mobile-nav-bar");
console.log(mobileMenu);

hamburger.click(function () {
	mobileMenu.slideToggle();
});
