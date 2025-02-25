const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    roll : {
        type : String,
        required : true,
        unique : true
    },
    subject : {
        type : String,
        required : true 
    },
    // registerd_on :{
    //     type : Date,
    //     default : Date.now
    // },
});

var studentdata = mongoose.model('studentdata',studentSchema);
module.exports = studentdata;