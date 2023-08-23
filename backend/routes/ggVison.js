var express = require('express');
var router = express.Router();


const orc = require('../controllers/ggVisionController')

router.get('/', orc.detectText)


module.exports = router;