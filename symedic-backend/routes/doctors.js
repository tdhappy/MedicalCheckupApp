'use strict';
let express = require('express');
let router = express.Router();
const request = require('request');
let resFormat = require("../helpers/res_format");
let doctorSpecializationUrl = 'https://api.betterdoctor.com/2016-03-01/specialties?fields=uid%2Cname&user_key=2ed4c0595ab2ef6f95892b0bb442bfea';
let findDoctorsUrl = 'https://api.betterdoctor.com/2016-03-01/doctors';
let userKey = 'debf9e352077860867ec89335f9de7d8';
const _ = require('lodash');
var zipcodes = require('zipcodes');

//  Get doctors based on specialization and zipcodes
router.post('/doctors', function (req, res, next) {
    if (!!req.body) {
        let specialization = req.body.specialization;
        let specializationArray = specialization.split(",");
        let doctorApiSpecializations = [];
        let filteredSpecialization = [];
        request(doctorSpecializationUrl, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                if (JSON.parse(response.body).data.length > 0) {
                    doctorApiSpecializations = JSON.parse(response.body).data;
                    for (let i = 0; i < specializationArray.length; i++) {
                        var results = _.filter(doctorApiSpecializations, function (item) {
                            return item.name.toLowerCase().includes(specializationArray[i].toLowerCase());
                        });
                        for (let j = 0; j < results.length; j++) {
                            filteredSpecialization.push(results[j].uid);
                        }
                    }
                    console.log("filteredSpecialization :", filteredSpecialization);
                    if (filteredSpecialization.length > 0) {
                        let zipVals = zipcodes.lookup(req.body.zipcode);
                        let location = zipVals.latitude + "," + zipVals.longitude;
                        console.log("location ::::",location);
                        var propertiesObject = { specialty_uid: filteredSpecialization.join(","), location: location + ",100", user_location: location, user_key: userKey };
                        request({ url: findDoctorsUrl, qs: propertiesObject }, function (error, response, body) {
                            console.log("error :",error);
                            console.log("response.statusCode ::::",response.statusCode);
                            if (!error && response.statusCode == 200) {
                                let resObj = new resFormat(JSON.parse(response.body).data)
                                    .customMeta({
                                        message: 'Doctors retrieved Successfully.'
                                    });
                                return res.status(resObj.getStatus()).json(resObj.log());
                            } else {
                                let error = new Error("Issue finding doctors for specified specialities");
                                error.status = 404;
                                let resObj = new resFormat(error);
                                return res.status(resObj.getStatus()).json(resObj.log());
                            }
                        });
                    } else {
                        let error = new Error("No Doctors Found for specified specialities");
                        error.status = 404;
                        let resObj = new resFormat(error);
                        return res.status(resObj.getStatus()).json(resObj.log());
                    }

                }
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
