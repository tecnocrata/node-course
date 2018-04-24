import express from 'express';

let personController = require('./person.controller');

let router = express.Router();
// more routes /persons for our API will happen here
// ----------------------------------------------------
router.post('/persons', personController.createPerson);
router.get('/persons', personController.getPerson);

module.exports = router;