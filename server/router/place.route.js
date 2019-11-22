const express = require('express');
const route = express.Router();

const controlPlace = require('../controllers/place.controlle');
const auth= require('../Authen/login.authen')

route.post('/createPlace',auth.checkOauthToken,controlPlace.createPlace);
route.put('/editPlace/:id_place',auth.checkOauthToken,controlPlace.editPlace);
route.get('/getUserPlaces', auth.checkOauthToken,controlPlace.getUserPlaces);
route.get('/getAllPlace',controlPlace.getAllPlace);
route.delete('/deletePlace/:id_place', auth.checkOauthToken,controlPlace.deletePlace);
route.get('getDetailPlaces/:id_place',controlPlace.getDetailPlaces);
module.exports =route;