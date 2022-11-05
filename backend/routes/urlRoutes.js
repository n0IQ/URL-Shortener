const express = require('express');
const urlController = require('../controllers/urlController');

const router = express.Router();

// prettier-ignore
router
.route('/')
.get(urlController.getAllUrls)
.post(urlController.createUrl);

// prettier-ignore
router
.route('/:id')
.get(urlController.getUrl)
.delete(urlController.deleteUrl);

module.exports = router;
