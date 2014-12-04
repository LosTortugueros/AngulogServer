    var express = require('express')
    var app = express()
    var nbreClickDavid = 0;

    app.get('/david/click', function (req, res) {
        getClickFromUrl(urlDavid)
        console.log(nbreClickDavid)
        res.send(nbreClickDavid.toString())
        nbreClickDavid = 0
    })

    app.get('/david/ram', function (req, res) {
        getRamFromUrl(urlDavid)
        res.send(davidRame)
    })



    var server;
    server = app.listen(3000, function () {

        var host = server.address().address
        var port = server.address().port

        console.    log('Example app listening at http://%s:%s', host, port)


    })

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
    }

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
    }



