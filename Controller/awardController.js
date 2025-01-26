const {studentAward} = require("../models")

const {v4:uuidv4} = require("uuid")

const emailError = 'email is already in use'

exports.createAward = async(req, res)=> {
    try {
        

        const awardData = {
            id: uuidv4(),
            studentId: req.params.id,
            awardName:req.body.awardName,
            studentRating: req.body.studentRating,
            
        }

        const newAward = await studentAward.create(awardData)

        res.status(201).json({message: `new awardname added successfully`, data: newAward})

    } catch (error) {
        res.status(500).json({message: 'Error creating awardname', error:(emailError)})
    }
}




exports.getAllAward = async(req,res)=>{
    try {
        const allAward = await studentAward.findAll()

        res.status(200).json({message:`kindly find below all awardname`, "total number of awards":allAward.length, data:allAward})
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }
};





exports.getOneAward = async (req, res) => {
    try {
        const awards = await studentAward.findBypk(req.params.id)

        if(!awards) {
            return res.status(404).json('award not found')
        }
        req.status(200).json({message: `kindly find below award with the above id`, data:awards})
    } catch (error) {

        res.status(500).json({error:error.message})
    }
}





exports.updateStudentAward = async (req , res) => {
    try {
        const updateAward = await studentAward.findByPk(req.params.id)

        if(!updateAward) {
            return res.status(404).json('product not found')
        }
  
   const newStudentAward = await studentAward.update ({
    studentId: req.params.id,
    awardName:req.body.awardName,
    studentRating: req.body.studentRating,
  })
  res.status(200).json({message: `studentaward updated`, data:newStudentAward})
    } catch (error) {
        
        res.status(500).json({error:(emailError)})
    }
}





exports.deleteStudentAward = async (req, res) => {
    try {       
         const deleteAward = await studentAward.findByPk(req.params.id)

        if(!deleteAward) {
            return res.status(404).json('student not found')
        }
        deleteAward.destroy()
        res.status(200).json("award deleted")
  
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}




