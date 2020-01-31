"use strict";

const http = require("http");
const config = require("./config");
const sender = require("./lib/http");
const log = console.log;
const home = require("./api/home");

const server = http.createServer(function(request, response) {
  log(`URL:${request.url}`);

  try {
    request.tempoInicio = new Date().getTime();

    if (request.method === "GET") {
      if (request.url.indexOf("/api/home") > -1) {
        home(request, response);
      } else {
        let msg = {};
        msg.statusCode = 404;
        msg.dados = {};
        msg.dados.resposta = "404 Not Found";
        msg.dados.data = new Date();

        sender(request, response, msg);
      }
    } else {
      let msg = {};
      msg.statusCode = 404;
      msg.dados = {};
      msg.dados.resposta = "404 Not Found";
      msg.dados.data = new Date();

      sender(request, response, msg);
    }
  } catch (error) {
    let msg = {};
    msg.statusCode = 500;
    msg.dados = {};
    msg.dados.resposta = "Error";
    msg.dados.data = new Date();

    sender(request, response, msg);
  }
});

server.listen(config.server.port);

log(`API Bet running on port ${config.server.port}`);
