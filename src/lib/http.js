

const sender = (request, response, data) => {
    const headers = {"Content-Type": "application/json"};
    const msgObj = data;
    let dadosRespostaHTTP = null;

    if (msgObj.dados){
        dadosRespostaHTTP = JSON.stringify(msgObj.dados);
    }

    response.writeHead(msgObj.statusCode, headers);

    if (dadosRespostaHTTP){
        response.write(dadosRespostaHTTP);
    }

    response.end();
}

module.exports = sender;