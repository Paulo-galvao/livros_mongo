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
    email: {
        type: String,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
            },
        },
        required: true,  
      } 
});

const Autor = connect.model("Autor", autorSchema);
module.exports = Autor;