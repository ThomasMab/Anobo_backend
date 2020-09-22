const UE = require('./ue');
const Relation = require('./relation');

//Associations N N => UE et relation

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