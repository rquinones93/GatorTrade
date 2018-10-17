'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    // Adds single admin - the Test User
    return queryInterface.bulkInsert('admin', [{
      userId: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    // Delete table
    return queryInterface.bulkDelete('admin', null, {});
  }
};
