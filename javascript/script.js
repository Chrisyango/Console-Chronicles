$(document).ready(function() {

	$("body").css("display", "none");
	$("body").fadeIn(2000);

	$(".header-content").css("display", "none");
	$(".header-content").delay(2100).fadeIn(2200);


/* WINDOW SCROLLING --------------------------------- */
	$(window).scroll(function() {
		var wScroll = $(this).scrollTop();

		if(wScroll > $(".main-content").offset().top - ($(window).height() / 1.2)) {
			$(".main-content .item").each(function(i) {

				setTimeout(function() {
					$(".main-content .item").eq(i).addClass('showing');
				}, 270 * (i+1));
			});
		}
	});


/* NAVIGATION --------------------------------- */
	var openbtn = $(".openbtn")
	var closebtn = $(".closebtn")
	var navbtn = $(".navbtn")
	var nav = $(".nav")

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

	navbtn.click(function() {
		nav.css("height", "0vh");
		closebtn.delay(500).fadeOut(500);
		openbtn.delay(800).fadeIn(500);
	});

	 // Add smooth scrolling to all links
	$(".navbtn").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    	if (this.hash !== "") {
      // Prevent default anchor click behavior
    		event.preventDefault();

      // Store hash
    		var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    		$('html, body').delay(900).animate({
    			scrollTop: $(hash).offset().top
    		}, 1000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
    		window.location.hash = hash;
    		});
    	} // End if
	});

	$(".start").on('click', function(event) {

    	if (this.hash !== "") {
    		event.preventDefault();
    		var hash = this.hash;
    		$('html, body').delay().animate({
    			scrollTop: $(hash).offset().top
    		}, 1000, function(){
    		window.location.hash = hash;
    		});
    	}
	});


/* MASONRY --------------------------------- */
	$("#grid").masonry({
		itemSelector: ".item",
		columnWidth: ".grid-sizer",
		percentPosition: true
	});


/* PODCAST --------------------------------- */
	$("#left-arrow").click(function() {
		$(".next").removeClass().addClass("placeholder");
		$(".next2").removeClass().addClass("next");
		$(".prev2").removeClass().addClass("next2");
		$(".prev").removeClass().addClass("prev2");
		$(".selected").removeClass().addClass("prev")
		$(".placeholder").removeClass().addClass("selected");
	});
	$("#right-arrow").click(function() {
		$(".prev").removeClass().addClass("placeholder");
		$(".prev2").removeClass().addClass("prev");
		$(".next2").removeClass().addClass("prev2");
		$(".next").removeClass().addClass("next2");
		$(".selected").removeClass().addClass("next")
		$(".placeholder").removeClass().addClass("selected");
	});

});