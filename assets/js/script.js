$( document ).ready( function() {

	// Sticky Nav:
	$( ".js--section-features" ).waypoint( function( direction ) {
		// If user scrolls down, add "sticky" class to <nav> element:
		if ( direction == "down" ) {
			$( "nav" ).addClass( "sticky" );
		}
		// If user scrolls up, remove "sticky" class from <nav> element:
		else {
			$( "nav" ).removeClass( "sticky" );
		}
	}, {
		offset: "60px;"
	});

	// Scroll on Button-Clicks:
	
	// I'm Hungry button:
	$( ".js--scroll-to-plan" ).click( function() {
		// Select HTML and BODY:
		$( "html, body" ).animate( { scrollTop: $( ".js--section-plans" ).offset().top }, 1000);
	});

	// Show Me More button:
	$( ".js--scroll-to-start" ).click( function() {
		// Select HTML and BODY:
		$( "html, body" ).animate( { scrollTop: $( ".js--section-features" ).offset().top }, 1000);
	});

	// Navigation Scrolling (using jQuery snippets):
	$( function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {

				var target = $(this.hash);
				
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate( { scrollTop: target.offset().top }, 1000);
					return false;
				}
			}
		});
	});

});