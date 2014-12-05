/**
 * Created by julescantegril on 05/12/2014.
 */

var urlDavid = "http://etud.insa-toulouse.fr/~livet/ServerLogger/david.json"
var urlJules = "http://etud.insa-toulouse.fr/~livet/ServerLogger/jules.json"

var currentRame = [];
var currentClicks = [];
var currentNbreClick = 0;


var express = require('express')
var app = express()

app.get('/david/click', function (req, res) {
   // console.log(currentClicks);
    res.send(currentClicks);
    //nbreClickDavid = 0
});

var server;
server = app.listen(3000, function () {

    getClickFromUrl(urlJules);

    var host = server.address().address
    var port = server.address().port

    console.    log('Example app listening at http://%s:%s', host, port)


});

var getClickFromUrl = function(url){
    var request = require("request");
    request(url, function(error, response, body){
        currentNbreClick = 0;
        currentClicks = [];
        var jsonUser = JSON.parse(body);

        var lastTimeMs = 0;
        var actualTimeMs = 0;

        for(var attribute in jsonUser){
            if(jsonUser[attribute].hasOwnProperty("clicks")){
                for (var att in jsonUser[attribute]["clicks"]) {
                    actualTimeMs = jsonUser[attribute]["clicks"][att];
                    currentNbreClick++;
                    if((actualTimeMs-lastTimeMs) > 120) {
                        lastTimeMs = jsonUser[attribute]["clicks"][att];
                        currentClicks.push({"clicks":jsonUser[attribute]["clicks"][att],"clickNumber":currentNbreClick});
                    }
                }
            }
        }
    });
};