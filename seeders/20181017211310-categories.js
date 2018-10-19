'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Adds ALL categories to DB
    return queryInterface.bulkInsert('categories', [{
      title: 'Apparel',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Books',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Electronics',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Events',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Home Goods',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Services',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    // Delete Table
    return queryInterface.bulkDelete('categories', null, {});
  }
};
