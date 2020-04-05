var express = require('express');
var router = express.Router();

const wards = require('../services/ward.service');
router.get('/wards', wards.findAll);
router.get('/wards/:districtId', wards.findAllByDistrict);
module.exports = router;