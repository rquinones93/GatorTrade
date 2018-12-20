'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Adds ALL categories to DB
    return queryInterface.bulkInsert('categories', [{
      title: 'Apparel',
      description: "Clothes such as shirts, jeans, and shoes.",
      image: "../../images/icons/clothes.png"
    }, {
      title: 'Books',
      description: "Find books for your current classes.",
      image: "../../images/icons/book.png"
    }, {
      title: 'Electronics',
      description: "Computers, Tablets, Calculators, Etc.",
      image: "../../images/icons/responsive.png"
    }, {
      title: 'Events',
      description: "Concert Tickets, Sporting Events, Etc.",
      image: "../../images/icons/event.png"
    }, {
      title: 'Home Goods',
      description: "Pots, Pans, Microwaves, Vacuums, Etc.",
      image: "../../images/icons/mixer.png"
    }, {
      title: 'Services',
      description: "Find a tutor, personal trainer and etc.",
      image: "../../images/icons/coach.png"
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    // Delete Table
    return queryInterface.bulkDelete('categories', null, {});
  }
};
