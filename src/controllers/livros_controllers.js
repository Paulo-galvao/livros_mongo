const Livro = require('../models/livros_model.js');

exports.createLivro = async(req, res) => {
    try{
        const livro = await Livro.create(req.body);
        res.status(201).json(livro);
    } catch (error) {
        res.status(400).json({error: 'não é possivel cadastar tal livro'});
    }
}

exports.getLivros = async(req, res) => {
    try{
        const livros = Livro.find(req.body);
        res.status(201).json(livros);
    } catch (error) {
        res.status(400).json({error: 'não é possivel listar os livros'});
    }
}

exports.getLivroById = async(req, res) => {
    try {
        const livro = Livro.findById(req.params.id);
        res.status(201).json(livro);
    } catch (error) {
        res.status(400).json({error: 'não foi possivel listar tal livro'});
    }
}

exports.updateLivro = async(req, res) => {
    try {
        const livro = Livro.findByIdAndUpdate(req.params.id);
        res.status(201).json(livro);
    } catch (error) {
        res.status(400).json({error: 'não foi possivel atualizar tal livro'});
    }
}

exports.destruaOLivro = async(req, res) => {
    try {
        const livro = Livro.findByIdAndDelete(req.params.id);
        res.status(201).json(livro);
    } catch (error) {
        res.status(400).json({error: 'não foi possivel destruir tal livro'});
    }
}