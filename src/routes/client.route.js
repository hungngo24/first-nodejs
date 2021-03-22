const express = require('express')
const route = express.Router();
const clientController = require('../app/controller/ClientController')

route.get("/about",clientController.about)
route.get("/search",clientController.search)
route.get("/:slug",clientController.index)
route.get("/",clientController.index)


module.exports = route