//nav button hide/show
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll > 650) {
        $(".navbar").addClass("navbar2");
    } else {
        $(".navbar").removeClass("navbar2");
    }
});

//nav bar show/hide

//nav open/close
$(".navbar h1").click(function(){
	$(".nav").addClass("navopen");
	$(".nav .wrapper ul li").each(function(i) {
    $(this).delay(200 * i).animate({
		left: '0px',
		opacity: '1',
		}, 100);
	});
});

//$(".nav").click(function(){
//	$(".nav").removeClass("navopen")
//	$(".nav .wrapper ul li").each(function(i) {
//    $(this).delay(200 * i).animate({
//		left: '-250px',
//		opacity: '0'
//		}, 200);
//	});
//});

$(".nav").click(function(){
	$(".nav").removeClass("navopen")
	$(".nav .wrapper ul li").animate({opacity: '0'}, 200).delay(500).animate({left: '1000px'});
	});

//scrolling
function header() {
	$('html,body').stop().animate({scrollTop: $("#header").offset().top}, 2000, 'easeInOutExpo');
}
function about() {
	$('html,body').stop().animate({scrollTop: $("#about").offset().top}, 2000, 'easeInOutExpo');
}
function services() {
	$('html,body').stop().animate({scrollTop: $("#services").offset().top}, 2000, 'easeInOutExpo');
}
function portfolio() {
	$('html,body').stop().animate({scrollTop: $("#portfolio").offset().top}, 2000, 'easeInOutExpo');
}
function contact() {
	$('html,body').stop().animate({scrollTop: $("#contact").offset().top}, 2000, 'easeInOutExpo');
}