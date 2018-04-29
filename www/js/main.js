"use strict";

var audioElement;
var myObject = {
	twitterName: ''
}
var scannedObject = {
	twitterName: ''
}

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
	$.mobile.defaultPageTransition = "slide";
	$.mobile.defaultDialogTransition = "slide";

	// Add network listeners and show/hide splash
	document.addEventListener("online", onOnline, false);
	document.addEventListener("offline", onOffline, false);

	if (window.navigator.onLine) onOnline();
	else onOffline();

	// Load Data
	myObject.twitterName = window.localStorage.getItem("twitterName");

	// Add click listeners
	document.getElementById("scanClick").addEventListener("click", doScan);
	document.getElementById("twitterName").value = myObject.twitterName;

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
			  scannedObject.twitterName = result.text;
			  location.href = "#success";
		  }
      },
      function (error) {
          alert("Scanning failed: " + error);
      }
   );
}

function createCode() {
	$('#qrcode').empty();
	var code = new QRCode("qrcode");
	code.makeCode(myObject.twitterName);
}

$(document).on("pagebeforeshow", function () {});
$(document).on("pagecontainershow", function () {});
$(document).on("pagecontainerload", function (event, data) {});

$(document).on('pagecreate', '#menu', function () {
	console.log("pagecreate menu");
});
$('#twitterForm').on('submit', function () {
	var name = $('#twitterName').val();
	window.localStorage.setItem("twitterName", name);

	myObject.twitterName = name;
	document.getElementById("twitterName").value = name;

	createCode();

	location.href='#data';
	return false;
});

function LaunchTwitter() {
	 window.open('twitter://user?screen_name=' + scannedObject.twitterName, '_system', 'location=no');
}
