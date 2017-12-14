const routes = require('express').Router();

const ImageScrapper = require('../controllers/ImageScrapper');
const ImageUploader = require('../controllers/ImageUploader');

routes.get('/', (req, res) => {
    res.send('server online.');
});
//Search from bing
routes.get('/bingimgscrap', (req, res, next) => {
    return ImageScrapper.bingImageScrapper(req.query.keyword, req.query.number).then((resp) => {
        res.send(resp);
    }).catch(next);
});

//Search from google
routes.get('/googleimgscrap', (req, res, next) => {
    return ImageScrapper.googleImageScrapper(req.query.keyword, req.query.number).then((resp) => {
        res.send(resp);
    }).catch(next);
});

//search from yahoo
routes.get('/yahooimgscrap', (req, res, next) => {
    return ImageScrapper.yahooImageScrapper(req.query.keyword, req.query.number).then((resp) => {
        res.send(resp);
    }).catch(next);
});

// search from pics.
routes.get('/picsimgscrap', (req, res, next) => {
    return ImageScrapper.picsImageScrapper(req.query.keyword, req.query.number).then((resp) => {
        res.send(resp);
    }).catch(next);
});

//Upload image top server.
routes.post('/uploadimage', (req, res, next) => {
    ImageUploader.saveImage(req.body.url)
        .then((resp) => {
            res.send('success');
        });
});

module.exports = routes;