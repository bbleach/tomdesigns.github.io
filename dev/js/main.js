

//Navbar
var navbar_pin = new ScrollMagic.Scene({
	triggerElement: '.navbar',
	triggerHook: 'onLeave'
})
.setPin('.navbar', {pushFollowers: false});

var navbar_tween = new TimelineMax()
	.from('body > main > section.header > div > div > ul > li:not(:first-child)', 0.5, {left:-200, ease:Power2.easeInOut}, 0)
	.from('body > main > section.header > div > div > ul > li:first-child', 0.5, {left: 200, right: -200, ease:Power2.easeInOut}, 0)
	.from('.navbar', 0.4, {backgroundColor:'transparent', boxShadow:0, color:'rgba(240,240,240,1)', ease:Power2.easeInOut}, 0.3);



var navbar = new ScrollMagic.Scene({
	triggerElement:'.navbar',
	triggerHook: 'onLeave'
})
.setTween(navbar_tween);

//SERVICES 1

var services1_pin = new ScrollMagic.Scene({
	triggerElement: '#services1',
	triggerHook: 'onLeave',
	duration: '100%'
})
.setPin('#services1', {pushFollowers: false});

var services1_content_timeline = new TimelineMax()
.from('#image1', 1, {top:-200, opacity:0, ease:Power2.easeOut})
.staggerFrom($('#text1').children(), 1, {top:500, opacity:0, ease:Power2.easeOut}, 0.2, 0)
.to('#image1', 1, {top:200, opacity:0, ease:Power2.easeIn}, 2)
.staggerTo($('#text1').children(), 1, {left:-500, opacity:0, ease:Power2.easeIn}, 0.2, 2);

var services1_content = new ScrollMagic.Scene({
	triggerElement: '.trigger1',
	triggerHook: 0.5,
	duration: '100%'
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
.from('#image2', 1, {right:-300, opacity:0, ease:Power2.easeOut})
.staggerFrom($('#text2').children(), 1, {right:300, opacity:0, ease:Power2.easeOut}, 0.1, 0)
.to('#image2', 1, {top:-300, opacity:0, ease:Power2.easeIn}, 1)
.to($('#text2'), 1, {top:300, opacity:0, ease:Power2.easeIn}, 1);

var services2_content = new ScrollMagic.Scene({
	triggerElement: '.trigger2',
	triggerHook: 0.5,
	duration: '100%'
})
.setTween(services2_content_timeline);

//SERVICES 3

var services3_pin = new ScrollMagic.Scene({
	triggerElement: '#services3',
	triggerHook: 'onLeave',
	duration: '100%'
})
.setPin('#services3', {pushFollowers: true});

var services3_content_timeline = new TimelineMax()
.from('#image3', 1, {top:-100, opacity:0, ease:Power2.easeOut})
.staggerFrom($('#text3').children(), 1, {top:300, opacity:0, ease:Power2.easeOut}, 0.2, 0)
.to('#image3', 1, {top:100, opacity:0, ease:Power2.easeIn}, 2)
.staggerTo($('#text3').children(), 1, {top:-300, opacity:0, ease:Power2.easeIn}, 0.2, 2);

var services3_content = new ScrollMagic.Scene({
	triggerElement: '.trigger3',
	triggerHook: 0.5,
	duration: '100%'
})
.setTween(services3_content_timeline);

//CONTROLLER

var controller = new ScrollMagic.Controller({}).addScene([navbar, navbar_pin, services1_pin, services2_pin, services1_content, services2_content , services3_content]);

