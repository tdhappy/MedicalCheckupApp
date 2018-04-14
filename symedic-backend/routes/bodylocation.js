'use strict';
let express = require('express');
let router = express.Router();
const request = require('request');
const constantFile = require('./constant');
const fixedUrl = constantFile.apimedicUrl + 'body/locations';
const queryString = '?token=' + constantFile.token + '&' + constantFile.languageConst;

//Symmedic-comment : Get Main Body Locations
router.get('/body/locations', function (req, res, next) {
    request(fixedUrl + queryString, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(response.body);
        } else {
            res.send(error);
        }
    });
});

//Symmedic-comment : Get Sub Body Locations
router.get('/body/locations/:mainBodyLocationId', function (req, res, next) {
    let uri = fixedUrl + '/' + req.params.mainBodyLocationId + queryString;
    request(uri, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(response.body);
        } else {
            res.send(error);
        }
    });
});

module.exports = router;
