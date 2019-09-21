async function addCommand(req, res){
    const {command_body} = req.body;
    const db = req.app.get('db');
    const commands = await db.command.addCommand(command_body, req.session.user.user_id);
    res.status(200).json(commands);
}



module.exports ={ 
    addCommand
    
}