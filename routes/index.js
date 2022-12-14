// const express = require('express');
// const router = express.Router();

// router.use('/contacts', require('./contacts'))

// module.exports = router;

const router = require('express').Router();
const contact = require('./contacts');

router.use('/', require('./swagger'));
router.use('/contacts', contact);
router.use(
  '/',
  (docData = (req, res) => {
    let docData = "Hello world! Contacts API";
    res.send(docData);
  })
);

module.exports = router;