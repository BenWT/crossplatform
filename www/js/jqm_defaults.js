// JavaScript Document
jQuery(document).bind("mobileinit", function () {

	// console.log('mobile init');
	// //look these up as they will have an effect on performence
	// jQuery.mobile.changePage.defaults.changeHash = true;
	// jQuery.mobile.hashListeningEnabled = true;
	// jQuery.mobile.pushStateEnabled = false;
	// jQuery.support.cors = true;
	// jQuery.mobile.allowCrossDomainPages = true;
	// jQuery.mobile.changePage.defaults.allowSamePageTransition = false;
	//
	// //IMPORTANT
	// jQuery.mobile.phonegapNavigationEnabled = true;
	// //IMPORTANT
	// jQuery.mobile.defaultPageTransition = 'flow';
	// /*
	// fade
	// pop
	// flip
	// turn
	// flow
	// slidefade
	// slide
	// slideup
	// slidedown

	console.log('init');
	$.mobile.changePage.defaults.changeHash = true;
	$.mobile.hashListeningEnabled = true;
	$.mobile.pushStateEnabled = false;
	$.support.cors = true;
	$.mobile.allowCrossDomainPages = true;
	$.mobile.changePage.defaults.allowSamePageTransition = false;
	$.mobile.phonegapNavigationEnabled = true;
	jQuery.mobile.defaultPageTransition='slide';

});
