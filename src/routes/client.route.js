const express = require('express')
const route = express.Router();
const clientController = require('../app/controller/ClientController')

route.use("/about",clientController.about)
route.use("/search",clientController.search)
route.use("/:slug",clientController.index)
route.use("/",clientController.index)


module.exports = route