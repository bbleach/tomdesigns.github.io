var services1_pin = new ScrollMagic.Scene({
	triggerElement: '#services1',
	triggerHook: 'onLeave',
	duration: '300%'
})
.setPin('#services1', {pushFollowers: false});

var services2_pin = new ScrollMagic.Scene({
	triggerElement: '#services2',
	triggerHook: 'onLeave',
	duration: '200%'
})
.setPin('#services2', {pushFollowers: false});

var services3_pin = new ScrollMagic.Scene({
	triggerElement: '#services3',
	triggerHook: 'onLeave',
	duration: '100%'
})
.setPin('#services3', {pushFollowers: true});

var controller = new ScrollMagic.Controller({}).addScene([services1_pin, services2_pin, services3_pin]);