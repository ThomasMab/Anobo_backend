const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

//Représentation de la table de la BD pour Sequelize afin de la "comprendre"
class UE extends Model {};

UE.init({
    id_ue: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },  
    classe: DataTypes.TEXT,
    type: DataTypes.TEXT,
    designation: DataTypes.TEXT,
    description: DataTypes.TEXT,
    interpretation: DataTypes.TEXT,
    secteur: DataTypes.TEXT,
  }, 
  {
    sequelize,
    tableName: "ue"
  });

module.exports = UE;