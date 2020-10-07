const { Relation, UE } = require('../models');

const relationController = {
  getAllRelation: async (req, res) => {
    try {
      const tags = await Relation.findAll();
      res.json(tags);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },


  createRelation: async (req, res) => {
    try {
      const {nature, ue_cible } = req.body;
      let bodyErrors = [];
      if (!nature) {
        bodyErrors.push('nature à remplir');
      }
      if (!ue_cible) {
        bodyErrors.push('UE cible à remplir');
      }

      if (bodyErrors.length) {
        res.status(400).json(bodyErrors);
      } else {
        let newRelation = UE.build({ nature, ue_cible });
        await newRelation.save();
        res.json(newRelation);
      }

    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },

  modifyRelation: async (req, res) => {
    try {
      const relationId = req.params.id;
      const { nature, ue_cible } = req.body;

      let relation = await UE.findByPk(relationId);
      if (!relation) {
        res.status(404).json('Ne trouve pas ' + relationId);
      } else {
        if (nature) {
          relation.nature = nature;
        }
        if (ue_cible) {
          relation.ue_cible = ue_cible;
        }
        await relation.save();
        res.json(relation);
      }

    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },

};

module.exports = relationController;