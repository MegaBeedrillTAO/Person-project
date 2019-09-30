async function editSettings(req, res){
    const {name, background_color, container_color, chat_bubble_color, language, zipcode, country} = req.body;
    const{user_id} = req.session.user;
    const db = req.app.get('db');
    const newSettings = await db.setting.editSettings(name, background_color, container_color, chat_bubble_color, language, zipcode, country,  user_id);
    
    req.session.settings = {
        name: newSettings[0].name,
        background_color: newSettings[0].background_color,
        container_color: newSettings[0].container_color,
        chat_bubble_color: newSettings[0].chat_bubble_color,
        language: newSettings[0].language,
        zipcode: newSettings[0].zipcode,
        country: newSettings[0].country
    }
    res.status(200).json(req.session.settings);
}

async function getSettings(req, res){
    const db = req.app.get('db');
    const{user_id} = req.session.user;
    const userSettings = await db.setting.getSettings(user_id);
    req.session.settings = {
        name: userSettings[0].name,
        background_color: userSettings[0].background_color,
        container_color: userSettings[0].container_color,
        chat_bubble_color: userSettings[0].chat_bubble_color,
        language: userSettings[0].language,
        user_id: user_id,
        zipcode: userSettings[0].zipcode,
        country: userSettings[0].country
     }
     res.status(200).json(req.session.settings);
}

async function getCurrentSettings(req,res){
    const db = req.app.get('db');
    const{user_id} = req.session.user;
    const currentSettings = await db.setting.getCurrentSettings(user_id);
    req.session.current  ={
        username: currentSettings.username,
        name: currentSettings.name,
        background_color: currentSettings.background_color,
        container_color: currentSettings.container_color,
        chat_bubble_color: currentSettings.chat_bubble_color,
        language: currentSettings.language,
        zipcode: currentSettings.zipcode,
        country: currentSettings.country

    }
}

module.exports = {
    editSettings,
    getSettings,
    getCurrentSettings
}