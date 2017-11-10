$(document).ready(function(){
	
	$("#login").submit(function(event){

		if(usn_in === ""){
			$("#login-username").addClass("input-error");
			event.preventDefault();
		}

		if(pass_in === ""){
			$("#login-password").addClass("input-error");
			event.preventDefault();
		}

	});
});