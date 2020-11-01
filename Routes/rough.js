const path = require('path');
const express = require('express');
const roughController = require('../controllers/rough');
const router = express.Router();
router.use('/movies', roughController.getMovies);
router.use('/index', roughController.getIndex);
router.use('/page', roughController.getPage);
router.use('/trickortreat', roughController.getTrickOrTreat);
module.exports = router;