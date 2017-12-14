const https = require('https');
const fs = require('fs');
const request = require('request');

/**
 * Class to upload image.
 * 
 * @class ImageUploader
 */
class ImageUploader {

    /**
     * Save image from array of image urls
     * 
     * @static
     * @param {any} urls 
     * @memberof ImageUploader
     */
    static saveImage(uri) {
        return new Promise((resolve) => {
            request.head(uri, (err, res) => {
                let filename = './app/imgs/' + new Date().getTime() + '.' + res.headers['content-type'].split('/')[1]
                request(uri)
                    .pipe(fs.createWriteStream(filename))
                    .on('close', (resp) => {
                        resolve(resp);
                    });
            });
        })

    };
}

module.exports = ImageUploader;