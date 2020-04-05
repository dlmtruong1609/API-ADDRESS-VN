var express = require('express');
var router = express.Router();

const citys = require('../services/city.service');
router.get('/citys', citys.findAll);

module.exports = router;