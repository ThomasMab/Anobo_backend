const UE = require('../models/ue');

const ueController = {

    getAllUe: async (req, res) => {
        try {
          const ue = await UE.findAll();
          res.json(ue);
        } catch (error) {
          console.trace(error);
          res.status(500).json(error);
        }
      },
    

  getOneUe: async (req, res) => {
    try {
      const ueId = req.params.id;
      const ue = await UE.findByPk(ueId
      );
      if (!ueId) {
        res.status(404).json('Ne trouve pas id ');
      } else {
        res.json(ue);
      }

    } catch (error) {
      res.status(500).json(error);
    }
  },

  createUe: async (req, res) => {
    console.log(req);
    try {
      const { id_ue, classe, type, designation, description, interpretation, secteur } = req.body;
      // test présence paramètres
      const bodyErrors = [];
      if (!id_ue) {
        bodyErrors.push('id ne peut être pas vide');
      }
      if (!classe) {
        bodyErrors.push('classe ne peut être pas vide');
      }
      if (!type) {
        bodyErrors.push('type ne peut être pas vide');
      }
      if (bodyErrors.length > 0) {
        // si on a une erreur
        res.status(400).json(bodyErrors);
      } else {
        let newUe = UE.build({
          id_ue,
          classe,
          type,
          designation,
          description,
          interpretation,
          secteur
        });
        await newUe.save();
        res.json(newUe);
      }

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

  modifyUe: async (req, res) => {
    try {
      const ueId = req.params.id;
      const ue = await UE.findByPk(ueId);
      if (!ueId) {
        res.status(404).send('Cant find list with id ' + ueId);
      } else {

        const { classe, type } = req.body;
        // on ne change que les paramètres présents
        if (classe) {
          ue.classe = classe;
        }
        if (type) {
          ue.type = type;
        }
        await ue.save();
        res.json(ue);
      }

    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },

};


module.exports = ueController;
