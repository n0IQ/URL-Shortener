const express = require('express');
const urlController = require('../controllers/urlController');

const router = express.Router();

// prettier-ignore
router
.route('/')
.post(urlController.createUrl);

// prettier-ignore
router
.route('/:shortId')
.get(urlController.getUrl);

module.exports = router;
