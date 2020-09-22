const express = require('express');

// importer les controllers
const ueController = require('./controllers/ueController');
const relationController = require('./controllers/relationController');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('OK !');
});

// UEs
router.get('/ue', ueController.getAllUe);
router.get('/ue/:id', ueController.getOneUe);
router.post('/ue', ueController.createUe);
router.patch('/ue/:id', ueController.modifyUe);
router.put('/ue/:id?', ueController.createOrModify);
router.delete('/ue/:id', ueController.deleteUe);

// Relations
router.get('/relation', relationController.getAllRelation);
router.get('/relation/:id', relationController.getOneRelation);
router.post('/relation', relationController.createRelation);
router.patch('/relation/:id', relationController.modifyRelation);
router.put('/relation/:id?', relationController.createOrModify);
router.delete('/relation/:id', relationController.deleteRelation);
router.post('/UE/:id/relation', relationController.associateRelationToUe);

router.use((req, res) => {
  res.status(404).send('Existe pas');
});

module.exports = router;