const express = require('express');
const bodyParser = require("body-parser");

// importer les controllers
const ueController = require('./controllers/ueController');
const relationController = require('./controllers/relationController');

//Construction des differents routers
const router = express.Router();

router.use(bodyParser.json());

router.get('/', (req, res) => {
  res.send('OK !');
});

// Pour la table UE
router.get('/ue', ueController.getAllUe);
router.get('/ue/:id', ueController.getOneUe);
router.post('/ue/', ueController.createUe);
router.patch('/ue/:id', ueController.modifyUe);

// Pour la table relations
router.get('/relation', relationController.getAllRelation);
router.post('/relation', relationController.createRelation);
router.patch('/relation/:id', relationController.modifyRelation);

router.use((req, res) => {
  res.status(404).send('Existe pas');
});

module.exports = router;
