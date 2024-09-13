const connect = require('../config/db.js');

const Schema = connect.Schema;

const autorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    cep: {
        type: Object,
        required: true,
        minLength: 8,
        maxLength: 8
    },
});

const Autor = connect.model("Autor", autorSchema);
module.exports = Autor;