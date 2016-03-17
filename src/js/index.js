// Javascript Entry Point

import $ from 'jquery';

// import { getYear, getSeconds } from './current_year'

// news


// special_api


// google_maps


// menu


// reservations


// reviews


// current_year

function nowSeconds() {
	var today;
	var currentSeconds;

	today = new Date();
	currentSeconds = today.getSeconds();

	var copyrightSeconds = document.querySelector('.copyright')

 	copyrightSeconds.innerHTML = `&copy; ${currentSeconds} Ye Olde.`;
 };

 var intID = window.setInterval(nowSeconds, 1000);