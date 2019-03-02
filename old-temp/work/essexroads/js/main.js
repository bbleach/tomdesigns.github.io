//nav
var nav = "body > main > section.header.fullheight > div";

//nav button
var navbtn = "body > nav > div > div.btn";

//rides
var ridescontent = ".rides .container";

//about
var about = "body > main > section.about.fullheight";

//pin nav for x duration
var nav_pin = new ScrollMagic.Scene({
	triggerElement: nav,
	triggerHook: 'onLeave'//,
	//duration: '90%'
})
.setPin(nav, {pushFollowers: false});

//nav button fade in tween
var navbtn_in_tween = TweenMax.from(navbtn, 0.5, {left:-80});

//nav button fade in scene
var navbtn_in = new ScrollMagic.Scene({triggerElement: '.ridestrigger', triggerHook: 'onLeave'}).setTween(navbtn_in_tween);

//nav button change color
var navbtn_dark = new ScrollMagic.Scene({triggerElement: '.about', triggerHook: 'onLeave', offset: -100, duration: "100%"})
	.setClassToggle(navbtn, "btndark");

//rides tween
var ridescontent_in = TweenMax.staggerFrom(ridescontent, 0.5, {y:1000, opacity:1, ease:Power4.easeOut}, 0.1);

//rides scene
var rides = new ScrollMagic.Scene({triggerElement: '.ridestrigger', triggerHook: 'onEnter', offset: 200, duration: 800}).setTween(ridescontent_in);

//rides tween out
var ridescontent_out = TweenMax.staggerTo(ridescontent, 0.5, {y:1000, opacity:1, ease:Power4.easeIn}, 0.1);

//rides scene out
var ridesout = new ScrollMagic.Scene({triggerElement: '.about', triggerHook: 'onEnter', duration: 800}).setTween(ridescontent_out);

//ride pin
var rides_pin = new ScrollMagic.Scene({
	triggerElement: '.ridestrigger',
	triggerHook: 'onLeave'
})
.setPin('.rides');

//about pin
//var about_pin = new ScrollMagic.Scene({
//	triggerElement: '.ridestrigger',
//	triggerHook: 'onLeave',
//	duration: 300
//})
//.setPin('body > main > section.about.fullheight');

//init. controller
var controller = new ScrollMagic.Controller();

//controller
controller.addScene([nav_pin, navbtn_in, navbtn_dark, rides, ridesout, rides_pin]);