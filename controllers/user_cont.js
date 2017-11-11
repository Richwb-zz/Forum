var db = require('../models');

module.exports.getUser = function(num) {
  return new Promise((resolve, reject) => {
    var userId = parseInt(num);
    // Make query
    if (user_id) {
      db.users.findOne({
        include: [{ profile: db.profiles }],
        where: { uuid: user_id },
      }).then((results) => {
        if (!results) {
          resolve({}); // if no user, return empty object not NULL
        } else {
          resolve(results);
        }
      }); 
    } else {
      db.users.findAll({}).then((results) => {
        if (!results) {
          resolve({}); // if no user, return empty object not NULL
        } else {
          resolve(results);
        }
      })
    }
  }); // end of Promise
};