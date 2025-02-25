const express = require ('express');
const studentController = require ('../controller/studentController.js');
const route = express.Router();

route.get('/get-all-users',studentController.getStudents);
// route.get('/:roll',student_Controller.getSpecStudent);
route.post('/create',studentController.createStudent);
route.put('/update/:roll',studentController.updateStudent);
route.delete('/delete/:roll',studentController.deleteStudent);

module.exports = route;