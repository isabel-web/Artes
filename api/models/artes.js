'use strict';
module.exports = (sequelize, DataTypes) => {
  const artes = sequelize.define('artes', {
    autor: DataTypes.STRING,
    nombre: DataTypes.STRING,
    fechacreacion: DataTypes.STRING
  }, {});
  artes.associate = function(models) {
    // associations can be defined here
  };
  return artes;
};