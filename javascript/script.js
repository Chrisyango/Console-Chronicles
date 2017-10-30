$(document).ready(function() {
var openbtn = $(".openbtn")
var closebtn = $(".closebtn")
var nav = $(".nav")

	$('body').css("display", "none");
	$('body').fadeIn(1200);

	openbtn.click(function() {
		nav.css("height", "100vh");
		openbtn.delay(500).fadeOut(500);
		closebtn.delay(800).fadeIn(500);
	});

	closebtn.click(function() {
		nav.css("height", "0vh");
		closebtn.delay(500).fadeOut(500);
		openbtn.delay(800).fadeIn(500);
	});

});