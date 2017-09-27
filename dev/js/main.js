//Navbar
var navbar_pin = new ScrollMagic.Scene({
	triggerElement: '.navbar',
	triggerHook: 'onLeave'
})
.setPin('.navbar', {pushFollowers: false});

var navbar_tween = new TimelineMax()
	.from('body > main > section.header > div > div > ul > li:not(:first-child)', 0.3, {left:-200, ease:Power2.easeInOut}, 0)
	.from('body > main > section.header > div > div > ul > li:first-child', 0.3, {left: 200, right: -200, ease:Power2.easeInOut}, 0)
	.from('.navbar', 0.3, {backgroundColor:'transparent', color:'rgba(240,240,240,1)', ease:Power2.easeInOut}, 0)
	.from('.navbar', 0.3, {boxShadow:0, ease:Power2.easeInOut}, 0);

var navbar = new ScrollMagic.Scene({
	triggerElement:'.navbar',
	triggerHook: 'onLeave'
})
.setTween(navbar_tween);

//HEADER

$(function() {
	new TimelineMax()
		.from('body > main > section.header > div.wrapper > h1', 1, {opacity: 0, top: 200, ease:Power3.easeInOut}, 0)
		.from('body > main > section.header > div.wrapper > h2', 2, {opacity: 0, top: 100, ease:Power3.easeInOut}, 0.1)
		.staggerFrom($('#navul').children(), 0.2, {opacity: 0, top: -50, ease:Power1.easeOut}, 0.1, 1)
		.from('.scroll_indicator', 2, {opacity: 0, top: 300, ease:Power3.easeInOut}, 1.5);
	});

var header_content_timeline = new TimelineMax()
.to('body > main > section.header > div.wrapper', 1, {top:400, opacity:0, ease:Power1.easeIn}, 0);

var header_content = new ScrollMagic.Scene({
	triggerElement: '.about',
	triggerHook: 'onEnter',
	duration: '80%'
})
.setTween(header_content_timeline);

//ABOUT

var about_parallax = new ScrollMagic.Scene({triggerElement: '.about', triggerHook:1, duration:'300%'})
	.setTween(".about", {backgroundPositionY:'200%', ease:Linear.easeNone});

//SKILL BARS

var skillbars_tween = new TimelineMax()
	.staggerFrom($('body > main > section.about > div:nth-child(1)').children(), 2, {opacity:0}, 0.1, 0)
	.staggerFrom($('body > main > section.about > div:nth-child(2)').children(), 2, {opacity:0}, 0.1, 0)
	.from('.html', 1, {width:0, ease:Power3.easeInOut}, 0.5)
	.from('.css', 1, {width:0, ease:Power3.easeInOut}, 0.6)
	.from('.js', 1, {width:0, ease:Power3.easeInOut}, 0.7)
	.from('.ps', 1, {width:0, ease:Power3.easeInOut}, 0.8)
	.from('.ae', 1, {width:0, ease:Power3.easeInOut}, 0.9);

var skillbars = new ScrollMagic.Scene({
	triggerElement: '.about',
	triggerHook: 0.8
})
.setTween(skillbars_tween);

//SERVICES 1

var services1_pin = new ScrollMagic.Scene({
	triggerElement: '#services1',
	triggerHook: 'onLeave',
	duration: '100%'
})
.setPin('#services1', {pushFollowers: false});

var services1_content_timeline = new TimelineMax()
.from('#image1', 1, {top:-200, opacity:0, ease:Power2.easeInOut})
.staggerFrom($('#text1').children(), 1, {top:500, opacity:0, ease:Power2.easeInOut}, 0.2, 0)
//.to('#image1', 1, {top:200, opacity:0, ease:Power2.easeIn}, 2)
//.staggerTo($('#text1').children(), 1, {left:-500, opacity:0, ease:Power2.easeIn}, 0.2, 2)
;

var services1_content = new ScrollMagic.Scene({
	triggerElement: '.trigger1',
	triggerHook: 0.4//,
//	duration: '100%'
})
.setTween(services1_content_timeline);

//SERVICES 2

var services2_pin = new ScrollMagic.Scene({
	triggerElement: '#services2',
	triggerHook: 'onLeave',
	duration: '100%'
})
.setPin('#services2', {pushFollowers: false});

var services2_content_timeline = new TimelineMax()
.from('#image2', 1, {right:-300, opacity:0, ease:Power2.easeInOut})
.staggerFrom($('#text2').children(), 1, {right:300, opacity:0, ease:Power2.easeInOut}, 0.1, 0)
//.to('#image2', 1, {top:-300, opacity:0, ease:Power2.easeIn}, 1)
//.to($('#text2'), 1, {top:300, opacity:0, ease:Power2.easeIn}, 1)
;

var services2_content = new ScrollMagic.Scene({
	triggerElement: '.trigger2',
	triggerHook: 0.4//,
//	duration: '100%'
})
.setTween(services2_content_timeline);

//SERVICES 3

var services3_pin = new ScrollMagic.Scene({
	triggerElement: '#services3',
	triggerHook: 'onLeave',
	duration: '100%'
})
.setPin('#services3', {pushFollowers: false});

var services3_content_timeline = new TimelineMax()
.from('#image3', 1, {top:-100, opacity:0, ease:Power2.easeInOut})
.staggerFrom($('#text3').children(), 1, {top:300, opacity:0, ease:Power2.easeInOut}, 0.2, 0)
//.to('#image3', 1, {top:100, opacity:0, ease:Power2.easeIn}, 2)
//.staggerTo($('#text3').children(), 1, {top:-300, opacity:0, ease:Power2.easeIn}, 0.2, 2)
;

var services3_content = new ScrollMagic.Scene({
	triggerElement: '.trigger3',
	triggerHook: 0.4//,
//	duration: '100%'
})
.setTween(services3_content_timeline);

//CONTROLLER

var controller = new ScrollMagic.Controller({}).addScene([navbar, header_content, navbar_pin, skillbars, services1_pin, services2_pin, services1_content, services2_content, services3_pin, services3_content]);

