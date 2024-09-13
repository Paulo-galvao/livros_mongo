const express = require('express');
const app = express();
const port = 3000;
const autor_routes = require('./routes/autor_route.js');
const livro_routes = require('./routes/livro_routes.js');

app.use(express.json());

app.use('/autor', autor_routes);
app.use('/livro', livro_routes);

app.listen(port, () => {
    console.log("Servidor ativo na porta", port);
});