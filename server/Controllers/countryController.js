const Axios = require('axios');

async function getCountries(req, res){
    const countries = await Axios.get('https://restcountries.eu/rest/v2/all').then(response => response.data);
    res.status(200).json(countries);
}


module.exports = {
    getCountries
}