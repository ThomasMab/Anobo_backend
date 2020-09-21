const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class UE extends Model {};

UE.init({
  id_ue: DataTypes.INTEGER,
  classe: DataTypes.TEXT,
  type: DataTypes.TEXT
}, {
  sequelize,
  tableName: "ue"
});

module.exports = UE;