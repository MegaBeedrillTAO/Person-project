const {Translate} = require('@google-cloud/translate');
require('dotenv').config();

const {PROJECT} = process.env;
const {languages} = require('./langList');



const translate = new Translate({projectId});

module.exports = {
    translateText: async (req, res) => {
        const {text,  target} = req.body;
        let lang = '';
        for (let i = 0; i< languages.length; i++){
            if (target.toLowerCase() === languages[i].language.toLowerCase()){
                lang = languages[i].code;
            }
        }
        const [translation] = await translate.translate(text, lang);
        res.status(200).json(translation);
    }
}