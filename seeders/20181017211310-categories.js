'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Adds ALL categories to DB
    return queryInterface.bulkInsert('categories', [{
      title: 'Apparel',
      createdAt: new Date(),
      description: "Clothes such as shirts, jeans, and shoes.",
      updatedAt: new Date()
    }, {
      title: 'Books',
      createdAt: new Date(),
      description: "Find books for your current classes.",
      updatedAt: new Date()
    }, {
      title: 'Electronics',
      createdAt: new Date(),
      description: "Computers, Tablets, Calculators, Etc.",
      updatedAt: new Date()
    }, {
      title: 'Events',
      createdAt: new Date(),
      description: "Concert Tickets, Sporting Events, Etc.",
      updatedAt: new Date()
    }, {
      title: 'Home Goods',
      createdAt: new Date(),
      description: "Pots, Pans, Microwaves, Vacuums, Etc.",
      updatedAt: new Date()
    }, {
      title: 'Services',
      createdAt: new Date(),
      description: "Find a tutor, personal trainer and etc.",
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    // Delete Table
    return queryInterface.bulkDelete('categories', null, {});
  }
};
