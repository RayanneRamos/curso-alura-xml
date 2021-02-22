const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.xml());

app.use((req, res, prox) => {
  let formatoRequisitado = req.header("Accept");

  if(formatoRequisitado === "*/*") {
    formatoRequisitado = "application/json";
  }

  if(formatosAceitos.indexOf(formatoRequisitado) === -1) {
    res.status(406);
    res.end();
    return;
  }

  res.setHeader("Content-Type", formatoRequisitado);
  prox();
});

app.listen(3000, () => console.log("Server iniciado!"));