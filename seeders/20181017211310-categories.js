'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Adds ALL categories to DB
    return queryInterface.bulkInsert('categories', [{
      title: 'Text Books',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Electronics',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Home Appliances',
      createdAt: new Date(),
      updatedAt: new Date()
    },  {
      title: 'Clothes',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Student Services',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    // Delete Table
    return queryInterface.bulkDelete('categories', null, {});
  }
};
