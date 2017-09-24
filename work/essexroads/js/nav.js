//nav menu
var navmenu = "body > nav > div > div.menu";
var overlay = "body > nav > div > div.overlay";

function nav() {
	$(navmenu).animate({left:0}, 600, 'easeInOutQuint');
	$(overlay).fadeIn(800);
}
function closeNav() {
	$(navmenu).animate({left:-400}, 600, 'easeInOutQuint');
	$(overlay).fadeOut(800);
}

//scrolling
function header() {
	$('html,body').stop().animate({scrollTop: $(".header").offset().top}, 2000, 'easeInOutQuart');
}
function rides() {
	$('html,body').stop().animate({scrollTop: $(".ridestrigger").offset().top}, 2000, 'easeInOutQuart');
}
function about() {
	$('html,body').stop().animate({scrollTop: $(".about h1").offset().top}, 2000, 'easeInOutQuart');
}
function contact() {
	$('html,body').stop().animate({scrollTop: $(".contact").offset().top}, 2000, 'easeInOutQuart');
}