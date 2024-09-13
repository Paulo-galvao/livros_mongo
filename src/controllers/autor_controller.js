const Autor = require('../models/autor_model.js');

exports.createAutor = async(req, res) => {
    try{
        const autor = await Autor.create(req.body);
        res.status(201).json(autor);
    } catch (error) {
        res.status(400).json({error: "Erro ao criar autor"});
    }
}

exports.getAutores = async(req, res) => {
    try{
        const autores = await Autor.find();
        res.status(201).json(autores);
    } catch (error) {
        res.status(400).json({error: "Erro ao buscar autores"});
    }
}

exports.getAutorById = async(req, res) => {
    try{
        const autor = await Autor.findById(req.params.id);
        res.status(201).json(autor);
    } catch (error) {
        res.status(400).json({error: "erro ao buscar autor"})
    }
}

exports.updateAutor = async(req, res) => {
    try {
        const autor = await Autor.findByIdAndUpdate(req.params.id);
        res.status(201).json(autor);
    } catch (error) {
        res.status(400).json({error: "erro ao atualizar autor"})
    }
}

exports.deleteAutor = async(req, res) => {
    try {
        const autor = await Autor.findByIdAndDelete(req.params.id);
        res.status(201).json(autor);
    } catch (error) {
        res.status(400).json({error: "Erro ao deletar o autor"});
    }
}