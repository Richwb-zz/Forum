var models = require("models/index.js");


function signInValidation(user){
	models.users.findAll({
	[Op.or]: [
    {
      username: user
    },
    {
      Email: user
    }
  ]
});
	.then(users => {
		
	})
};

