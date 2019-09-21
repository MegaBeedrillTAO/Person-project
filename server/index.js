require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session');
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;
const {login, logout, register,deleteUser} = require('./Controllers/authController');
const {addCommand} = require('./Controllers/commandController');
const {editSettings} = require('./Controllers/settingController');


app.use(express.json());

massive(CONNECTION_STRING).then(dbInst => {
    app.set("db", dbInst);
    console.log('Connected to Database');
})

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
})) 


app.post('/auth/login', login);
app.post('/auth/logout', logout);
app.post('/auth/register', register);
app.delete('/auth/delete', deleteUser);

app.post('/command/add', addCommand);



app.put('/settings/edit', editSettings);



app.listen(SERVER_PORT, () =>{
    console.log(`Listening on port ${SERVER_PORT}`);
})