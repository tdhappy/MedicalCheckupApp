'use strict';
let express = require('express');
let router = express.Router();
const request = require('request');
const constantFile = require('./constant');
var birthByAgeAtDate = require('birth-by-age-at-date');
const fixedUrl = constantFile.apimedicUrl + 'diagnosis';
const queryString = '&token=' + process.env.apiMedicToken + '&' + constantFile.languageConst;
let resFormat = require("../helpers/res_format");

//  Get diagnosis based on sub body locations
router.post('/diagnosis', function (req, res, next) {
    if (!!req.body) {
        let birthYear = birthByAgeAtDate(req.body.age, new Date()).lowerYear;
        let uri = fixedUrl + '?symptoms=[' + req.body.symptoms + ']&gender='
            + req.body.gender + '&year_of_birth=' + birthYear + '&token=' + process.env.apiMedicToken + '&' + constantFile.languageConst;
        request(uri, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                let resObj = new resFormat(JSON.parse(response.body))
                    .customMeta({
                        message: 'Diagnosis retrieved Successfully.'
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
