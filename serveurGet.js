/**
 * Created by julescantegril on 05/12/2014.
 */

var urlDavid = "http://etud.insa-toulouse.fr/~livet/ServerLogger/david.json"
var urlJules = "http://etud.insa-toulouse.fr/~livet/ServerLogger/sebastien.json"
var urlTristan = "http://etud.insa-toulouse.fr/~livet/ServerLogger/tristan.json"
var urlHugo = "http://etud.insa-toulouse.fr/~livet/ServerLogger/hugo.json"
var urljeremie = "http://etud.insa-toulouse.fr/~livet/ServerLogger/jeremie.json"
var urlMelina = "http://etud.insa-toulouse.fr/~livet/ServerLogger/melina.json"
var urlSebastien = "http://etud.insa-toulouse.fr/~livet/ServerLogger/sebastien.json"
var urlMickael = "http://etud.insa-toulouse.fr/~livet/ServerLogger/mickael.json"

var currentRame = [];
var currentClicks = [];
var currentNbreClick = 0;

var currentToutch = [];
var currentNbreToutch = 0;

var nbreClickJules = 0;
var nbreClickTristan = 0;
var nbreClickHugo = 0;
var nbreClickSeb = 0;
var nbreClickMel = 0;
var nbreClickMick = 0;
var nbreClickDavid = 0;
var nbreClickJerem = 0;

var nbreToutchJules = 0;
var nbreToutchTristan = 0;
var nbreToutchHugo = 0;
var nbreToutchSeb = 0;
var nbreToutchMel = 0;
var nbreToutchMick = 0;
var nbreToutchDavid = 0;
var nbreToutchJerem = 0;


var express = require('express');
var app = express();

app.get('/david/click', function (req, res) {
   var clicksAll = [{"pseudo":"jules","click":nbreClickJules},
       {"pseudo":"micka","click":nbreClickMick},
       {"pseudo":"hugo","click":nbreClickHugo},
       {"pseudo":"jerem","click":nbreClickJerem},
       {"pseudo":"seb","click":nbreClickSeb},
       {"pseudo":"melina","click":nbreClickMel},
       {"pseudo":"david","click":nbreClickDavid},
       {"pseudo":"tristan","click":nbreClickTristan}];

    res.send(clicksAll);
    //nbreClickDavid = 0
});

app.get('/david/toutch', function (req, res) {
    var clicksAll = [{"pseudo":"jules","click":nbreToutchJules},
        {"pseudo":"micka","click":nbreToutchMick},
        {"pseudo":"hugo","click":nbreToutchHugo},
        {"pseudo":"jerem","click":nbreToutchJerem},
        {"pseudo":"seb","click":nbreToutchSeb},
        {"pseudo":"melina","click":nbreToutchMel},
        {"pseudo":"david","click":nbreToutchDavid},
        {"pseudo":"tristan","click":nbreToutchTristan}];

    res.send(clicksAll);
    //nbreClickDavid = 0
});

var server;
server = app.listen(3000, function () {

    fillClick();

    var host = server.address().address
    var port = server.address().port

    console.    log('Example app listening at http://%s:%s', host, port)


});

var fillClick = function(){
    getClickFromUrl(urlJules,"jules");

    getClickFromUrl(urlHugo,"hugo");

    getClickFromUrl(urlTristan,"tristan");

    getClickFromUrl(urlSebastien,"seb");

    getClickFromUrl(urljeremie,"jerem");

    getClickFromUrl(urlMelina,"mel");

    getClickFromUrl(urlDavid,"david");

    getClickFromUrl(urlMickael,"mick");

    getTouchFromUrl(urlJules,"jules");

    getTouchFromUrl(urlHugo,"hugo");

    getTouchFromUrl(urlTristan,"tristan");

    getTouchFromUrl(urlSebastien,"seb");

    getTouchFromUrl(urljeremie,"jerem");

    getTouchFromUrl(urlMelina,"mel");

    getTouchFromUrl(urlDavid,"david");

    getTouchFromUrl(urlMickael,"mick");

}

var getTouchFromUrl = function(url,username){
    var request = require("request");
    request(url, function(error, response, body){
        currentNbreToutch = 0;
        currentToutch = [];
        var jsonUser = JSON.parse(body.toString());

        var lastTimeMs = 0;
        var actualTimeMs = 0;

        for(var attribute in jsonUser){
            if(jsonUser[attribute].hasOwnProperty("keys")){
                for (var att in jsonUser[attribute]["keys"]) {
                    actualTimeMs = jsonUser[attribute]["keys"][att];
                    currentNbreToutch++;
                    if((actualTimeMs-lastTimeMs) > 240) {
                        lastTimeMs = jsonUser[attribute]["keys"][att];
                        currentToutch.push({"keys":jsonUser[attribute]["keys"][att],"toutchNumber":currentNbreToutch});
                    }
                }
            }
        }
        if(username == "jules"){
            nbreToutchJules = currentNbreToutch;
        }else if(username == "david"){
            nbreToutchDavid = currentNbreToutch;
        }else if(username == "jerem"){
            nbreToutchJerem= currentNbreToutch;
        }else if(username == "mel"){
            nbreToutchMel = currentNbreToutch;
        }else if(username == "hugo"){
            nbreToutchHugo = currentNbreToutch;
        }else if(username == "seb"){
            nbreToutchSeb = currentNbreToutch;
        }else if(username == "tristan"){
            nbreToutchTristan = currentNbreToutch;
        }else if(username == "mick"){
            nbreToutchMick = currentNbreToutch;
        }else{

        }
    });
};

var getClickFromUrl = function(url,username){
    var request = require("request");
    request(url, function(error, response, body){
        currentNbreClick = 0;
        currentClicks = [];
        var jsonUser = JSON.parse(body.toString());

        var lastTimeMs = 0;
        var actualTimeMs = 0;

        for(var attribute in jsonUser){
            if(jsonUser[attribute].hasOwnProperty("clicks")){
                for (var att in jsonUser[attribute]["clicks"]) {
                    actualTimeMs = jsonUser[attribute]["clicks"][att];
                    currentNbreClick++;
                    if((actualTimeMs-lastTimeMs) > 240) {
                        lastTimeMs = jsonUser[attribute]["clicks"][att];
                        currentClicks.push({"clicks":jsonUser[attribute]["clicks"][att],"clickNumber":currentNbreClick});
                    }
                }
            }
        }
        if(username == "jules"){
            nbreClickJules = currentNbreClick;
        }else if(username == "david"){
            nbreClickDavid = currentNbreClick;
        }else if(username == "jerem"){
            nbreClickJerem= currentNbreClick;
        }else if(username == "mel"){
            nbreClickMel = currentNbreClick;
        }else if(username == "hugo"){
            nbreClickHugo = currentNbreClick;
        }else if(username == "seb"){
            nbreClickSeb = currentNbreClick;
        }else if(username == "tristan"){
            nbreClickTristan = currentNbreClick;
        }else if(username == "mick"){
            nbreClickMick = currentNbreClick;
        }else{

        }
    });
};