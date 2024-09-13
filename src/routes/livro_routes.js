const express = require('express');
const router = express.Router();
const livros_controllers = require('../controllers/livros_controllers.js')

router.post('/', livros_controllers.createLivro);
router.get('/', livros_controllers.getLivros);
router.get('/:id', livros_controllers.getLivroById);
router.put('/:id', livros_controllers.updateLivro);
router.delete('/:id', livros_controllers.destruaOLivro);

module.exports = router;