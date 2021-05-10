const {check} = require('express-validator');

module.exports = () => [
    check('Email').notEmpty().withMessage("El email es requerido."),
    check('Email').not().isEmpty().isEmail().normalizeEmail().withMessage("El email no es valido."),
    check('Password').notEmpty().withMessage("La contraseña es requerida."),
];