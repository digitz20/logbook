const {createAward, getAllAward , getOneAward, updateStudentAward, deleteStudentAward} = require("../Controller/awardController")


const awardRouter = require("express").Router()

awardRouter.post("/createaward/:id", createAward)

awardRouter.get("/getstudentaward" , getAllAward)

awardRouter.get("/getoneaward/:id" , getOneAward)

awardRouter.put("/updateaward/:id", updateStudentAward)

awardRouter.delete("/deleteaward/:id", deleteStudentAward)

module.exports = awardRouter




