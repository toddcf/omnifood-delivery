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

});