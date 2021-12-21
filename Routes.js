let express = require('express');
let router = express.Router();
let userController = require('./Controllers/Controller');


router.get('/', userController.Room);
router.post('/Room', userController.getRoom);
router.post('/Appartement', userController.getRoom);

module.exports = router;