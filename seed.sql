INSERT INTO users
  (uuid,username,password,Firstname,Lastname,Email,created_at, updated_at)
VALUES
  (uuid(),"Tester","$2a$08$2HngBzrHC8fgB32vfWNbsukbaqlaATaO0SrUVw4kYpLp7xosyYVwK","test","er","Test@45hq3ag.com", NOW(), NOW());

INSERT INTO forums
    (forum_name,description)
VALUES
    ("happy fun time forum", "Place to come and have a happy fun time"),
    ("WOW", "Okie Dokie"),
    ("Starcraft", "You must build additional pylons");

INSERT INTO threads
  (thread_name,last_poster,last_post_date,created_at,updated_at, created_by, forum_id)
VALUES
  ("Nuclear Launch Detected","tester", NOW(),NOW(),NOW(),
  (SELECT uuid FROM users WHERE username="tester"), 
  (SELECT id FROM forums WHERE forum_name="Starcraft"));

INSERT INTO threads
  (thread_name,last_poster,last_post_date,created_at,updated_at, created_by, forum_id)
VALUES
  ("Work, Work","tester", NOW(),NOW(),NOW(),
  (SELECT uuid FROM users WHERE username="tester"), 
  (SELECT id FROM forums WHERE forum_name="Wow"));

INSERT INTO threads
  (thread_name,last_poster,last_post_date,created_at,updated_at, created_by, forum_id)
VALUES
  ("Super Happy Fun Ball","tester", NOW(),NOW(),NOW(),
  (SELECT uuid FROM users WHERE username="tester"), 
  (SELECT id FROM forums WHERE forum_name="happy fun time forum"));
  
INSERT INTO posts
  (post_id, content, created_at, thread_id, user_uuid, created_by)
VALUES
  (1,"KOREANS, NOW TAKING IT INTO IRL, AM I RIGHT?", NOW(),
  (SELECT id FROM threads WHERE thread_name="nuclear Launch Detected"),
  (SELECT uuid FROM users WHERE username="tester"),
  (SELECT uuid FROM users WHERE username="tester"));

  
INSERT INTO posts
  (post_id, content, created_at, thread_id, user_uuid, created_by)
VALUES
  (1,"Do NOT taunt the Super Happy Fun Ball.", NOW(),
  (SELECT id FROM threads WHERE thread_name="Super Happy Fun Ball"),
  (SELECT uuid FROM users WHERE username="tester"),
  (SELECT uuid FROM users WHERE username="tester"));

INSERT INTO posts
  (post_id, content, created_at, thread_id, user_uuid, created_by)
VALUES
  (1,"Zug  Zug!.", NOW(),
  (SELECT id FROM threads WHERE thread_name="Work, Work"),
  (SELECT uuid FROM users WHERE username="tester"),
  (SELECT uuid FROM users WHERE username="tester"));