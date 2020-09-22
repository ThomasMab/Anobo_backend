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

  getOneRelation: async (req, res) => {
    try {
      const relationId = req.params.id;
      const relation = await Relation.findByPk(relationId);
      if (!relation) {
        res.status(404).json('Ne trouve pas id ');
      } else {
        res.json(relation);
      }
    } catch (error) {
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

  deleteRelation: async (req, res) => {
    try {
      const relationId = req.params.id;
      let relation = await Relation.findByPk(tagId);
      if (!relation) {
        res.status(404).json('Ne trouve pas ID' + relationId);
      } else {
        await relation.destroy();
        res.json('OK');
      }
    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },

  associateRelationToUe: async (req, res) => {
    try {
      console.log(req.body);
      const ueId = req.params.id;
      const relationId = req.body.tagId;

      let ue = await UE.findByPk(ueId, {
        include: ['relation']
      });
      if (!ue) {
        return res.status(404).json('Ne trouve pas UE id ' + cardId);
      }

      let relation = await Relation.findByPk(relationId);
      if (!relation) {
        return res.status(404).json('Ne trouve pas relation id ' + tagId);
      }

      await ue.addRelation(relation);

      // les associations de l'instance ne sont pas mises à jour
      // on doit donc refaire un select
      ue = await UE.findByPk(cardId, {
        include: ['relation']
      });
      res.json(ue);

    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};

module.exports = relationController;