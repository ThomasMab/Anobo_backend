const UE = require('./ue');
const Relation = require('./relation');

//Associations N N => UE et relation

UE.belongsToMany(UE, {
    as: 'ue',
    through: 'ue_relation',
    foreignKey: 'ue_id',
    otherKey: 'relation_id',
    timestamps: false
});

Relation.belongsToMany(Relation, {
    as: 'relation',
    through: 'ue_relation',
    foreignKey: 'ue_id',
    otherKey: 'card_id',
    timestamps: false
});