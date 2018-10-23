'use strict';

module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define('admins', {
    userId: DataTypes.INTEGER
  }, {});
  
  Admin.associate = function(models) {
    Admin.belongsTo(models.User, {
      foreignKey: 'userId',
      targetKey: 'userId'
    });
  };

  return Admin;
};