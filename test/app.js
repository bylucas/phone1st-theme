// as the page loads, call these scripts
jQuery(document).ready(function ($) {

//Check to see if the window is top if not then display button
$(window).scroll(function () {
	if ($(this).scrollTop() > 300) {
		$('.back-to-top').fadeIn();
		} else {
		$('.back-to-top').fadeOut();
}
});

// Page scrolling script
	$('a[href*="#"]:not([href="#"], [title])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

}); // end page load scripts