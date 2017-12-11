const express = require('express'),
    http = require('http'),
    path = require('path');
const app = module.exports = express();
const fileUpload = require('express-fileupload');
const ImageScrapper = require('./app/controllers/ImageScrapper');

app.use('/', express.static(path.join(__dirname, 'app')));


app.use(fileUpload());
app.get('/', (req, res) => {
    res.send('server online.');
});


//Search from bing
app.get('/bingimgscrap', (req, res) => {
    return ImageScrapper.bingImageScrapper(req.query.keyword, 15).then((resp) => {
        res.send(resp);
    })
});

//Search from google
app.get('/googleimgscrap', (req, res) => {
    return ImageScrapper.googleImageScrapper(req.query.keyword, 15).then((resp) => {
        res.send(resp);
    })
});

//search from yahoo
app.get('/yahooimgscrap', (req, res) => {
    return ImageScrapper.yahooImageScrapper(req.query.keyword, 15).then((resp) => {
        res.send(resp);
    })
});

// search from pics.
app.get('/picsimgscrap', (req, res) => {
    return ImageScrapper.picsImageScrapper(req.query.keyword, 15).then((resp) => {
        res.send(resp);
    }).catch((err) => {
        throw new Error(err);
    })
});

/**
* Start Server
*/
http.createServer(app).listen(8080, function () {
    console.log('Server listening on port ' + 8080);
});

