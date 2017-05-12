$( document ).ready( function() {

	// STICKY NAV

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


	// BUTTON CLICK SCROLLING
	
	// I'm Hungry & Plans buttons:
	$( ".js--scroll-to-plans" ).click( function() {
		// Select HTML and BODY:
		$( "html, body" ).animate( { scrollTop: $( ".js--section-plans" ).offset().top }, 1000 );
	});

	// Show Me More & Features buttons:
	$( ".js--scroll-to-features" ).click( function() {
		// Select HTML and BODY:
		$( "html, body" ).animate( { scrollTop: $( ".js--section-features" ).offset().top }, 1000 );
	});

	// Works button:
	$( ".js--scroll-to-works" ).click( function() {
		// Select HTML and BODY:
		$( "html, body" ).animate( { scrollTop: $( ".js--section-works" ).offset().top }, 1000 );
	});

	// Cities button:
	$( ".js--scroll-to-cities" ).click( function() {
		// Select HTML and BODY:
		$( "html, body" ).animate( { scrollTop: $( ".js--section-cities" ).offset().top }, 1000 );
	});
	
	// ALTERNATIVE METHOD THAT DID NOT WORK:
	// $( function() {
	// 	$( "a[href*=#]:not([href=#])" ).click( function() {
	// 		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	// 			var target = $(this.hash);
				
	// 			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	// 			if (target.length) {
	// 				$( "html, body" ).animate( { scrollTop: target.offset().top }, 1000);
	// 				return false;
	// 			}
	// 		}
	// 	});
	// });

	// ANIMATIONS ON SCROLL

	// Features Section:
	$( ".js--wp-1" ).waypoint( function( direction ) {
		$( ".js--wp-1" ).addClass( "animated fadeIn" );
	});
	// We actually aren't using "direction" in this case, because this animation will only happen once.




});