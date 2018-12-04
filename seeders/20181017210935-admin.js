'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    // Adds single admin - the Test User
    return queryInterface.bulkInsert('admin', [{
      user_id: '2'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    // Delete table
    return queryInterface.bulkDelete('admin', null, {});
  }
};
