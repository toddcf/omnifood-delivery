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

// ANIMATIONS ON SCROLL
// See JS30 #13.
// Debounce limits how many times per second a function can be invoked:
function debounce(func, wait = 20, immediate = true) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

const sliderImages = document.querySelectorAll('.animate'); // Change to the correct classname.

function checkSlide(e) {
	sliderImages.forEach(sliderImage => {
		// Animate each image when 50% of it is showing:
		const slideInAt = (window.scrollY + window.innerHeight) - (sliderImage.clientHeight / 2);
		
		// Animate back out when scrolled up:
		// Calculate how far the image is from the top of the screen, plus the height of the image:
		const imageBottom = sliderImage.offsetTop + sliderImage.clientHeight;

		// Confirm that the slide in value is greater than where the top of the image is:
		const isHalfShown = slideInAt > sliderImage.offsetTop;

		// Check that user has not scrolled all the way past the image:
		const isNotScrolledPast = window.scrollY < imageBottom;

		// If the image is half shown and not scrolled past, animate it:
		
		if (isHalfShown && isNotScrolledPast) {
			console.log('isHalfShown && isNotScrolledPast condition met.')
			sliderImage.classList.add('active');
			const sliderImageClasses = sliderImage.classList;
			if (
				sliderImageClasses.contains('js--wp-1') ||
				sliderImageClasses.contains('js--wp-3')
			) {
				sliderImage.classList.add('fadeIn');
			} else if (sliderImageClasses.contains('js--wp-2')) {
				sliderImage.classList.add('fadeInUp');
			} else if (sliderImageClasses.contains('js--wp-4')) {
				sliderImage.classList.add('pulse');
			}
		}
		// Otherwise, hide it again (but this iteration is breaking things):
		// else {
		// 	sliderImage.classList.remove('active');
		// 	if (sliderImageClasses.contains('fadeIn')) {
		// 		sliderImage.classList.remove('fadeIn');
		// 	} else if (sliderImageClasses.contains('fadeInUp')) {
		// 		sliderImage.classList.remove('fadeInUp');
		// 	} else if (sliderImageClasses.contains('pulse')) {
		// 		sliderImage.classList.remove('pulse');
		// 	}
		// }
	});
}

window.addEventListener('scroll', debounce(checkSlide));


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
	
	
	// MAP

	// Map starting location:
	// var map = new GMaps( {
	// 	div: '.map',
	// 	lat: 37.7576793,
	// 	lng: -122.30764,
	// 	zoom: 12
	// });

	// // Map marker:
	// map.addMarker( {
	// 	lat: 37.758952,
	// 	lng: -122.4132907,
	// 	title: 'San Francisco',
	// 	infoWindow: {
	// 		content: '<p>Our San Francisco HQ</p>'
	// 	}
	// });

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