const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

//Représentation de la table de la BD pour Sequelize afin de la "comprendre"
class UE extends Model {};

UE.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
    },  classe: DataTypes.TEXT,
  type: DataTypes.TEXT,
  zone: DataTypes.TEXT,
  secteur: DataTypes.TEXT,
  description: DataTypes.TEXT,
  Designation: DataTypes.TEXT,
  auteur: DataTypes.TEXT
}, {
  sequelize,
  tableName: "ue"
});

module.exports = UE;