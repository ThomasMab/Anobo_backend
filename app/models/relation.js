const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Relation extends Model {};

Relation.init({
  nature: DataTypes.TEXT,
  ue_cible : DataTypes.INTEGER
}, {
  sequelize,
  tableName: "relation"
});

module.exports = Relation;