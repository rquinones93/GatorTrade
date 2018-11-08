'use strict';

module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('messages', {
    itemId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    message: DataTypes.STRING
  }, {});

  Message.associate = function(models) {
    Message.belongsTo(models.User, {
      foreignKey: 'seller_id',
      targetKey: 'user_id'
    });

    Message.belongsTo(models.Item, {
      foreignKey: 'item_id',
      targetKey: 'item_id'
    });

  };

  return Message;
};