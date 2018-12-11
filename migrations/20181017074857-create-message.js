'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('messages', {
      message_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      item_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      seller_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      item_title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      message: {
        allowNull: false,
        type: Sequelize.STRING
      },
      status:{
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('messages');
  }
};