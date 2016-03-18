import $ from 'jquery';


// import formArray from './template_for_forms';

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
			`)
		if (datum.allergies > 0) {
			$('.menu').append(`
				<i class="fa fa-exclamation-circle" title="Allergy Info" alt="Allergy Info"></i>`
		)};
		if (datum.favorite > 0) {
			$('.menu').append(`
				<i class="fa fa-star" title="Favorites" alt="Favorites"></i>`
		)};
		if (datum.bottle > 0) {
			$('.menu').append(`
				<i class="fa fa-cog" title="Comes in bottle" alt="Comes in bottle"></i>`
		)};
		if (datum.draught > 0) {
			$('.menu').append(`
				<i class="fa fa-beer" title="Comes in draught" alt="Comes in draught"></i>`
		)};
	});

	food.forEach(function(datum){
		$('.menu').append(`
			<div class="nameFood"> ${datum.item} </div>
			<div class="priceFood"> ${datum.price} </div>
			<div class="descripFood"> ${datum.description} </div>
			`)
		if (datum.allergies > 0) {
			$('.menu').append(`
				<i class="fa fa-exclamation-circle" title="Allergy Info" alt="Allergy Info"></i>`
		)};
		if (datum.favorite > 0) {
			$('.menu').append(`
				<i class="fa fa-star" title="Favorites" alt="Favorites"></i>`
		)};
		if (datum.spicy > 0) {
			$('.menu').append(`
				<i class="fa fa-fire" title="Is spicy" alt="Is spicy"></i>`
		)};
		if (datum.vegan > 0) {
			$('.menu').append(`
				<i class="fa fa-leaf" title="Vegan Friendly" alt="Vegan Friendly"></i>`
		)};
	});

	games.forEach(function(datum){
		$('.menu').append(`
			<div class="nameGame"> ${datum.item} </div>
			<div class="priceGame"> ${datum.price} </div>
			<div class="platformGame">${datum.platform} </div>
			<div class="descripGame"> ${datum.description} </div>
			<div class="rateGame"> ${datum.rating}</div>
			`)
		if (datum.favorite > 0) {
			$('.menu').append(`
				<i class="fa fa-star" title="Favorites" alt="Favorites"></i>`
		)};
		if (datum.online > 0) {
			$('.menu').append(`
				<i class="fa fa-wifi" title="Has online capability" alt="Has online capability"></i>`
		)};
		if (datum.multiplayer > 0) {
			$('.menu').append(`
				<i class="fa fa-gamepad" title="Has Multiplayer" alt="Has Multiplayer"></i>`
			)};
		});
	});


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




// // 


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


















































$.ajax(url).then(function(data) {

	// console.log(data);

	var drinks = data.Beer;
	// console.log(drinks);
	var food = data.entrees;
	// console.log(food);
	var games = data.games;


	// function todaySpecial () {

	var mySpecial = "fucking things";
	var today = new Date();
	var dayOfWeek = today.getDay();
	console.log(dayOfWeek);

	if (dayOfWeek === 0) {
		mySpecial = drinks[0];
		console.log(mySpecial);
	} else if (dayOfWeek === 1) {
		mySpecial = food[0];
		console.log(mySpecial);
	} else if (dayOfWeek === 2) {
		mySpecial === drinks[1];
		console.log(mySpecial);
	} else if (dayOfWeek === 3) {
		mySpecial = food[1];
		console.log(mySpecial);
	} else if (dayOfWeek === 4) {
		mySpecial = drinks[2];
		console.log(mySpecial);
	} else if (dayOfWeek === 5) {
		mySpecial = drinks[2];
		console.log(mySpecial);
	} else if (dayOfWeek === 6) {
		mySpecial = food[3];
		console.log(mySpecial);
	};

	// return mySpecial;
	// console.log('work more');

	var foodSpecial = document.querySelector('#special');

	foodSpecial.innerHTML = `<div class="specialName">${mySpecial.item}</div>
		<div class="specialPrice">${mySpecial.price}</div>
		<div class="specialDescrip">${mySpecial.description}</div>`;
	
// }
});



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
