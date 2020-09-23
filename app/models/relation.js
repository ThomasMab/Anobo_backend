const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

//Représentation de la table de la BD pour Sequelize pour l'interprété
class Relation extends Model {};

Relation.init({
  id: {
  type: DataTypes.INTEGER,
  primaryKey: true
  },
  ue_origine : DataTypes.INTEGER,
  nature: DataTypes.TEXT,
  ue_cible : DataTypes.INTEGER
}, {
  sequelize,
  tableName: "relation"
});

module.exports = Relation;