const Scraper = require('images-scraper')
const googleScraper = new Scraper.Google();
const bingScraper = new Scraper.Bing();
const yahooScraper = new Scraper.Yahoo();
const picsScraper = new Scraper.Picsearch();

class ImageScrapper {

    /**
     * Images scrapped from google
     * 
     * @param {String} keyword - search keyword
     * @param {Number} number - number of images to search, default it will search 15 images
     * @memberof ImageScrapper
     */
    static googleImageScrapper(keyword, number = 15) {
        let query = {
            keyword: keyword,
            num: 10,
            detail: true
        }

        return googleScraper.list(query)
            .then((resp) => {
                return resp;
            });
    }

    /**
     * Images scrapped from google.
     * 
     * @param {String} keyword - search keyword
     * @param {Number} number - number of images, default it will search 15 images
     * @memberof ImageScrapper
     */
    static bingImageScrapper(keyword, number = 15) {
        let query = {
            keyword: keyword,
            num: 10,
            detail: true
        }
        return bingScraper.list(query);
    }

    /**
     * Images scrapped from yahoo.
     * 
     * @param {String} keyword - search keyword
     * @param {Number} number - number of images, default it will search 15 images
     * @memberof ImageScrapper
     */
    static yahooImageScrapper(keyword, number = 15) {
        let query = {
            keyword: keyword,
            num: 10,
            detail: true
        }
        return yahooScraper.list(query);
    }

    /**
     * Images scrapped from pics.
     * 
     * @param {String} keyword - search keyword
     * @param {Number} number - number of images, default it will search 15 images
     * @memberof ImageScrapper
     */
    static picsImageScrapper(keyword, number = 15) {
        let query = {
            keyword: keyword,
            num: 10,
            detail: true
        }
        return picsScraper.list(query);
    }
}

module.exports = ImageScrapper;