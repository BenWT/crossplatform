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
	$.mobile.defaultPageTransition = "slidefade";
	$.mobile.defaultDialogTransition = "slidefade";

	document.addEventListener("online", onOnline, false);
	document.addEventListener("offline", onOffline, false);

	if (window.navigator.onLine) onOnline();
	else onOffline();
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
