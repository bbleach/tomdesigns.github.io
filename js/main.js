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
}
function closeNav() {
	$("nav").css("left", "-324px");
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