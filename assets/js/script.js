// See JS30 #24.
const stickyNavHandler = {
	nav: document.querySelector('.nav'),
	stick: () => {
		if (window.scrollY >= stickyNavHandler.nav.clientHeight / 2) {
			stickyNavHandler.nav.classList.add('sticky');
			document.body.style.paddingTop = `${stickyNavHandler.nav.offsetHeight}px`;
		} else {
			stickyNavHandler.nav.classList.remove('sticky');
			document.body.style.paddingTop = 0;
		}
	},
	init: () => {
		window.addEventListener('scroll', stickyNavHandler.stick);
	}
}

stickyNavHandler.init();

// Previous jQuery version:
$( document ).ready( function() {

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
	
	// ANIMATIONS ON SCROLL
	// See JS30 #13.

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

	// Map starting location:
	var map = new GMaps( {
		div: '.map',
		lat: 37.7576793,
		lng: -122.30764,
		zoom: 12
	});

	// Map marker:
	map.addMarker( {
		lat: 37.758952,
		lng: -122.4132907,
		title: 'San Francisco',
		infoWindow: {
			content: '<p>Our San Francisco HQ</p>'
		}
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

		// If the screen is made smaller than 1024, redraw the map:
		// if ( $( window ).width() < 1024 ) {

		// 	// Map starting location:
		// 	var map = new GMaps( {
		// 		div: '.map',
		// 		lat: 37.758952,
		// 		lng: -122.4132907,
		// 		zoom: 12
		// 	});

		// 	// Map marker:
		// 	map.addMarker( {
		// 		lat: 37.758952,
		// 		lng: -122.4132907,
		// 		title: 'San Francisco',
		// 		infoWindow: {
		// 			content: '<p>Our San Francisco HQ</p>'
		// 		}
		// 	});
		// }

		// If the screen is then made larger than 1024 again, re-redraw the map.
		// else if ( $( window ).width() > 1024 ) {

		// 	// Map starting location:
		// 	var map = new GMaps( {
		// 		div: '.map',
		// 		lat: 37.7576793,
		// 		lng: -122.30764,
		// 		zoom: 12
		// 	});

		// 	// Map marker:
		// 	map.addMarker( {
		// 		lat: 37.758952,
		// 		lng: -122.4132907,
		// 		title: 'San Francisco',
		// 		infoWindow: {
		// 			content: '<p>Our San Francisco HQ</p>'
		// 		}
		// 	});
		// }

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