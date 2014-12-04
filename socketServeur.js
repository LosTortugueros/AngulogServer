/**
 * Created by julescantegril on 04/12/2014.
 */

var http = require('http');
var fs = require('fs');

// Chargement du fichier index.html affiché au client
var server = http.createServer(function(req, res) {
    fs.readFile('./index.html', 'utf-8', function(error, content) {
        getClickFromUrl(urlDavid);
        getRamFromUrl(urlDavid);
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

// Chargement de socket.io
var io = require('socket.io').listen(server);

var socketClient = [];

var allMyData;

io.sockets.on('connection', function (socket) {
    socket.emit(allMyData);
    socketClient.push(socket);
});

server.listen(3000);

var express = require('express')
var app = express()
var nbreClickDavid = 0;

var urlDavid = "http://etud.insa-toulouse.fr/~livet/ServerLogger/david.json"
var davidRame = [];
var davidClicks = [];

var urlJules = "http://etud.insa-toulouse.fr/~livet/ServerLogger/jules.json"
var julesRame = [];

var urlTristan = "http://etud.insa-toulouse.fr/~livet/ServerLogger/tristan.json"
var tristantRame = [];

var urlHugo = "http://etud.insa-toulouse.fr/~livet/ServerLogger/hugo.json"
var hugoRame = [];

var urljeremie = "http://etud.insa-toulouse.fr/~livet/ServerLogger/jeremie.json"
var jeremieRame = [];

var urlMelina = "http://etud.insa-toulouse.fr/~livet/ServerLogger/melina.json"
var melinaRame = [];

var urlSebastien = "http://etud.insa-toulouse.fr/~livet/ServerLogger/sebastien.json"
var sebastienRame = [];

var urlMickael = "http://etud.insa-toulouse.fr/~livet/ServerLogger/mickael.json"
var mickaelRame = [];

var getRamFromUrl = function(url){
    var request = require("request");
    request(url, function(error, response, body){
        var jsonDavid = JSON.parse(body);

        for(var attribute in jsonDavid){
            var ramTrouve = false;
            if(jsonDavid[attribute].hasOwnProperty("ram")){
                ramTrouve = true;
            }

            if(ramTrouve){
                davidRame.push({"ram":jsonDavid[attribute]["ram"],"time":jsonDavid[attribute]["time"]})
                //console.log(davidRame);
            }
        }
    });
};

var getClickFromUrl = function(url){
    var request = require("request");
    request(url, function(error, response, body){
        var jsonDavid = JSON.parse(body);
        for(var attribute in jsonDavid){
            if(jsonDavid[attribute].hasOwnProperty("clicks")){
                for( var att in jsonDavid[attribute]["clicks"]) {
                    nbreClickDavid++;
                    davidClicks.push(jsonDavid[attribute]["clicks"][att]);
                }
            }
        }
    });
};

