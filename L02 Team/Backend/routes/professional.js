const express = require('express');

const professionalControllers = require('../controllers/professional.js');

const router = express.Router();

// GET /feed/posts
router.get('/', professionalControllers.getData);
// localhost:8080/professional/
module.exports = router;