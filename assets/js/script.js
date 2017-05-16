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
	}, {
		offset: "50%"
	});
	// We actually aren't using "direction" in this case, because this animation will only happen once.

	// iPhone Image:
	$( ".js--wp-2" ).waypoint( function( direction ) {
		$( ".js--wp-2" ).addClass( "animated fadeInUp" );
	}, {
		offset: "50%"
	});

	// Cities:
	$( ".js--wp-3" ).waypoint( function( direction ) {
		$( ".js--wp-3" ).addClass( "animated fadeIn" );
	}, {
		offset: "50%"
	});

	// Plans:
	$( ".js--wp-4" ).waypoint( function( direction ) {
		$( ".js--wp-4" ).addClass( "animated pulse" );
	}, {
		offset: "50%"
	});

	// MAP

	new GMaps({
		div: '.map',
		lat: -12.043333,
		lng: -77.028333
	});

	// MOBILE NAVIGATION

	// Mobile Nav
	$( ".js--nav-icon" ).click( function() {
		
		var nav = $( ".js--main-nav" );
		var icon = $( ".js--nav-icon i" );

		// Open and close the box:
		nav.slideToggle( 200 );

		if ( icon.hasClass( "ion-navicon-round" )) {
			icon.addClass( "ion-close-round" );
			icon.removeClass( "ion-navicon-round" );
		} else {
			icon.addClass( "ion-navicon-round" );
			icon.removeClass( "ion-close-round" );
		}
		
	});

	// Ensure that .main-nav reappears after mobile nav has been closed and screen size increased again:
	// This works basically like a media query for jQuery, where we can take different actions depending on the screen width
	$( window ).resize( function() {

		var nav = $( ".js--main-nav" );
		var icon = $( ".js--nav-icon i" );

		if ( $( window ).width() > 767 ) {
			nav.css( "display", "block" );
			icon.addClass( "ion-close-round" );
			icon.removeClass( "ion-navicon-round" );
		} else {
			nav.css( "display", "none" );
			icon.addClass( "ion-navicon-round" );
			icon.removeClass( "ion-close-round" );
		}

	});

});