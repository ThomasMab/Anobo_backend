const { relation, ue } = require('../models');
const Relation = require('../models/relation');
const UE = require('../models/ue');

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
      const { id_relation, nature, ue_cible } = req.body;
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

  createOrModify: async (req, res) => {
    try {
      let relation;
      if (req.params.id) {
        relation = await Relation.findByPk(req.params.id);
      }
      if (relation) {
        await relationController.modifyRelation(req, res);
      } else {
        await relationController.createRelation(req, res);
      }
    } catch (error) {
      console.trace(error);
      res.status(500).send(error);
    }
  },

  deleteTag: async (req, res) => {
    try {
      const relationId = req.params.id;
      let relation = await Relation.findByPk(tagId);
      if (!relation) {
        res.status(404).json('Can not find tag with id ' + relationId);
      } else {
        await relation.destroy();
        res.json('OK');
      }
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },
};

module.exports = relationController;