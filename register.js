var models = require("./models/index.js");
const Sequelize = require('sequelize');

function registrationCheck(userInput,res){
	models.users.findOne({
		where: {
			username: userInput.username
		}
	})
	.then(user => {
		if(!user){
			validateEmail(userInput.email);
			validatePassword(userInput.password, userInput.passwordC);
			createUser(userInput);
			res.redirect("/");
		}
	})
	.catch(function (err) {
		console.log(err);
	});
}

function validateEmail(emailAddress){
	var emailExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return emailExpression.test(emailAddress);
}

function validatePassword(password, passwordC){
	var comparisonCheck = false,
	lengthCheck = false,
	upperCaseCheck = false,
	numberCheck = false,
	letterCheck = false;

	if(password === passwordC){
		comparisonCheck = true;
	}

	if(password.length >= 8){
		lengthCheck = true;
	}

	for (var i = password.length - 1; i >= 0; i--) {
		if(password[i] === password[i].toUpperCase()){
			upperCaseCheck = true;
			break;
		}
	}

	if(password.match(/\d+/g)) {
		numberCheck = true;
	}

	if (password.match(/[a-z]/i)) {
		letterCheck = true;
	}
}

function createUser(userInfo){
	const user = models.users.build({
		username	: userInfo.username,
		password : userInfo.password,
		firstname: userInfo.first,
		lastname	: userInfo.last,
		email 	: userInfo.email,
	});

	user.save();
}

module.exports.registrationCheck = registrationCheck;