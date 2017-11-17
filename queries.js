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
  var forumName = forumUrl.substring(0,forumUrl.lastIndexOf("-")).replace(/%20/g," ");
  var forumId = forumUrl.substring(forumUrl.lastIndexOf("-")+1,forumUrl.length);

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

 function getPost(req, res){
  var threadUrl = req.originalUrl.replace("/thread/","");
  var threadName = threadUrl.substring(0,threadUrl.lastIndexOf("-")).replace(/%20/g," ");
  var threadId = threadUrl.substring(threadUrl.lastIndexOf("-")+1,threadUrl.length);

   models.posts.findAll({
      include: [{
        model: models.users,
      }],
      where: {
        thread_id: threadId
      },
   })
   .then(posts => {
     var allposts = [];
     var thispost;
     for(var post in posts){
         // Assign data Values to a var for cleaner handling
         var onlineStatus = checkUserOnline(req.sessionStore.sessions, posts[0].user.username);
         thispost = posts[post].dataValues;
         allposts.push([thispost.post_id, thispost.edited_by, thispost.user_uuid, thispost.content]);
     }
   
     // console.log("allposts: " + allposts)
     res.render('thread', {posts: allposts, originalUrl : req.originalUrl, threadName: threadName, username : posts[0].user.username, online : onlineStatus});
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

function viewProfile(req,res){
  var url = req.originalUrl;
  var user = url.substring(url.lastIndexOf("/")+1, url.length);
  

  models.users.findOne({
    // include: [{
    //     model: models.profiles,
    // }],
    where:{
      username: user
    }
  })
  .then(profile => {
    var user = req.session.user || "not logged in",
    email = false,
    fname = false,
    lname = false;
    var onlineStatus = checkUserOnline(req.sessionStore.sessions, user);

    if(user){
      if(user.uuid === profile.uuid){
        fname = profile.firstname;
        lname = profile.lastname;
        email = profile.uuid;
      }else{

      }
    }
   
    res.render("profile", {
      userName      : profile.username,
      fname         : fname,
      lname         : lname,
      joined        : profile.created_at,
      email         : email,
      onlineStatus  : onlineStatus
    });
  });
}

function checkUserOnline(sessions, user){
  for(var session in sessions){
    var session = JSON.parse(sessions[session])

    if(session.user){
      if(session.user.username === user){
        return true
        break;
      }
    }
  }
}

function createPost(req, res){
  var threadUrl = req.headers.referer;
  var threadId = threadUrl.substring(threadUrl.lastIndexOf("-")+1,threadUrl.length);
  models.posts.findOne({
    where: {
      thread_id : threadId
    },
    order: [
      ['post_id', 'DESC']
    ],
    attributes: ['post_id']
  }).then(id => {
  models.posts.create({
    post_id  : id.dataValues.post_id,
    edited_by : req.session.user.uuid,
    content : req.body.post,
    thread_id : threadId,
    user_uuid : req.session.user.uuid,
    created_by : req.session.user.uuid
  }).then(data => {
    res.json(data);
    res.redirect("/" + threadUrl);
  }).catch(err => {
    throw err;
  })
  });
  }
 
//function createThread(threadInfo){
  //const thread = models.threads.build({
    //thread_name  : threadInfo.thread_name,
    //last_poster : threadInfo.last_poster,
    //last_post_date : threadInfo.last_post_date,
  //});

  //thread.save();
//}

module.exports = {
  getUser     : getUser,
  getForum    : getForum,
  getThread   : getThread,
  getPost     : getPost,
  login       : login,
  viewProfile : viewProfile,
  createPost  : createPost
}