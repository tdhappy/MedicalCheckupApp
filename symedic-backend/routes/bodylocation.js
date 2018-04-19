'use strict';
let express = require('express');
let router = express.Router();
const request = require('request');
const constantFile = require('./constant');
const fixedUrl = constantFile.apimedicUrl + 'body/locations';
const queryString = '?token=' + constantFile.token + '&' + constantFile.languageConst;

//Symmedic-comment : Get Main Body Parts
router.get('/body/locations', function (req, res, next) {
    request(fixedUrl + queryString, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let resObj = new resFormat(response.body)
                .customMeta({
                    message: 'Main Body Parts retrieved Successfully.'
                });
            return res.status(resObj.getStatus()).json(resObj.log());
        } else {
            let resObj = new resFormat(error);
            return res.status(resObj.getStatus()).json(resObj.log());
        }
    });
});

//Symmedic-comment : Get Sub Body Parts
router.get('/body/locations/:mainBodyLocationId', function (req, res, next) {
    let uri = fixedUrl + '/' + req.params.mainBodyLocationId + queryString;
    request(uri, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let resObj = new resFormat(response.body)
                .customMeta({
                    message: 'Sub Body Parts retrieved Successfully.'
                });
            return res.status(resObj.getStatus()).json(resObj.log());
        } else {
            let resObj = new resFormat(error);
            return res.status(resObj.getStatus()).json(resObj.log());
        }
    });
});

module.exports = router;
