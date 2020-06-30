const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const Upload = require("./Upload");

//Body-Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

router.post("/image", (req, res) => {

    //var avaliacaoId = req.body.avaliacaoId
    //var titulo = req.body.titulo
    var image = req.body.image

    Upload.create({
            //avaliacaoId: avaliacaoId,
            //titulo: titulo,
            image: image
        });

    res.send("Imagem salva com sucesso!");

});


module.exports = router;