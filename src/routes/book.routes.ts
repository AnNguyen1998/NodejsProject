const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller.ts'); 

router.get('/', bookController.getAllBooks);
router.post('/', bookController.createBook);

module.exports = router;