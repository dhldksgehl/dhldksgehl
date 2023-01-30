const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();



// GET
router.get('/', controller.main);

//POST /practice 30
router.post('/practice30', controller.practice30);

module.exports = router;