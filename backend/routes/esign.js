var express = require('express');
var router = express.Router();

const esign = require('../controllers/esignController')

/* GET home page. */
router.post('/sign', esign.excute);
router.post('/view', esign.view)
// router.post('/verify', esign.verify)

module.exports = router;
