const UE = require('./ue');
const Relation = require('./relation');

//Mise en place de l'associations N N => entre UE et 
//relation grâce à la table UE_relation

UE.belongsToMany(Relation, {
     as: 'relation',
     through: 'ue_relation',
     foreignKey: 'id_ue',
     otherKey: 'id_relation',
     timestamps: false
 });

 Relation.belongsToMany(UE, {
     as: 'ue',
     through: 'ue_relation',
     foreignKey: 'id_relation',
     otherKey: 'id_ue',
     timestamps: false
 });

 module.exports = {UE, Relation};