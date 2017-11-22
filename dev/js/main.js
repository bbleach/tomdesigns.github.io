//var didScroll;
//var lastScrollTop = 0;
//var delta = 1;
//var navbarHeight = $('nav').outerHeight();
//
//$(window).scroll(function(event){
//    didScroll = true;
//});
//
//setInterval(function() {
//    if (didScroll) {
//        hasScrolled();
//        didScroll = false;
//    }
//}, 250);
//
//function hasScrolled() {
//    var st = $(this).scrollTop();
//    
//    // Make sure they scroll more than delta
//    if(Math.abs(lastScrollTop - st) <= delta)
//        return;
//    
//    // If they scrolled down and are past the navbar, add class .nav-up.
//    // This is necessary so you never see what is "behind" the navbar.
//    if (st > lastScrollTop && st > navbarHeight){
//        // Scroll Down
//        new TweenMax.to('nav', 0.3, {top:'-100px', ease:Power4.easeOut});
//    } else {
//        // Scroll Up
//        if(st + $(window).height() < $(document).height()) {
//            new TweenMax.to('nav', 0.3, {top:'0px', ease:Power4.easeInOut});
//        }
//    }
//    
//    lastScrollTop = st;
//}

function header() {
	closeNav();
	$('html,body').stop().animate({scrollTop: $("body").offset().top}, 400, 'easeInOutExpo');
}
function about() {
	closeNav();
	$('html,body').stop().animate({scrollTop: $(".about").offset().top}, 400, 'easeInOutExpo');
}
function services() {
	closeNav();
	$('html,body').stop().animate({scrollTop: $(".services").offset().top}, 400, 'easeInOutExpo');
}
function portfolio() {
	closeNav();
	$('html,body').stop().animate({scrollTop: $(".portfolio").offset().top}, 400, 'easeInOutExpo');
}
function contact() {
	closeNav();
	$('html,body').stop().animate({scrollTop: $(".contact").offset().top}, 400, 'easeInOutExpo');
}


function navBtnOpen() {
	$('nav div').attr('onClick','nav()');
	$('body > div.nav > div:nth-child(2) > ul').prop('onclick',null).off('click').removeAttr('onClick');
}
function navBtnClosed() {
	$('nav div').attr('onClick','closeNav()')
	$('body > div.nav > div:nth-child(2) > ul').attr('onClick','closeNav()')
}

function nav() {
	$('nav div').prop('onclick',null).off('click');
	new TimelineMax({
		onComplete: navBtnClosed
	})
		.staggerFromTo($('.nav div:first-child span'),0.8,{top:'100%', boxShadow:' 0 0 200px 20px rgba(0,0,0,0.0)', ease:Power4.easeInOut}, {top:'0%', boxShadow:' 0 0 200px 20px rgba(0,0,0,0.4)', ease:Power4.easeInOut},0.07, 0)
		.staggerTo($('body > div.nav > div:nth-child(2) > ul > li'), 0.5, {opacity: 1, transform: 'translateX(0px)', ease:Power2.easeOut}, 0.08, 0.5);
}
function closeNav() {
	$('nav div').prop('onclick',null).off('click');
	new TimelineMax({
		onComplete: navBtnOpen
	})
		.staggerTo($('body > div.nav > div:nth-child(2) > ul > li'), 0.4, {opacity: 0, transform: 'translateX(-50px)', ease:Power2.easeIn}, 0.05, 0)
		.staggerFromTo($('.nav div:first-child span'),0.7,{top:'0%', ease:Power4.easeInOut}, {top:'100%', boxShadow:' 0 0 200px 20px rgba(0,0,0,0.0)', ease:Power4.easeInOut},0.07, 0);
}

var controller = new ScrollMagic.Controller();

var header_timeline = new TimelineMax()
	.to('.header', 1, {backgroundColor:'#1ED760'}, 0)
	.to('.header h1:first-child', 0.5, {transform:'scale(0)', opacity:0, ease:Power4.easeIn}, 0)
	.from('.header h1:nth-child(2)', 0.5, {transform:'scale(10)', opacity:0, ease:Power4.easeOut}, 0.3)
;

var header_scene = new ScrollMagic.Scene({
	triggerElement: '.header',
	triggerHook: 'onLeave',
	duration: '100%'
})
.setTween(header_timeline)
.setPin('.header', {pushFollowers: true})
.addTo(controller);

var header_pin2 = new ScrollMagic.Scene({
	triggerElement: '.about',
	triggerHook: 'onEnter',
	duration: '100%'
})
.setPin('.header', {pushFollowers: false})
.addTo(controller);
var about_tween = new TimelineMax()
	.staggerFrom($('body > main > section.about > div:nth-child(1)').children(), 1, {opacity:0, ease:Power4.easeInOut},0.1, 0)
	.from('body > main > section.about > div:nth-child(2) > h1', 2, {opacity:0, ease:Power4.easeInOut},0.1, 0)
	.staggerFrom($('body > main > section.about > div:nth-child(2) > div').children(), 1.5, {width:0, opacity:0, ease:Power4.easeInOut},0.1, 0.4);

var about_scene = new ScrollMagic.Scene({
	triggerElement: '.about',
	triggerHook: '0.7'
})
.setTween(about_tween)
.addTo(controller);
