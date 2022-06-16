const ids = require('short-id');
const validUrl = require('valid-url');
const Url = require('../models/urlModel');

exports.getUrl = async (req, res) => {
  try {
    const { shortId } = req.params;

    const urlObj = await Url.findOne({ shortId: shortId });
    const { longUrl } = urlObj;

    res.redirect(longUrl);
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createUrl = async (req, res) => {
  try {
    const { longUrl } = req.body;
    // console.log(longUrl);

    if (!validUrl.isUri(longUrl)) {
      throw 'Invalid Url';
    }

    const shortId = ids.generate();
    // console.log(shortId);
    const baseUrl = 'http://localhost:3000/';
    const shortUrl = baseUrl + shortId;

    const newUrl = await Url.create({
      longUrl,
      shortUrl,
      shortId,
    });

    res.status(200).json({
      status: 'success',
      data: newUrl,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
