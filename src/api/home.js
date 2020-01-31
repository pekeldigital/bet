const sender = require("../lib/http");

const home = (request, response) => {
    let msg = {};
    msg.statusCode = 200;
    msg.dados = {};
    msg.dados.resposta = "HOME";
    msg.dados.data = new Date();

    sender(request, response, msg);
}

module.exports = home;