const express = require('express');
const router = express.Router();
const cep = require('../middlewares/cep.js');

const autor_controllers = require('../controllers/autor_controller.js');

router.post('/', cep, autor_controllers.createAutor);
router.get('/', autor_controllers.getAutores);
router.get('/:id', autor_controllers.getAutorById);
router.put('/:id', autor_controllers.updateAutor);
router.delete('/:id', autor_controllers.deleteAutor);

module.exports = router;