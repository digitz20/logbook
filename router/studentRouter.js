const {createStudent } = require("../Controller/studentController")

const router = require("express").Router()

router.post("/createstudent", createStudent)




module.exports = router