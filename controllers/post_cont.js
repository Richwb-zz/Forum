var db = require('../models');

module.exports.getUser = function(num) {
  return new Promise((resolve, reject) => {
    var userId = parseInt(num);
    // Make query
    if (userId) {
      Models.User.findOne({
        include: [{ model: Models.Avatar }],
        where: { id: userId },
        attributes: { exclude: ['password_hash'] },
      }).then((results) => {
        if (!results) {
          resolve({}); // if no user, return empty object not NULL
        } else {
          resolve(results);
        }
      }); 
    } else {
      Models.User.findAll({
        attributes: { exclude: ['password_hash'] },
      }).then((results) => {
        if (!results) {
          resolve({}); // if no user, return empty object not NULL
        } else {
          resolve(results);
        }
      })
    }
  }); // end of Promise
};