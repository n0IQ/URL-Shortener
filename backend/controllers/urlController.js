const ids = require('short-id');
const validUrl = require('valid-url');
const Url = require('../models/urlModel');

exports.getAllUrls = async (req, res) => {
  try {
    const urls = await Url.find();
    
    res.status(200).json({
      status: 'success',
      length: urls.length,
      data: {
        urls,
      }
    });
  }catch(err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getUrl = async (req, res) => {
  try {
    const shortId = req.params.id;

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

    const urlObj = await Url.findOne({ longUrl });
    if (urlObj) {
      return res.status(200).json({
        status: 'success',
        data: urlObj,
      });
    }

    const shortId = ids.generate();
    // console.log(shortId);
    const baseUrl = 'http://localhost:8000/';
    const shortUrl = baseUrl + shortId;

    const newUrl = await Url.create({
      longUrl,
      shortUrl,
      shortId,
    });

    res.status(201).json({
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

exports.deleteUrl = async (req,res) =>{
  try {
    await Url.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null,
    })
  } catch(err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
