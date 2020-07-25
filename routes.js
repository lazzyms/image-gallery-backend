module.exports = app => {
    var router = require("express").Router();
    
    // Controllers
    const gallery = require("./controllers/gallery.controller");
    

    // Routes
    router.get('/getRandomImages', gallery.getRandomImages)
    router.get('/searchImages', gallery.searchImages)

    app.use('/', router)
}