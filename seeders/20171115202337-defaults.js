// 'use strict';

// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.bulkInsert('users', [{
//         uuid: uuid(),
//         username: 'Tester',
//         password: '$2a$08$2HngBzrHC8fgB32vfWNbsukbaqlaATaO0SrUVw4kYpLp7xosyYVwK',
//         Firstname: 'Nym',
//         Lastname: 'Pseudo',
//         Email: 'demo@demo.com',
//         created_at: NOW(),
//         updated_at: NOW()
//       }], {});

//     return queryInterface.bulkInsert('threads', [{
//         thread_name: 'Nuclear Launch Detected',
//         last_poster: 'tester',
//         last_post_date: NOW(),
//         created_at: NOW(),
//         updated_at: NOW(),
//         created_by: (SELECT uuid FROM users WHERE username="tester"),
//         forum_id: (SELECT id FROM forums WHERE forum_name="Starcraft")
//       }], {});

//     return queryInterface.bulkInsert('posts', [{
//         post_id: 1,
//         content: 'KOREANS, NOW TAKING IT INTO IRL, AM I RIGHT?',
//         created_at: NOW(),
//         thread_id: (SELECT id FROM threads WHERE thread_name="nuclear Launch Detected"),
//         user_uuid: (SELECT uuid FROM users WHERE username="tester"),
//         created_by: (SELECT uuid FROM users WHERE username="tester")
//       }], {});
//   },

//   down: (queryInterface, Sequelize) => {
//        return queryInterface.bulkDelete('Users', null, {});
//   }
// };


//Doesn't Work!

//Using a regular seed.sql file instead, I guess.