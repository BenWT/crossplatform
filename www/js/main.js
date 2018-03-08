"use strict";

var audioElement;

$(document).ready(function() {
	console.log("ready");
	init();
});

function onDeviceReady() {
	console.log("device ready");

	QRScanner.prepare(onDone);

	init();
}

function init() {

	// Sets the default transition
	$.mobile.defaultPageTransition = "slidefade";
	$.mobile.defaultDialogTransition = "slidefade";

	document.addEventListener("online", onOnline, false);
	document.addEventListener("offline", onOffline, false);

	if (window.navigator.onLine) onOnline();
	else onOffline();
}

function onDone(err, status){
	if (err) {
		// here we can handle errors and clean up any loose ends.
		console.error(err);
	}
	if (status.authorized) {
		// W00t, you have camera access and the scanner is initialized.
		// QRscanner.show() should feel very fast.
		// init();
		QRscanner.show();
	} else if (status.denied) {
		// The video preview will remain black, and scanning is disabled. We can
		// try to ask the user to change their mind, but we'll have to send them
		// to their device settings with `QRScanner.openSettings()`.
	} else {
		// we didn't get permission, but we didn't get permanently denied. (On
		// Android, a denial isn't permanent unless the user checks the "Don't
		// ask again" box.) We can ask again at the next relevant opportunity.
	}
}


function onOnline() {
	$("body").addClass("online");
	$("body").removeClass("offline");
}

function onOffline() {
	$("body").removeClass("online");
	$("body").addClass("offline");
}

$(document).on("pagebeforeshow", function () {});
$(document).on("pagecontainershow", function () {});
$(document).on("pagecontainerload", function (event, data) {});

$(document).on('pagecreate', '#menu', function () {
	console.log("pagecreate menu");
});
