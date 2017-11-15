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

function getThread(req, res){
  var forumUrl = req.originalUrl.replace("/forum/","");
  var forumName = forumUrl.substring(0,forumUrl.lastIndexOf("-"));
  var forumId = forumUrl.substring(forumUrl.lastIndexOf("-")+1,forumUrl.length);
  console.log(forumId)
  models.threads.findAll({
    where: {
      forum_id: forumId
    }
  })
  .then(threads => {

    var allthreads = [];
    var thisthread;
    for(var thread in threads){
        // Assign data Values to a var for cleaner handling
        thisthread = threads[thread].dataValues;
    
        allthreads.push([thisthread.id, thisthread.thread_name, thisthread.last_poster, thisthread.last_post_date]);
    }

    res.render('forum', {threads: allthreads, originalUrl : req.originalUrl, forumName: forumName});
  });
};

// function getPost(res){
//   models.posts.findAll()
//   .then(posts => {
//     // console.log(threads);
//     var allposts = [];
//     var thispost;
//     for(var post in posts){
//         // Assign data Values to a var for cleaner handling
//         thispost = posts[post].dataValues;
//         allposts.push([thispost.post_id, thispost., thisthread.lastPoster, lastPostDate]);
//     }
   
//     console.log("allthreads: " + allthreads)
//     res.render('index', {threads: allthreads});
//   });
// };

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