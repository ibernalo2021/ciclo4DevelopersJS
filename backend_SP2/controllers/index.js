const product_controller = require('./product.controller');
const user_controller = require('./user.controller');
const sale_controller = require('./sale.controller');
const project_controller = require ('./project.controller');

module.exports = Object.freeze({
    product_controller,
    user_controller, 
    sale_controller,
    project_controller
})