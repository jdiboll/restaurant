export var formArray = [
{	
	"type":"text",
      "label":"Full Name",
      "id":"user-full-name",
      "options":[  

      ]
},
{	
	"type":"text",
      "label":"Number of Guests",
      "id":"num_guests",
      "options":[  

      ]
},
{	
	"type":"tel",
      "label":"Telephone Number",
      "id":"user-phone",
      "options":[  

      ]
},
{	
	"type":"date",
      "label":"Reservation Date",
      "id":"date-request",
      "options":[  

      ]
},
{  
      "type":"select",
      "label":"Seating Preference",
      "id":"user-seat-preference",
      "options":[  
         {  
            "label":"Indoors",
            "value":"inside"
         },
         {  
            "label":"Patio",
            "value":"outdoor"
         },
         {  
            "label":"No Preference",
            "value":"none"
         }
      ]
},
{  
      "type":"textarea",
      "label":"Comments",
      "id":"user-comment",
      "options":[  

      ]
},
];


export var formReviews = [
{  
      "type":"text",
      "label":"Full Name",
      "id":"user-full-name",
      "options":[  

      ]
},
{  
      "type":"email",
      "label":"Email Address",
      "id":"user-email",
      "options":[  

      ]
},
{  
      "type":"text",
      "label":"Subject",
      "id":"email-subject",
      "options":[  

      ]
},
   {  
      "type":"textarea",
      "label":"Comments",
      "id":"user-comment",
      "options":[  

      ]
},
];




//GIVING ME ERROR of ParseError: 'import' and 'export' may appear only with 'sourceType: module'
export function lineOfText(obj) {
	return `
	<label for="${obj.id}">     ${obj.label}     </label>
 		<input type="${obj.type}" 	id="${obj.id}">
 		<br>
 		`
 }

export function commentSection(comment) {
	return `
		<label for="${comment.id}"> ${comment.label}   </label>
		<textarea type="textarea" id="${comment.id}">
 		<br>
 		`
};

export function selectSeat(prefer){
	var seatPref = prefer.options;
	var prefHtml = seatPref.map (function(seat) {
		return `<option value="${seat.value}">${seat}</option>`
	});	

	prefHtml = prefHtml.join('');

	return `
	 	<label for="${prefer.id}">${prefer.label}     </label>
	 	<select id="${prefer.id}"> 
 			<option value="none">No Preference</Option>
 			<option value="inside">Indoors</Option>
 			<option value="outdoor">Patio</Option>
 		</select>
 		<br>
 	`
};








