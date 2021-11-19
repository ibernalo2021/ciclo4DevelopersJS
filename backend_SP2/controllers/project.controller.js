const {project_model} = require('../models');

getAllProjects = (req, res) => {
    project_model.find().exec((error, projects) => {
        if(error) return res.status(500).json({error: true, mensaje: error});
        res.json({projects});
    })
}

addProject = (req, res) => {
    const project_new = new project_model(req.body);
    project_new.save((error, project) => {
        if(error) return res.status(500).json({error:true, mensaje: error})
        res.json({mensaje: req.body.description + " agregado satisfactoriamente"})
    })
}

deleteProject = async (req, res) => {
    const project_delete = await project_model.findByIdAndDelete({_id: req.params.id})

    try{
        if(project_delete) return res.json({mensaje: project_delete.description + " eliminado correctamente"});
        else return res.status(500).json({error: true, mensaje: "Falla al eliminar"});
    }catch(error){
        return res.staus(500).json({error:true, mensaje: error})
    }
}

updateProject = async (req, res) => {
    try{
        const project_update = await project_model.findByIdAndUpdate({_id: req.body._id}, req.body, {useFindAndModify: false});
        if(project_update) return res.json({mensaje: "Producto actualizado correctamente"});
        else return res.status(400).json({error: true, mensaje: "Falla al actualizar"})
    }catch(error){
        if(error) return res.status(500).json({error: true, mensaje: error});
    }
}

module.exports = Object.freeze({
    getAllProjects,
    addProject,
    deleteProject,
    updateProject
})