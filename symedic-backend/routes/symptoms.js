'use strict';
let express = require('express');
let router = express.Router();
const request = require('request');
const constantFile = require('./constant');
var symptomsUrl = constantFile.apimedicUrl + 'body/locations?token=' + constantFile.token + '&' + constantFile.languageConst;

//  User Login route
router.get('/symptoms', function (req, res, next) {
    request(symptomsUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(response.body);
        } else {
            res.send(error);
        }
    });
});

module.exports = router;
