'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    // Adds single test user to DB
    return queryInterface.bulkInsert('users', [{
      first_name: 'John',
      last_name: 'Doe',
      email: 'johndoe@mail.sfsu.edu',
      password: '$2b$10$ibD40J0qyELcNm5IABoHW.HQA0l4OewhMMoTsxFVBko6aFUQIO42q',
      profile_picture: 'https://res.cloudinary.com/hx8ztvtac/image/upload/c_scale,w_250/v1539125821/samples/people/smiling-man.jpg',
      profile_picture_public_id: ""
    }, {
      first_name: 'Jane',
      last_name: 'Doe',
      email: 'janedoe@mail.sfsu.edu',
      password: '$2b$10$ibD40J0qyELcNm5IABoHW.HQA0l4OewhMMoTsxFVBko6aFUQIO42q',
      profile_picture: 'https://res.cloudinary.com/hx8ztvtac/image/upload/c_scale,w_250/v1539125824/samples/bike.jpg',
      profile_picture_public_id: ""
    }], {});
  },

  down: (queryInterface, Sequelize) => {    
    // Delete table
    return queryInterface.bulkDelete('users', null, {});
  }
};
