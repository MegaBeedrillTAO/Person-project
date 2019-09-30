//require('dotenv').config();
const {WEATHER_KEY} = process.env;
const axios = require('axios');


async function getWeather(req,res){
    const {zipcode, country} = req.session.settings;
    const weather = await axios.get(`api.openweathermap.org/data/2.5/weather?zip=${zipcode},${country}&APPID=${WEATHER_KEY}&units=imperial`)
    .then(response => response.data)
    
    res.status(200).json(weather);
}

module.exports = {
    getWeather
}