//nav hide/show
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll > 650) {
        $(".navbar").addClass("navbar2");
    } else {
        $(".navbar").removeClass("navbar2");
    }
});

//nav bar show/hide
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $(".navbar").outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight + 650){
        // Scroll Down
        $(".navbar").addClass('hidden');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $(".navbar").removeClass('hidden');
        }
    }
    
    lastScrollTop = st;
}

//nav open/close
$(".navbtn").click(function(){
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
	$('html,body').stop().animate({scrollTop: $("#header").offset().top}, 2000, 'easeInOutCubic');
}
function about() {
	$('html,body').stop().animate({scrollTop: $("#about").offset().top}, 2000, 'easeInOutCubic');
}
function services() {
	$('html,body').stop().animate({scrollTop: $("#services").offset().top}, 2000, 'easeInOutCubic');
}
function portfolio() {
	$('html,body').stop().animate({scrollTop: $("#portfolio").offset().top}, 2000, 'easeInOutCubic');
}
function contact() {
	$('html,body').stop().animate({scrollTop: $("#contact").offset().top}, 2000, 'easeInOutCubic');
}
function slowscroll() {
	$('html,body').stop().animate({scrollTop: $(".footer").offset().top}, 10000, 'linear');
}