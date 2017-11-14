var models = require("./models/index.js");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;



function getUser(num) {
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

function getForum(req, res){
  models.forums.findAll()
  .then(forums => {
    
    var allforums = [];
    var thisforum;
    for(var forum in forums){
        // Assign data Values to a var for cleaner handling
        thisforum = forums[forum].dataValues;
        allforums.push([thisforum.id, thisforum.forum_name, thisforum.description]);
    }

    res.render('index', {forums: allforums, user: res.locals.user});
  
  });
};

function getThread(res){
  models.threads.findAll()
  .then(threads => {
    // console.log(threads);
    var allthreads = [];
    var thisthread;
    for(var thread in threads){
          // Assign data Values to a var for cleaner handling
          thisthread = threads[thread].dataValues;
          // Assign forum name to its own var for easier handling
          threadName = thisthread.thread_name;

          lastPoster = thisthread.last_poster;

          lastPostDate = thisthread.last_post_date;

          threadId = thisthread.id;

        allthreads.push([threadId, threadName, lastPoster, lastPostDate]);
    }
    console.log("allthreads: " + allthreads)
    res.render('index', {threads: allthreads});
  });
};

function login(req, res){
  loginForm = req.body;

  models.users.findOne({ 
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

      }
    }
  backURL=req.header('Referer') || '/';
  res.redirect(backURL);
  });
}

module.exports = {
  getUser   : getUser,
  getForum  : getForum,
  getThread : getThread,
  login     : login
}