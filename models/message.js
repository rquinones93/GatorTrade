'use strict';

module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('messages', {
    itemId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    message: DataTypes.STRING
  }, {});

  Message.associate = function(models) {
    Message.belongsTo(models.User, {
      foreignKey: 'sellerId',
      targetKey: 'userId'
    });

    Message.belongsTo(models.Item, {
      foreignKey: 'itemId',
      targetKey: 'itemId'
    });

  };

  return Message;
};