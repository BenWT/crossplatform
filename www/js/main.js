"use strict";

var audioElement;

$(document).ready(function() {
	console.log("ready");
	init();
});

function onDeviceReady() {
	console.log("device ready");
	init();
}

function init() {

	// Sets the default transition
	$.mobile.defaultPageTransition = "fade";
	$.mobile.defaultDialogTransition = "fade";

	document.addEventListener("online", onOnline, false);
	document.addEventListener("offline", onOffline, false);

	if (window.navigator.onLine) onOnline();
	else onOffline();

	createCode();
}

function onOnline() {
	$("body").addClass("online");
	$("body").removeClass("offline");
}

function onOffline() {
	$("body").removeClass("online");
	$("body").addClass("offline");
}

function doScan() {
	cordova.plugins.barcodeScanner.scan(
      function (result) {
		  if (!result.cancelled) {
			  alert("success");
		  } else {
			  // cancelled
		  }
      },
      function (error) {
          alert("Scanning failed: " + error);
      }
   );
}

function createCode() {
	var code = new QRCode("qrcode");
	code.makeCode("test123456");
}

$(document).on("pagebeforeshow", function () {});
$(document).on("pagecontainershow", function () {});
$(document).on("pagecontainerload", function (event, data) {});

$(document).on('pagecreate', '#menu', function () {
	console.log("pagecreate menu");
});
