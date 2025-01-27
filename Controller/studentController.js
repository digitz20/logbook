const { studentInfo } = require("../models")
const {v4:uuidv4} = require("uuid")

const emailError = 'email is already in use'

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



exports.getAllStudent = async(req,res)=>{
    try {
        const allStudent = await studentInfo.findAll()

        res.status(200).json({message:`kindly find below all students`, "total number of students":allStudent.length, data:allStudent})
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }
};





exports.getOneStudent = async (req, res) => {
    try {
        const oneStudent = await studentInfo.findByPk(req.params.id)

        if(!oneStudent) {
            return res.status(404).json('student not found')
        }
        req.status(200).json({message: `kindly find below student with the above id`, data:oneStudent})
    } catch (error) {

        res.status(500).json({error:error.message})
    }
}





exports.updateStudent = async (req , res) => {
    try {
        const newStudent = await studentInfo.findByPk(req.params.id)

        if(!newStudent) {
            return res.status(404).json('store not found')
        }
  
     const newInfo = await newStudent.update ({
      studentName : req.body.studentName,
      studentClass : req.body.studentClass,
      studentAge : req.body.studentAge
  })
  res.status(200).json({message: `student updated`, data:newInfo})
    } catch (error) {
        
        res.status(500).json({error:(emailError)})
        
    }
    
}






exports.deleteStudent = async (req, res) => {
    try {       
         const deletedata = await studentInfo.findByPk(req.params.id)

        if(!deletedata) {
            return res.status(404).json('student not found')
        }
        deletedata.destroy()
        res.status(200).json("student deleted")
  
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}



















