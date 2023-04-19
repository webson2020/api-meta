const express = require('express');
const apiController = require('../controller/apiController');

const router = express.Router();

router.get('/', apiController.verificar);
router.post('/', apiController.recibir);

module.exports = router;