const bcrypt = require('bcryptjs');


async function login(req, res){
    const {username, password} = req.body;
      const db = req.app.get('db');

      const foundUser = await db.auth.checkForUserName(username);

      if (!foundUser[0]) {
         res.status(403).json("Username or Password incorrect")
      } 
      else {

         const isAuthenticated = bcrypt.compareSync(password, foundUser[0].password)

         if (!isAuthenticated) {
            res.status(403).json("Username or Password incorrect")
         } else {

            const userSettings = await db.setting.getSettings(foundUser[0].user_id);
            console.log(userSettings[0].name);
            req.session.user = {
               user_id: foundUser[0].user_id,
               username: foundUser[0].username,
               
            };

            req.session.settings = {
               name: userSettings[0].name,
               background_color: userSettings[0].background_color,
               container_color: userSettings[0].container_color,
               chat_bubble_color: userSettings[0].chat_bubble_color,
               language: userSettings[0].language,
               user_id: foundUser[0].user_id
            }


            res.status(200).json([req.session.user, req.session.settings]);
         }
      }
}

async function logout(req, res){
    req.session.destroy();
    res.sendStatus(200);
}

async function register(req, res){
    const {username, password} = req.body;
      const db = req.app.get('db');

      const foundUser = await db.auth.checkForUserName(username);

      if (foundUser[0]) {
         res.status(409).json("Username Taken")
      } else {

         const salt = bcrypt.genSaltSync(10);
         const hash = bcrypt.hashSync(password, salt)

         const newUser = await db.auth.registerUser(username, hash);
         
         const newSettings = await db.setting.createSettings(username, newUser[0].user_id);
         req.session.user = {
            user_id: newUser[0].user_id,
            username: newUser[0].username,
            
         };

         req.session.settings ={
            name: newUser[0].username,
            background_color: newSettings[0].background_color,
            container_color: newSettings[0].container_color,
            chat_bubble_color: newSettings[0].chat_bubble_color,
            language: newSettings[0].language,
            user_id: newUser[0].user_id
         }

         res.status(200).json([req.session.user, req.session.settings]);
      }
}

async function deleteUser(req, res){
    const {user_id} = req.session.user;
    
    const db = req.app.get('db');
    await db.auth.deleteUser(user_id);
    req.session.destroy();
    res.sendStatus(200);
}

module.exports = {
    login,
    logout,
    register,
    deleteUser
}