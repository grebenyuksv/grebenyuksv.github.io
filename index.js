var tween1 = new TimelineMax()
	.fromTo(
		'#rslides',
		1,
		{
			x: '100%',
			y: '100%',
		},
		{
			x: '-100%',
			y: '-100%',
		},
	)
	.fromTo(
		'#slider-demo',
		1,
		{
			x: '-100%',
			y: '-100%',
		},
		{
			x: '100%',
			y: '100%',
		},
		0,
	);

var tween2 = new TimelineMax()
	.fromTo(
		'#rslides',
		1,
		{
			x: '100%',
			y: '100%',
		},
		{
			x: '-1%',
			y: '-1%',
		},
	)
	.fromTo(
		'#slider-demo',
		1,
		{
			x: '-100%',
			y: '-100%',
		},
		{
			x: '1%',
			y: '1%',
		},
		0,
	);

var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
	triggerElement: '#trigger1',
	duration: '100%',
})
	.setTween(tween1)
	.addTo(controller);
// new ScrollMagic.Scene({
// 	triggerElement: '#trigger2',
// 	duration: '100%',
// 	// offset: '-100%'
// })
// 	.setTween(tween2)
// 	.addTo(controller);

$(document).ready(function() {
	$('#slider-demo').freeSimpleSlider({
		dots: false, // pagination bullets
		arrows: false, // navigation arrows
		time: 1000,
		animation: 'slide',
	});
});
