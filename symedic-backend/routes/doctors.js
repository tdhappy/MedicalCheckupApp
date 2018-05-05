'use strict';
let express = require('express');
let router = express.Router();
const request = require('request');
const constantFile = require('./constant');
const fixedUrl = constantFile.apimedicUrl + 'symptoms';
const queryString = '?token=' + constantFile.token + '&' + constantFile.languageConst;
let resFormat = require("../helpers/res_format");

//  Get Symptoms based on sub body locations
router.post('/doctors', function (req, res, next) {
    if (!!req.body) {
        let specialization = req.body.specialization;
        let specializationArray = specialization.split(",");
        let uri = symptomsUrl + '/' + req.body.subBodyLocationId + '/' + req.body.gender + queryString;
        request(uri, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                let resObj = new resFormat(response.body)
                    .customMeta({
                        message: 'Symptoms retrieved Successfully.'
                    });
                return res.status(resObj.getStatus()).json(resObj.log());
            } else {
                let resObj = new resFormat(error);
                return res.status(resObj.getStatus()).json(resObj.log());
            }
        });
    } else {
        let error = new Error("Please enter valid Input");
        error.status = 400;
        let resObj = new resFormat(error);
        return res.status(resObj.getStatus()).json(resObj.log());
    }
});

module.exports = router;
