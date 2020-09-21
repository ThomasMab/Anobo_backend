const express = require('express');

// importer les controllers
const ueController = require('./controllers/ueController');
const relationController = require('./controllers/relationController');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('OK !');
});

// UEs
router.get('/relation', ueController.getAllUe);
router.get('/UE/:id_ue', ueController.getOneUe);
router.post('/UE', ueController.createUe);
router.patch('/UE/:id_ue', ueController.modifyUe);
router.put('/UE/:id_ue?', ueController.createOrModify);
router.delete('/UE/:id_ue', ueController.deleteUe);

// Relations
router.get('/relation', relationController.getAllRelation);
router.post('/relation', relationController.createRelation);
router.patch('/relation/:id_e', relationController.modifyRelation);
router.put('/relation/:id_ue?', relationController.createOrModify);
router.delete('/relation/:id_ue', relationController.deleteRelation);
// router.post('/cards/:id/tags', tagController.associateTagToCard);
// router.delete('/cards/:cardId/tags/:tagId', tagController.removeTagFromCard);

router.use((req, res) => {
  res.status(404).send('Existe pas');
});

module.exports = router;