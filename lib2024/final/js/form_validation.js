window.onload = init;

function init() {

	$('#form').submit(function (e) {
   		 e.preventDefault();
   		 $("#results").removeClass('reveal');
   		 var form = this;

	});

}

function showformValues(form){

	var formValues = $(form).serializeArray(); 

		
	$.each(formValues, function(index, field){

		$("#results").find("#"+field.name+"_result").text(field.value);


		if(field.name=="email"){
			$("#results").find("#"+field.name+"_result").attr("href", "mailto:"+field.value);
		}
	})				
}
