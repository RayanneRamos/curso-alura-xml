const jsontoxml = require("jsontoxml");

module.exports = function jsParaXML(dados, tagSingular, tagPlural) {
  let tag = tagSingular;

  if(Array.isArray(dados)) {
    tag = tagPlural;
    dados = dados.map((item) => {
      return {
        [tagSingular]: item
      }
    });
  }

  return jsontoxml({ [tag]: dados });
}