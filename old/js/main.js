$(window).on("load",function(){
  $('*').css("transition", "all 0.5s");
});



//TweenMax.from(servicelist, 2, {x:100, opacity:0, ease:Power0.easeNone})

//scrollmagic

//about
var about = ".about h1, p"

//about tween
var about_tween = TweenMax.staggerFrom(about, 0.5, {
	opacity:0,
	y:-50,
	ease:Power4.easeOut
},0.03);

//about scene
var about_scene = new ScrollMagic.Scene({
	triggerElement: '.about_trigger', duration: 2000
})
.setTween(about_tween);

//services text
var servicelist = ".services li,.services h1";

//services image
var serviceimg = ".services img";

//services text tween
var services_in_tween = TweenMax.staggerFrom(servicelist, 0.5, {
  x:400,
  opacity:0,
  ease:Power4.easeOut
}, 0.2);

//services image tween
var services_img_in_tween = TweenMax.from(serviceimg, 0.5, {
  x:-400,
  opacity:0,
  ease:Power4.easeOut
});

//services text scene
var services_scene = new ScrollMagic.Scene({
	triggerElement: '.services_trigger', duration: 550
})
.setTween(services_in_tween);

//services image scene
var services_img_scene = new ScrollMagic.Scene({
	triggerElement: '.services_trigger', duration: 500
})
.setTween(services_img_in_tween);

//init. controller
var controller = new ScrollMagic.Controller();

//controller
controller.addScene([
	about_scene,
	services_scene,
	services_img_scene
]);