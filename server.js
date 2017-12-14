const express = require('express'),
    http = require('http'),
    path = require('path');
const app = module.exports = express();
const fileUpload = require('express-fileupload');
const ImageScrapper = require('./app/controllers/ImageScrapper');
const ImageUploader = require('./app/controllers/ImageUploader');
const ErrorHandler = require('./app/handlers/ErrorHandler');
const errorHandler = new ErrorHandler().errorHandler;
const bodyParser = require('body-parser');
app.use('/', express.static(path.join(__dirname, 'app')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(fileUpload());

app.get('/', (req, res) => {
    res.send('server online.');
});


//Search from bing
app.get('/bingimgscrap', (req, res, next) => {
    return ImageScrapper.bingImageScrapper(req.query.keyword, req.query.number).then((resp) => {
        res.send(resp);
    }).catch(next);
});

//Search from google
app.get('/googleimgscrap', (req, res, next) => {
    return ImageScrapper.googleImageScrapper(req.query.keyword, req.query.number).then((resp) => {
        res.send(resp);
    }).catch(next);
});

//search from yahoo
app.get('/yahooimgscrap', (req, res, next) => {
    return ImageScrapper.yahooImageScrapper(req.query.keyword, req.query.number).then((resp) => {
        res.send(resp);
    }).catch(next);
});

// search from pics.
app.get('/picsimgscrap', (req, res, next) => {
    return ImageScrapper.picsImageScrapper(req.query.keyword, req.query.number).then((resp) => {
        res.send(resp);
    }).catch(next);
});

//Upload image top server.
app.post('/uploadimage', (req, res, next) => {
    ImageUploader.saveImage(req.body.url)
        .then((resp) => {
            res.send('success');
        });
});

//Global error handler.
app.use(errorHandler);
/**
* Start Server
*/
http.createServer(app).listen(8080, function () {
    console.log('Server listening on port ' + 8080);
});

