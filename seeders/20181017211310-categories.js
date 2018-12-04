'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Adds ALL categories to DB
    return queryInterface.bulkInsert('categories', [{
      title: 'Apparel',
      description: "Clothes such as shirts, jeans, and shoes.",
    }, {
      title: 'Books',
      description: "Find books for your current classes.",
    }, {
      title: 'Electronics',
      description: "Computers, Tablets, Calculators, Etc.",
    }, {
      title: 'Events',
      description: "Concert Tickets, Sporting Events, Etc.",
    }, {
      title: 'Home Goods',
      description: "Pots, Pans, Microwaves, Vacuums, Etc.",
    }, {
      title: 'Services',
      description: "Find a tutor, personal trainer and etc.",
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    // Delete Table
    return queryInterface.bulkDelete('categories', null, {});
  }
};
