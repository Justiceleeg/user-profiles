const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const session = require('express-session')
const config = require('./.config')
const userCtrl = require('./controllers/userCtrl')
const profileCtrl = require('./controllers/profileCtrl')


const app = express()

var corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(session({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: false
}))
app.use(bodyParser.json())
app.use(cors(corsOptions));
app.use(express.static(__dirname + '/public'));


app.post('/api/login', userCtrl.login)
app.get('/api/profiles', profileCtrl.getFriendsProfiles)

app.listen(3000, () => {console.log('Listening on 3000')})
