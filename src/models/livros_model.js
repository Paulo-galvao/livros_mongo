const connect = require('../config/db.js');

const Schema = connect.Schema;

const livroSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    genre: {
        type: String,
        required: true
    }
});

const Livro = connect.model("Livro", livroSchema);
module.exports = Livro;