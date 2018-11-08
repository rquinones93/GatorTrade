'use strict';

module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define('admins', {
    userId: DataTypes.INTEGER
  }, {});
  
  Admin.associate = function(models) {
    Admin.belongsTo(models.User, {
      foreignKey: 'user_id',
      targetKey: 'user_id'
    });
  };

  return Admin;
};