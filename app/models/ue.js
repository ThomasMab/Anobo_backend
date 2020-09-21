const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class UE extends Model {};

UE.init({
  classe: DataTypes.TEXT,
  type: DataTypes.TEXT
}, {
  sequelize,
  tableName: "ue"
});

module.exports = UE;