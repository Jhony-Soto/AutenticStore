
const {check} = require('express-validator');

module.exports = () => [
    check('Nombre').notEmpty().withMessage("El nombre de la categoria es requerido."),
];