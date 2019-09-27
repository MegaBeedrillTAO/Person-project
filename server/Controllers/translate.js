const {Translate} = require('@google-cloud/translate');
require('dotenv').config();

const {API_KEY} = process.env;




const translate = new Translate({key: API_KEY});

module.exports = {
    translateText: async (req, res) => {
        const {text,  target} = req.body;
        
        const [translation] = await translate.translate(text, target);
        
        res.status(200).json(translation);
    },
    getSupportedLang: async (req, res) => {
        const [lang] = await translate.getLanguages();
        res.status(200).json(lang);
    }
}