'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    // Adds single test user to DB
    return queryInterface.bulkInsert('users', [{
      firstName: 'Test',
      lastName: 'User',
      email: 'testUser@mail.sfsu.edu',
      password: 'testpassword',
      profilePicture: 'fake/path/toimage.png',
      createdAt: new Date(),
      updatedAt: new Date()
      
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    
    // Delete table
    return queryInterface.bulkDelete('users', null, {});
  }
};
