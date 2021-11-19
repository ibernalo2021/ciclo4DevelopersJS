const router = require('express').Router();
const {project_controller} = require('../controllers');


router.post('/add', project_controller.addProject);
router.get('/list', project_controller.getAllProjects );
router.put('/update', project_controller.updateProject );
router.delete('/delete/:id', project_controller.deleteProject);

module.exports = router;