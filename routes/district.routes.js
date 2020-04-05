var express = require('express');
var router = express.Router();

const districts = require('../services/district.service');
router.get('/districts', districts.findAll);
router.get('/districts/:cityId', districts.findAllByCity);

module.exports = router;