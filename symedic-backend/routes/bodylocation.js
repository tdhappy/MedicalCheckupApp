'use strict';
let express = require('express');
let router = express.Router();
const request = require('request');
const constantFile = require('./constant');
const fixedUrl = constantFile.apimedicUrl + 'body/locations';
const queryString = '?token=' + process.env.doctorToken + '&' + constantFile.languageConst;
let resFormat = require("../helpers/res_format");

//Symmedic-comment : Get Main Body Parts
router.get('/body/locations', function (req, res, next) {
    request(fixedUrl + queryString, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let resObj = new resFormat(JSON.parse(response.body))
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


router.get('/doctor-token/:token', function (req, res) {
    console.log();
    process.env.doctorToken = req.params.token;
    res.locals.doctorToken = req.params.token;
    return res.status(200).json({"success": process.env.doctorToken});
});
/*
express.Router().get('/doctor-token/:token', function (req, res) {
    console.log(res);
    process.env.doctorToken = req.params.token;
   res.locals.doctorToken = req.params.token;
    return res.status(200).json({"success": process.env.doctorToken});
});

express.Router().get('/apimedic-token/:token', function (req, res) {
    //apiMedicToken
    process.env.apiMedicToken = req.params.token;
res.locals.apiMedicToken = req.params.token;
   */
router.get('/apimedic-token/:token', function (req, res) {
    //apiMedicToken
    process.env.apiMedicToken = req.params.token;
    return res.status(200).json({"success": process.env.apiMedicToken});
});

//Symmedic-comment : Get Sub Body Parts
router.get('/body/locations/:mainBodyLocationId', function (req, res, next) {
    let uri =fixedUrl + '/' + req.params.mainBodyLocationId + '?token=' + process.env.apiMedicToken + '&' + constantFile.languageConst;
    request(uri, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let resObj = new resFormat(JSON.parse(response.body))
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
