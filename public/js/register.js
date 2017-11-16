$(document).ready(function(){
	console.log("test");
	$("#registersubmit").on("click",function(event){
		event.preventDefault();

		var foo = {
			first 	 : $("#register-firstname").val(),
			last 		 : $("#register-lastname").val(),
			username  : $("#register-username").val(),
			email		 : $("#register-email").val(),
			password	 : $("#register-password").val(),
			passwordc : $("#register-passwordC").val()
		};

		$.ajax({
			type: "put",
			url: "/registersubmit",
			contentType: "application/json",
			data: JSON.stringify(foo) 		 
		});
	});
});