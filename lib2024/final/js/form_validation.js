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
			// Only change the text on text fields, not icons, as icons would be replaced by the text
			$("#results").find("#" + field.name + "_result").text(field.value);
		}

	})
}



