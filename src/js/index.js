import $ from 'jquery';

import form_data from './template_for_forms';

import { lineOfText, commentSection, selectSeat } from './template_for_forms';


// 

var $app = $('.app');

form_data.forEach(function(datum) {
	var template;
	if (datum.type === "text" || datum.type === "email" || datum.type === "tel" || datum.type === "date") {
		template = lineOfText;
	} else if (datum.type === "textarea") {
		template = commentSection;
	} else if (datum.type === "select") {
		template = selectSeat;
	}
	var html = template(datum);
	$app.append(html);
});

























































// Function for the bottom copyright date.

function nowSeconds() {
	var today;
	var currentSeconds;

	today = new Date();
	currentSeconds = today.getSeconds();

	var copyrightSeconds = document.querySelector('.copyright')

 	copyrightSeconds.innerHTML = `&copy; ${currentSeconds} Ye Olde.`;
 };

 var intID = window.setInterval(nowSeconds, 1000);



// function nowYear() {
	// var today;
	// var currentYear;

	// today = new Date();
	// currentYear = today.getFullYear();

	// var copyrightYear = document.querySelector('.copyright')

 // 	copyrightYear.innerHTML = `&copy; ${currentYear} Ye Olde.`;
 // };

 // var intID = window.setInterval(nowYear, 1000);