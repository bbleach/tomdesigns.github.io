//Page fading
$(document).ready(function(){
$('body').css('display', 'none');
$('body').fadeIn(600);
});

$('a').click(function(e) {
e.preventDefault();
newLocation = this.href;
$('body').fadeOut(600, newpage);
});
function newpage() {
window.location = newLocation;
}

//NAVIGATION
function openNav() {
	$("nav").stop().css("left", "0px");
	$("main").css("margin-left", "300px")
}
function closeNav() {
	$("nav").css("left", "-300px");
	$("main").css("margin-left", "0px")
}

$('body').click(function() {
	closeNav();
});

$("[onclick]").click(function(event){
    event.stopPropagation();
});

$("nav").click(function(event){
    event.stopPropagation();
});

//SCROLL TO SCROLL-ANCHOR
function scrollDown() {
	$('html,body').stop().animate({scrollTop: $(".scroll-anchor").offset().top}, 2000, 'easeInOutExpo');
}

//BACK TO TOP
function backToTop() {
	$("html, body").animate({scrollTop: 0}, 2000, 'easeInOutExpo');
}

//reCaptcha validation
function recaptchaCallback() {
    var btnSubmit = document.getElementById("input[type='submit']");
    btnSubmit.removeAttr("disabled");
}

//HIDE NAVBUTON ON SCROLL DOWN, SHOW ON SCROLL UP