$(document).ready(function(){
	
	$("#login").submit(function(event){
		
		if($("#login-username").val() === ""){
			$("#login-username").addClass("input-error");
			event.preventDefault();
		}

		if($("#login-password").val() === ""){
			$("#login-password").addClass("input-error");
			event.preventDefault();
		}
	});
});