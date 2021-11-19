const mongoose = require('mongoose');

const user_schema = new mongoose.Schema({
    id_user:{
        type:String,
        required:true,
        unique:true,
    },
    username:{
        type:String,
        required:true,
        trim:true,
        // unique:true
    },
    userlastname:{
        type:String,
        required:true,
        trim:true,
    },

    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        
    },
     rol:{
         type:String,
    },
    estado:{
        type:String,   
    },
    clave:{
        type:String,
    }
},{
        timestamps: true
        
});

module.exports = mongoose.model('usuarios', user_schema);

