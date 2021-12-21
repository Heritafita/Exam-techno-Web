// Get an instance of the express Router and set routes
let express = require('express');
let router = express.Router();

let userController = require('./Controllers/Controller');

// Liste des routes vers les controleurs


router.get('/', userController.Room);
// router.get('/login', userController.login);
// router.post('/login/getPseudo', userController.createSession);
// router.get('/subscribe/:i', userController.subscribe);
// router.get('/delete/:i', userController.delete);
// router.get('/viewCart', userController.viewCart);
// router.get('/finalize', userController.Finalize);

module.exports = router; // import the library 'router'