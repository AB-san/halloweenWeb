const path = require('path');
const express = require('express');
const adminController = require('../Controllers/admin');
const router = express.Router();
router.get('/add-movie', adminController.getAddMovie);
router.post('/add-movie', adminController.postAddMovie);
router.use('/getMovies', adminController.getMovies)
module.exports = router;