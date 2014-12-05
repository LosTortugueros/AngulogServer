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
        mergeAllData();
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});


// Chargement de socket.io
var io = require('socket.io').listen(server);

server.listen(3000);

var socketClient = [];

var allMyData = [];

io.sockets.on('connection', function (socket) {
    sendData();
    socketClient.push(socket);
});

function sendData(){
    getClickFromUrl(urlDavid,davidClicks);
    getRamFromUrl(urlJules,julesRame);
    mergeAllData();

    for (var attribute in socketClient){
        socketClient[attribute].emit('allData',allMyData);
       // console.log(davidRame);
    }

    setTimeout(sendData,3000);

}

var express = require('express')
var app = express()

var urlDavid = "http://etud.insa-toulouse.fr/~livet/ServerLogger/david.json"
var davidRame = [];
var davidClicks = [];
var nbreClickDavid = 0;

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

var calcDiffMs = function(tim1, tim2){
    return (tim1-tim2);
}

var getRamFromUrl = function(url,userName){
    var request = require("request");
    request(url, function(error, response, body){
        var jsonUser = JSON.parse(body);
        var lastTimeMs = 0;
        var actualTimeMs = 0;
        userName = [];
        for(var attribute in jsonUser){
            var ramTrouve = false;
            if(jsonUser[attribute].hasOwnProperty("ram")){
                ramTrouve = true;
                actualTimeMs = jsonUser[attribute]["time"];
            }

            if(ramTrouve){
               // console.log(calcDiffMs(actualTimeMs,lastTimeMs));
                if(calcDiffMs(actualTimeMs,lastTimeMs)> 240){
                    lastTimeMs = jsonUser[attribute]["time"];
                    userName.push({"ram":jsonUser[attribute]["ram"],"time":jsonUser[attribute]["time"]});
                }
            }
        }
    });
};

var getClickFromUrl = function(url,userClicks){
    var request = require("request");
    request(url, function(error, response, body){
        userClicks = [];
        var jsonUser = JSON.parse(body);

        var lastTimeMs = 0;
        var actualTimeMs = 0;

        for(var attribute in jsonUser){
            if(jsonUser[attribute].hasOwnProperty("clicks")){

                    for (var att in jsonUser[attribute]["clicks"]) {
                        nbreClickDavid++;
                        if(calcDiffMs(actualTimeMs,lastTimeMs)> 240) {
                            lastTimeMs = jsonUser[attribute]["time"];
                            userClicks.push({"clicks":jsonUser[attribute]["clicks"][att],"clickNumber":nbreClickDavid});
                            console.log(jsonUser[attribute]["time"]);
                        }
                }
            }
        }
    });
};

var mergeAllData = function(){
    //allMyData = davidRame;
    allMyData.push(davidRame);
    allMyData.push(davidClicks)
};
