const mongoose = require('mongoose');
const conn = "mongodb://localhost:27017/livros";

async function main() {
    await mongoose.connect(conn);
}

main().then(() => console.log("MongoDB conectado")).catch((error) => console.log(error));
module.exports = mongoose;