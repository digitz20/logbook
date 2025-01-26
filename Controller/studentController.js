const { studentInfo } = require("../models")
const {v4:uuidv4} = require("uuid")

const emailError = 'email and id is already in use'

exports.createStudent = async(req, res) => {
    try {
        const studentData = {
            id : uuidv4(),
            studentName : req.body.studentName,
            studentClass : req.body.studentClass,
            studentAge : req.body.studentAge,
            studentemail : req.body.studentemail
        }
        if(!studentInfo) {
            return res.status(500).json({message: 'model is not found'})

        }

        console.log(studentData)
        const newData = await studentInfo.create(studentData)

        res.status(201).json({message: 'student successfully created', data: newData})

    } catch (error) {
        res.status(500).json({message: 'Error creating student', error:(emailError)})
    }
}


