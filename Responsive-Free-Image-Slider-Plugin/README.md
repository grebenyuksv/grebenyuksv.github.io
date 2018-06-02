# Free Simple Slider
Slider with very simple to use. Contains only a few necessary options.

## Getting Started
Copy free-simple-slider.css file to css directory in your project and free-simple-slider.js file js directory.
Next just add a link to the css file in your <heade>:

```html
<link rel="stylesheet" href="free-simple-slider.css" type="text/css" media="all"/>
```

Then, before your closing <body> tag add:

```html
<script src="js/free-simple-slider.js"></script>
```

Ok, now you need to write some code in your script.js file to fire the slider:

```javascript
$(document).ready(function () {
    $('your-slider-ul-selector-here').freeSimpleSlider({
        //If you like, you may set some option here
    });
});
```

## Options
If you want, you can turn on or turn of a few options of the slider. Example below:

```javascript
$(document).ready(function () {
    $('your-slider-ul-selector-here').freeSimpleSlider({
        dots: false,
        arrows: false,
        time: 5000,
        animation: "fade"
    });
});
```

Table with plugin options

Option |Default | Value 1 | Value 2 | Value 3
--- | --- | --- | --- | ---
**dots**| false  | true | false |
**arrows** | true | true | false |
**time**| 5000 | number of milliseconds | | |
**animation** | "fade" | "basic" | "fade" | "slide"

## Swipe

Free Simple Sliders contains the [hammer.js](http://hammerjs.github.io/examples/) library which allow to swipe navigation on mobile devices. It is optional.

To handle a swipe event copy hammer.min.js file to your js directory and before your closing <body> tag add:

```html
<script src="js/hammer.min.js"></script>
```
and that's it! You can enjoy your new very simple slider on your website.

## Version

0.1.0

## License

The MIT License (MIT)
