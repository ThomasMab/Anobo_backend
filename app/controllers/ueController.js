const { relation, ue } = require('../models');
const UE = require('../models/ue');

const ueController = {
    getAllUe: async (req, res) => {
        try {
          const lists = await UE.findAll({
            include: {
              association: 'relation',
            },
            order: [
              ['id_ue', 'ASC'],
            ]
          });
          res.json(lists);
        }
        catch (error) {
          console.trace(error);
          res.status(500).json(error.toString());
        }
      },
    

  getOneUe: async (req, res) => {
    try {
      const ueId = req.params.id;
      const ue = await Card.findByPk(ueId, {
        include: 'relation',
        order: [
          ['id_ue', 'ASC']
        ]
      });
      if (!ue) {
        res.status(404).json('Ne trouve pas l id ');
      } else {
        res.json(ue);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

  createUe: async (req, res) => {
    try {
      const { id_ue, classe, type } = req.body;

      let bodyErrors = [];
      if (!id_ue, !type, !classe) {
        bodyErrors.push(`Ne peut être vide`);
      }

      if (bodyErrors.length) {
        res.status(400).json(bodyErrors);
      } else {
        let newUe = UE.build({ id_ue, classe, type });
        await newUe.save();
        res.json(newUe);
      }

    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },

  modifyCard: async (req, res) => {
    try {
      const UeId = req.params.id;
      const { id_ue, classe, type } = req.body;

      let ueId = await ue.findByPk(UeId, {
        include: ['relation']
      });
      if (!ue) {
        res.status(404).json(`Ne trouve pas l id' ${ueId}`);
      } else {
        if (type) {
          ue.type = type;
        }
        if (classe) {
          ue.classe = classe;
        }
        await ue.save();
        res.json(ue);
      }

    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  },

  createOrModify: async (req, res) => {
    try {
      let ue;
      if (req.params.id) {
        ue = await ue.findByPk(req.params.id);
      }
      if (ue) {
        await ueController.modifyUe(req, res);
      } else {
        await ueController.createUe(req, res);
      }
    } catch (error) {
      console.trace(error);
      res.status(500).send(error);
    }
  },

  deleteUe: async (req, res) => {
    try {
      const UeId = req.params.id;
      let ue = await ue.findByPk(UeId);
      if (!ue) {
        res.status(404).json(`=Ne trouves pas UE avec ${cardId}`);
      } else {
        await card.destroy();
        res.json('ok');
      }

    } catch (error) {
      console.trace(error);
      res.status(500).json(error);
    }
  }
};


module.exports = UeController;