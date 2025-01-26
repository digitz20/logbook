const {createStudent, getAllStudent, updateStudent, deleteStudent, getOneStudent } = require("../Controller/studentController")

const router = require("express").Router()



router.post("/createstudent", createStudent)

router.get("/getstudent" , getAllStudent)

router.get("/getonestudent/:id" , getOneStudent)

router.put("/updatestudent/:id", updateStudent)

router.delete("/deletestudent/:id", deleteStudent)


module.exports = router