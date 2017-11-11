var models = require("./models/index.js");

module.exports.signInValidation = function(user){
	models.users.findAll({
	[Op.or]: [
    {
      username: user
    },
    {
      Email: user
    }
  ]
})
	.then(users => {
		
	})
};

module.exports.getUser = function(num) {
    var userId = parseInt(num);
    // Make query
    if (user_id) {
      models.users.findOne({
        include: [{ profile: models.profiles }],
        where: { uuid: user_id },
      }).then((results) => {
        if (!results) {
          resolve({}); // if no user, return empty object not NULL
        } else {
          resolve(results);
        }
      }); 
    } else {
      models.users.findAll({}).then((results) => {
        if (!results) {
          resolve({}); // if no user, return empty object not NULL
        } else {
          resolve(results);
        }
      })
    }
  }; // end of Promise

module.exports.getForum = function(res){
  models.forums.findAll()
  .then(forums => {
    // console.log(forums);
    var allforums = [];
    var thisforum;
    for(var forum in forums){
          // Assign data Values to a var for cleaner handling
          thisforum = forums[forum].dataValues;
          // Assign forum name to its own var for easier handling
          forumName = thisforum.forum_name;

          forumDesc = thisforum.description;

          forumId = thisforum.id;

        allforums.push([forumName, forumDesc, forumId]);
}

    res.render('index', {forums: allforums});
  });
};