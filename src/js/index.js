import $ from 'jquery';

// import form_data from './template_for_forms';

// import { lineOfText, commentSection, selectSeat } from './template_for_forms';

// //need section of html that we'll put this in
// //var $app = $('.app');

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
//need html to place onto site
//	$app.append(html);
//	return html;
//});

//-----------------------------------------------

var url = 'https://json-data.herokuapp.com/restaurant/menu/3';


$.ajax(url).then(function(data) {

	var drinks = data.Beer;
	var food = data.entrees;
	var games = data.games;

	drinks.forEach(function(datum){
		$('.menu').append(`
			<div class="nameBeer"> ${datum.item} </div>
			<div class="priceBeer"> ${datum.price} </div>
			<div class="descripBeer"> ${datum.description} </div>
			<div class="styleBeer">${datum.style} </div>
			<div class="alcohol_content"> ${datum.abv} </div>

			`)});
	food.forEach(function(datum){
		$('.menu').append(`
			<div class="nameFood"> ${datum.item} </div>
			<div class="priceFood"> ${datum.price} </div>
			<div class="descripFood"> ${datum.description} </div>
			`)});
	games.forEach(function(datum){
		$('.menu').append(`
			<div class="nameGame"> ${datum.item} </div>
			<div class="priceGame"> ${datum.price} </div>
			<div class="platformGame">${datum.platform} </div>
			<div class="descripGame"> ${datum.description} </div>
			<div class="rateGame"> ${datum.rating}</div>
			`)});

	});






// // 

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

// function nowSeconds() {
// 	var today;
// 	var currentSeconds;

// 	today = new Date();
// 	currentSeconds = today.getSeconds();

// 	var copyrightSeconds = document.querySelector('.copyright')

//  	copyrightSeconds.innerHTML = `&copy; ${currentSeconds} Ye Olde.`;
//  };

//  var intID = window.setInterval(nowSeconds, 1000);



function nowYear() {
	var today;
	var currentYear;

	today = new Date();
	currentYear = today.getFullYear();

	var copyrightYear = document.querySelector('.copyright')

 	copyrightYear.innerHTML = `&copy; ${currentYear} Ye Olde.`;
 };

 var intID = window.setInterval(nowYear, 1000);

