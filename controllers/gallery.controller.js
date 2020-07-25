const fetch = require('node-fetch');
global.fetch = fetch;
const Unsplash = require('unsplash-js')
// const toJson = Unsplash.toJson()
const unsplash = new Unsplash.default({ accessKey: process.env.APIKEY });


module.exports.getRandomImages = (req, res) => {
    unsplash.photos.listPhotos(req.query.page, 30, "latest")
        .then(data => Unsplash.toJson(data))
        .then(json => {
            res.status(200).send({ success: true, result: { message: 'got random images', data: json } })
        }).catch(err => {
            res.status(400).send({ success: false, result: { message: err.message } })
        });
}

module.exports.searchImages = (req, res) => {
    unsplash.search.photos(req.query.keyword, req.query.page, 30)
        .then(data => Unsplash.toJson(data))
        .then(json => {
            res.status(200).send({ success: true, result: { message: 'got random images', data: json } })
        }).catch(err => {
            res.status(400).send({ success: false, result: { message: err.message } })
        });
}