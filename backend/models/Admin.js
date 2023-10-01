const mongoose = require('mongoose');
const {Schema} = mongoose ;

const AdminSchema = new Schema({
    name: {
        type : String,
        required : true
    },
    email:{
        type: String,
        required : true,
        unique : true
    },
    password:{
        type: String,
        required: true 
    },
    date:{
        type: Date ,
        default : Date.now 
    },
    verifytoken:{
        type: String
    }
})

const Admin = mongoose.model('admin',AdminSchema);
module.exports = Admin;