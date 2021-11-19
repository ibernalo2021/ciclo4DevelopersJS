const mongoose = require('mongoose');

const project_schema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
        min: 1
    },
    obj_gen: {
        type: String,
        required: true
    },
    obj_esp: {
        type: String,
        required : true
    },
    presupuesto:{
        type: Number,
        required : true
    },
    fechaIni : {
        type : Date,
        required : true
    },
    fechaFin: {
        type : Date,
        required : true
    }
},{
    timestamps: true
});

module.exports = mongoose.model('proyectos', project_schema);