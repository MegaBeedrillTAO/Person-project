async function editSettings(req, res){
    const {name, background_color, container_color, chat_bubble_color, language} = req.body;
    const{user_id} = req.session.user;
    const db = req.app.get('db');
    const newSettings = await db.setting.editSettings(name, background_color, container_color, chat_bubble_color, language, user_id);
    
    req.session.settings = {
        name: newSettings[0].name,
        background_color: newSettings[0].background_color,
        container_color: newSettings[0].container_color,
        chat_bubble_color: newSettings[0].chat_bubble_color,
        language: newSettings[0].language
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
        user_id: user_id
     }
     res.status(200).json(req.session.settings);
}



module.exports = {
    editSettings,
    getSettings
}