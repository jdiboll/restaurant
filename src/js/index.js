// Javascript Entry Point
// Javascript Entry Point
import $ from 'jquery';

import form_data from './template_for_forms';

import { lineOfText, commentSection, selectSeat } from './template_for_forms';


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
