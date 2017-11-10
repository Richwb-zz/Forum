var models = require("../models/index.js");


function signInValidation(){
	models.users.findAll({
	[Op.or]: [
    {
      username: 
    },
    {
      Email:
    }
  ]
});
};

