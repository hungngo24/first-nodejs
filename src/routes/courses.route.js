const express = require('express')
const route = express.Router();
const coursesController = require('../app/controller/CoursesController')

route.get("/create",coursesController.create)
route.get("/:slug",coursesController.show)


module.exports = route