import $ from 'jquery';

<<<<<<< HEAD
// import formArray from './template_for_forms';
=======
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
>>>>>>> dcff76454e8e123c21281b88be018cd165e84a52

import { formArray, lineOfText, commentSection, selectSeat } from './template_for_forms';



var url2 = 'https://json-data.herokuapp.com/restaurant/news/1';
$.ajax(url2).then(function(data){
	$('#news').append(`
		<div class="news_wrapper">
			<div class="news_title">${data.title}</div>
			<div class="news_date">${data.date_published}</div>
			<div class="news_post">${data.post}</div>
		</div>
		`);
	console.log('work');
});
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

<<<<<<< HEAD
var $reservation = $('.reservation');

formArray.forEach(function(datum) {
	var template;
	if (datum.type === "text" || datum.type === "email" || datum.type === "tel" || datum.type === "date") {
		template = lineOfText;
	} else if (datum.type === "textarea") {
		template = commentSection;
	} else if (datum.type === "select") {
		template = selectSeat;
	}
	var html = template(datum);
	$reservation.append(html);
});
=======
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
>>>>>>> dcff76454e8e123c21281b88be018cd165e84a52

















































$.ajax(url).then(function(data) {

	var drinks = data.Beer;
	var food = data.entrees;
	var games = data.games;


	function todaySpecial () {

		var today = new Date();
		var dayOfWeek = today.getDay();

		if (dayOfWeek === 0) {
			todaySpecial = drinks[0];
		} else if (dayOfWeek === 1) {
			todaySpecial = food[0];
		} else if (dayOfWeek === 2) {
			todaySpecial === drinks[1];
		} else if (dayOfWeek === 3) {
			todaySpecial = food[1];
		} else if (dayOfWeek === 4) {
			todaySpecial = drinks[2];
		} else if (dayOfWeek === 5) {
			todaySpecial = drinks[2];
		} else if (dayOfWeek === 6) {
			todaySpecial = food[3];
		};
console.log('work more');

	var foodSpecial = document.querySelector('.today_special');

	foodSpecial.innerHTML = `<div class="specialName">${drinks.item}</div>
		<div class="specialPrice">${drinks.price}</div>
		<div class="specialDescrip">${drinks.description}</div>`;
	
}});



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



 //function nowYear() {
	 //var today;
	 //var currentYear;

	 //today = new Date();
	 //currentYear = today.getFullYear();

	 //var copyrightYear = document.querySelector('.copyright')

  	//copyrightYear.innerHTML = `&copy; ${currentYear} Ye Olde.`;
  //};

  //var intID = window.setInterval(nowYear, 1000);

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

 var intID = window.setInterval(nowYear, 86400000);


