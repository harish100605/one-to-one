const studentdata = require('../model/studentData');

const getStudents = async (req,res) => {
    try{
        const students = await studentdata.find();
        res.json(students);
    }
    catch(error){
        res.json({message : error.message});
    }
}

// const getSpecStudent = async (req,res) => {
//     const roll = req.params.roll;
//     try{
//         const student = await Student.findOne({roll:roll});
//         res.json(student); 
//     }
//     catch(error){
//         res.json({message : error.message});
//     }
// }

const createStudent = async (req,res)=>{
    try{
        const userData = new studentdata(req.body);
        const {name} = userData;
        console.log(": : : ",userData)
        // find user existing or not
        const userExist = await studentdata.findOne({name});
        if (userExist) {
            return res.json({ message:"user already exists"});
        }
        // save the existing user
        const savedUser = await userData.save();
        console.log(": : : ",savedUser)
        res.json(savedUser);
    } catch (error) {
        res.json({error: "internal server error"});
    }
}

const updateStudent = async (req,res) => {
    const roll = req.params.roll;
    try{
        // find one user and update
        const updatedStudent = await studentdata.findOneAndUpdate({roll:roll}, req.body, {new : true});
        res.json(updatedStudent);
    }
    catch(error){
        res.json({message : error.message});
    }
}

const deleteStudent = async (req,res) => {
    const roll = req.params.roll;
    try{
        // delete the user
        await studentdata.findOneAndDelete({roll:roll});
        res.json({message:"student deleted successfully"});
    }
    catch(error){
        res.json({message : error.message});
    }
}

module.exports = {
    getStudents,updateStudent,deleteStudent,createStudent
}