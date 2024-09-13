const axios = require("axios")

const cep = (req, res, next) => {
    console.log(req.body.cep);
   req.body.cep = req.body.cep.replaceAll(".", "").replaceAll("-", "")
   if (
      req.body.cep.length == 8 &&
      !isNaN(Number(req.body.cep))
   ) {

      axios.get(`https://viacep.com.br/ws/${req.body.cep}/json/`)
         .then(resposta => {
             
             delete req.body.cep
             
             req.body.cep = resposta.data
            // console.log(res)
            next()
         })
   } else {
      res.status(400).json()
    //   console.log(res);

   }
}

module.exports = cep;