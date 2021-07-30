var controller = require('../controller/controller')
var express = require('express');
var router = express.Router();

router.get('/', controller.index);
router.get('/login', controller.login);
router.get('/signin', controller.signin);

module.exports = router;