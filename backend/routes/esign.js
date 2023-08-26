var express = require('express');
var router = express.Router();

const esign = require('../controllers/esignController')

/* GET home page. */
router.post('/verify', esign.excute);
// router.post('/sign', esign.sign)
// router.post('/verify', esign.verify)

module.exports = router;
