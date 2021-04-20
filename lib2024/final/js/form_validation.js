window.onload = init;

function init() {

	$('#form').submit(function (e) {
   		 e.preventDefault();
   		 $("#results").removeClass('reveal');
   		 var form = this;

	});

}

function submitButtonClick() {
	showformValues(document.getElementById("form"));
}

function showformValues(form){

	var formValues = $(form).serializeArray(); 

		
	$.each(formValues, function (index, field) {

		if (field.name == "email") {
			$("#results").find("#" + field.name + "_result").attr("href", "mailto:" + field.value);
		} else {

			$("#results").find("#" + field.name + "_result").text(field.value);
		}

	})
}

//I had some issues with the profile thing, keeping the John Doe info in, so I took it out. The results will still show though.


