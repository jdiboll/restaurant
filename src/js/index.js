import $ from 'jquery';

import form_data from './template_for_forms';

import { lineOfText, commentSection, selectSeat } from './template_for_forms';


// import $ from 'jquery';


// var url = 'https://json-data.herokuapp.com/restaurant/news/1';

// $.ajax(url).then(function(data){
// 	$('#news').append(`
// 		<div class="news_wrapper">
// 			<div class="news_title">${data.title}</div>
// 			<div class="news_date">${data.date_published}</div>
// 			<div class="news_post">${data.post}</div>
// 		</div>
// 		`);
// });






// $.ajax(url).then(function(data){
// 	console.log(data);
// 	data.forEach(function({title, date_published, post}){
// 		$('#news').append(`
// 			<div class="news_wrapper">
// 				<div class="news_title">${title}</div>
// 				<div class="news_date">${date_published}</div>
// 				<div class="news_post">${post}</div>
// 			</div>
// 			`);
// 		console.log('work');
// 	});
// });


// 

// var $app = $('.app');

// form_data.forEach(function(datum) {
// 	var template;
// 	if (datum.type === "text" || datum.type === "email" || datum.type === "tel" || datum.type === "date") {
// 		template = lineOfText;
// 	} else if (datum.type === "textarea") {
// 		template = commentSection;
// 	} else if (datum.type === "select") {
// 		template = selectSeat;
// 	}
// 	var html = template(datum);
// 	$app.append(html);
// });

























































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