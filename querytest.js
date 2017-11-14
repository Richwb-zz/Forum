const Models = require("./models/index.js");
const Sequelize = require('sequelize');
const queries = require("./queries.js");
const Op = Sequelize.Op;

function login(req, res){
	loginForm = req.body;

	Models.users.findOne({ 
		where: { 
			[Op.or]: [
				{
					username: loginForm.account
				},
				{
					Email: loginForm.account
				}
			]
		}
	})
	.then(user => {
		if(user){
			if(user.validPassword(loginForm.password)){
				req.session.user = user.dataValues;
				req.session.save();
			}else{
				console.log("fail");
			}
		}
		queries.getForum(req,res);
	});
}

module.exports.login = login;