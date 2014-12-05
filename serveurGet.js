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

    var table = [urlDavid, urlHugo, urljeremie, urlJules, urlMelina, urlMickael, urlSebastien, urlTristan];
    var groupName = ["david","hugo","jeremie","jules","melina","mickael","sebastien","tristan"];

    var currentRame = [];
    var currentClicks = [];
    var currentNbreClick = 0;

    var currentToutch = [];
    var currentNbreToutch = 0;

    var currentDistance = [];
    var currentNbreDistance = 0;

    var nbreClickJules = 0;
    var nbreClickTristan = 0;
    var nbreClickHugo = 0;
    var nbreClickSeb = 0;
    var nbreClickMel = 0;
    var nbreClickMick = 0;
    var nbreClickDavid = 0;
    var nbreClickJerem = 0;
/*
    var clickJules =[];
    var clickTristan =[];
    var clickHugo =[];
    var clickSeb =[];
    var clickMel =[];
    var clickMick =[];
    var clickDavid =[];
    var clickJerem =[];
*/

    var nbreToutchJules = 0;
    var nbreToutchTristan = 0;
    var nbreToutchHugo = 0;
    var nbreToutchSeb = 0;
    var nbreToutchMel = 0;
    var nbreToutchMick = 0;
    var nbreToutchDavid = 0;
    var nbreToutchJerem = 0;

    var nbreDistanceJules = 0;
    var nbreDistanceTristan = 0;
    var nbreDistanceHugo = 0;
    var nbreDistanceSeb = 0;
    var nbreDistanceMel = 0;
    var nbreDistanceMick = 0;
    var nbreDistanceDavid = 0;
    var nbreDistanceJerem = 0;

    var totalBoisson = 0;
    var the = 0;
    var coca = 0;
    var cafe = 0;
    var soda = 0;
    var autre = 0;
    var eau = 0;


    var boisson = [the,coca,cafe,soda,autre,eau,totalBoisson];
  //  var name = ["the","coca","cafe","soda","autre","eau","biere","redbull","totalBoisson"]

    var totalNourriture = 0;
    var pfour = 0;
    var pizza = 0;
    var menthe = 0;
    var crepes = 0;
    var ourson = 0;
    var inconnu = 0;

    var nourriture = [pfour,pizza,menthe,crepes,ourson,inconnu,totalNourriture];
    //var namePlat = ["pfour","pizza","menthe","crepes","ourson","inconnu","totalNourriture"]


    var express = require('express');
    var app = express();


    app.get('/:category',function(req,res) {
        var data = [];
        if ((req.param('category') == 'boisson')) {
            console.log(req.param('category'));
            data = [{"boisson": "the", "qte%": boisson[0]},
                {"boisson": "coca", "qte%": boisson[1] / boisson[6] * 100},
                {"boisson": "cafe", "qte%": boisson[2] / boisson[6] * 100},
                {"boisson": "soda", "qte%": boisson[3] / boisson[6] * 100},
                {"boisson": "autre", "qte%": boisson[4] / boisson[6] * 100},
                {"boisson": "eau", "qte%": boisson[5] / boisson[6] * 100},
                {"boisson": "total", "qte": boisson[6]}];
        }
        if ((req.param('category') == 'distance')) {
            data = [{"pseudo": "jules", "distance": nbreDistanceJules},
                {"pseudo": "micka", "distance": nbreDistanceMick},
                {"pseudo": "hugo", "distance": nbreDistanceHugo},
                {"pseudo": "jerem", "distance": nbreDistanceJerem},
                {"pseudo": "seb", "distance": nbreDistanceSeb},
                {"pseudo": "melina", "distance": nbreDistanceMel},
                {"pseudo": "david", "distance": nbreDistanceDavid},
                {"pseudo": "tristan", "distance": nbreDistanceTristan}];
        }
        if ((req.param('category') == 'click')) {
            console.log(req.param('category'));
            data = [{"pseudo": "jules", "click": nbreClickJules},
                {"pseudo": "micka", "click": nbreClickMick},
                {"pseudo": "hugo", "click": nbreClickHugo},
                {"pseudo": "jerem", "click": nbreClickJerem},
                {"pseudo": "seb", "click": nbreClickSeb},
                {"pseudo": "melina", "click": nbreClickMel},
                {"pseudo": "david", "click": nbreClickDavid},
                {"pseudo": "tristan", "click": nbreClickTristan}];
        }
        if ((req.param('category') == 'toutch')) {
            data = [{"pseudo": "jules", "toutch": nbreToutchJules},
                {"pseudo": "micka", "toutch": nbreToutchMick},
                {"pseudo": "hugo", "toutch": nbreToutchHugo},
                {"pseudo": "jerem", "toutch": nbreToutchJerem},
                {"pseudo": "seb", "toutch": nbreToutchSeb},
                {"pseudo": "melina", "toutch": nbreToutchMel},
                {"pseudo": "david", "toutch": nbreToutchDavid},
                {"pseudo": "tristan", "toutch": nbreToutchTristan}];
        }
        if ((req.param('category') == 'nourriture')) {
            data = [{"nourriture": "pfour", "qte%": nourriture[0]},
                {"nourriture": "pizza", "qte%": nourriture[1] / nourriture[6] * 100},
                {"nourriture": "menthe", "qte%": nourriture[2] / nourriture[6] * 100},
                {"nourriture": "crepes", "qte%": nourriture[3] / nourriture[6] * 100},
                {"nourriture": "ourson", "qte%": nourriture[4] / nourriture[6] * 100},
                {"nourriture": "inconnu", "qte%": nourriture[5] / nourriture[6] * 100},
                {"nourriture": "totalNourriture", "qte": boisson[6]}];
        }
        if ( ((req.param('category') == 'clickTime'))){
            data = currentClicks;
        }
        res.send(data);
    })

    var server;
    server = app.listen(3000, function () {
    fillClick();
    var host = server.address().address
    var port = server.address().port
    console.    log('Example app listening at http://%s:%s', host, port)
    });

    var fillClick = function() {
       getBoisson();
        getNourriture();
        for (var i=0;i<8;i++ ){
            getClickFromUrl(table[i],groupName[i]);
            getTouchFromUrl(table[i],groupName[i]);
            getDistanceFromUrl(table[i],groupName[i]);
        }
    }

    var getDistanceFromUrl = function(url,username) {
        var request = require("request");
        request(url, function (error, response, body) {
            currentNbreDistance = 0;
            currentDistance = [];
            var jsonUser = JSON.parse(body);

            var lastTimeMs = 0;
            var actualTimeMs = 0;

            for (var attribute in jsonUser) {
                if (jsonUser[attribute].hasOwnProperty("distance")) {
                    currentNbreDistance = currentNbreDistance + jsonUser[attribute]["distance"];
                    // lastTimeMs = jsonUser[attribute]["keys"][att];
                    // currentToutch.push({"keys": jsonUser[attribute]["keys"][att], "toutchNumber": currentNbreToutch});
                }
            }
            if (username == "jules") {
                nbreDistanceJules = currentNbreDistance;
            } else if (username == "david") {
                nbreDistanceDavid = currentNbreDistance;
            } else if (username == "jerem") {
                nbreDistanceJerem = currentNbreDistance;
            } else if (username == "mel") {
                nbreDistanceMel = currentNbreDistance;
            } else if (username == "hugo") {
                nbreDistanceHugo = currentNbreDistance;
            } else if (username == "seb") {
                nbreDistanceSeb = currentNbreDistance;
            } else if (username == "tristan") {
                nbreDistanceTristan = currentNbreDistance;
            } else if (username == "mick") {
                nbreDistanceMick = currentNbreDistance;
            } else {

            }
        });
    };

    var getTouchFromUrl = function(url,username) {
        var request = require("request");
        request(url, function (error, response, body) {
            currentNbreToutch = 0;
            currentToutch = [];
            var jsonUser = JSON.parse(body);

            var lastTimeMs = 0;
            var actualTimeMs = 0;

            for (var attribute in jsonUser) {
                if (jsonUser[attribute].hasOwnProperty("keys")) {
                    for (var att in jsonUser[attribute]["keys"]) {
                        actualTimeMs = jsonUser[attribute]["keys"][att];
                        currentNbreToutch++;
                        if ((actualTimeMs - lastTimeMs) > 240) {
                            lastTimeMs = jsonUser[attribute]["keys"][att];
                            currentToutch.push({
                                "keys": jsonUser[attribute]["keys"][att],
                                "toutchNumber": currentNbreToutch
                            });
                        }
                    }
                }
            }
            if (username == "jules") {
                nbreToutchJules = currentNbreToutch;
            } else if (username == "david") {
                nbreToutchDavid = currentNbreToutch;
            } else if (username == "jerem") {
                nbreToutchJerem = currentNbreToutch;
            } else if (username == "mel") {
                nbreToutchMel = currentNbreToutch;
            } else if (username == "hugo") {
                nbreToutchHugo = currentNbreToutch;
            } else if (username == "seb") {
                nbreToutchSeb = currentNbreToutch;
            } else if (username == "tristan") {
                nbreToutchTristan = currentNbreToutch;
            } else if (username == "mick") {
                nbreToutchMick = currentNbreToutch;
            } else {

            }
        });
    };

    var getClickFromUrl = function(url,username) {
        var request = require("request");
        request(url, function (error, response, body) {
            currentNbreClick = 0;
            currentClicks = [];
            var jsonUser = JSON.parse(body);

            var lastTimeMs = 0;
            var actualTimeMs = 0;
            for (var attribute in jsonUser) {
                if (jsonUser[attribute].hasOwnProperty("clicks")) {
                    for (var att in jsonUser[attribute]["clicks"]) {
                        actualTimeMs = jsonUser[attribute]["clicks"][att];
                        currentNbreClick++;
                        if ((actualTimeMs - lastTimeMs) > 240) {
                            lastTimeMs = jsonUser[attribute]["clicks"][att];
                            currentClicks.push({
                                "clicks": jsonUser[attribute]["clicks"][att],
                                username : currentNbreClick
                            });
                        }
                    }
                }
            }
            if (username == "jules") {
                nbreClickJules = currentNbreClick;
               // clickJules = currentClicks;
            } else if (username == "david") {
                nbreClickDavid = currentNbreClick;
               // clickDavid = currentClicks;
            } else if (username == "jerem") {
                nbreClickJerem = currentNbreClick;
              //  clickJerem = currentClicks;
            } else if (username == "mel") {
                nbreClickMel = currentNbreClick;
              //  clickMel = currentClicks;
            } else if (username == "hugo") {
                nbreClickHugo = currentNbreClick;
              //  clickHugo = currentClicks;
            } else if (username == "seb") {
                nbreClickSeb = currentNbreClick;
              //  clickSeb = currentClicks;
            } else if (username == "tristan") {
                nbreClickTristan = currentNbreClick;
              //  clickTristan = currentClicks;
            } else if (username == "mick") {
                nbreClickMick = currentNbreClick;
              //  clickMick = currentClicks;
            } else {

            }
        });
    };


    var getBoisson = function() {
        for (var attribute in table) {
            //console.log("enter table:" +table[attribute]);

            var request = require("request");

            request(table[attribute], function (error, response, body) {

                var jsonUser = JSON.parse(body);
                // console.log("hello");
                for (var attribute in jsonUser) {
                    // console.log("enter json:" + jsonUser[attribute]);

                    if ((jsonUser[attribute].hasOwnProperty("capteur")) && (jsonUser[attribute]["capteur"] == "boisson")) {
                        boisson[8]++;
                        // console.log(jsonUser[attribute]["value"]);
                        if (jsonUser[attribute]["value"] == "the") {
                            boisson[0]++
                        }
                        if (jsonUser[attribute]["value"] == "coca") {
                            boisson[1]++
                        }
                        if (jsonUser[attribute]["value"] == "cafe") {
                            boisson[2]++
                        }
                        if (jsonUser[attribute]["value"] == "soda") {
                            boisson[3]++
                        }
                        if (jsonUser[attribute]["value"] == "autre") {
                            boisson[4]++
                        }
                        if (jsonUser[attribute]["value"] == "eau") {
                            boisson[5]++
                        }
                        if (jsonUser[attribute]["value"] == "biere") {
                            boisson[6]++
                        }
                        if (jsonUser[attribute]["value"] == "redbull") {
                            boisson[7]++
                        }
                    }

                }
            });
        }
    }
    getBoisson();

    var getNourriture = function() {

        for (var attribute in table) {
           // console.log("enter table:" + table[attribute]);

            var request = require("request");

            request(table[attribute], function (error, response, body) {

                var jsonUser = JSON.parse(body);
                // console.log("hello");
                for (var attribute in jsonUser) {
                    // console.log("enter json:" + jsonUser[attribute]);

                    if ((jsonUser[attribute].hasOwnProperty("capteur")) && (jsonUser[attribute]["capteur"] == "nourriture")) {
                        nourriture[6]++;
                        // console.log(jsonUser[attribute]["value"]);
                        if (jsonUser[attribute]["value"] == "pfour") {
                            nourriture[0]++
                            //console.log(the);
                        }
                        if (jsonUser[attribute]["value"] == "pizza") {
                            nourriture[1]++
                            //console.log(coca);
                        }
                        if (jsonUser[attribute]["value"] == "menthe") {
                            nourriture[2]++
                            // console.log(soda);
                        }
                        if (jsonUser[attribute]["value"] == "crepes") {
                            nourriture[3]++
                        }
                        if (jsonUser[attribute]["value"] == "ourson") {
                            nourriture[4]++
                        }
                        if (jsonUser[attribute]["type"] == "inconnu") {
                            nourriture[5]++
                        }
                    }
                }
            });
        }
    }
getNourriture();