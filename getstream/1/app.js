const app = require('express')();
const _ = require('lodash');

const getstream = require('getstream');
client = getstream.connect('grp9qmskju4z', '9vxyutu22pe6qkxv536vcemddkwbeqkp4f9xfawz4gqdb4nk8yf7mv6mz57x34hq', '35192');

const users = require('./users.json')

app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.render('index', {users})
})

app.get('/user/:username', function(req,res){
    const user = _.find(users, {username: req.params.username})
    console.log(req.params)
    res.render('user', {name: user.name, username: user.username})
})

app.post('/user/:username/status', function(req,res){
    client.feed('user', req.params.username)
    let activity = {actor: `User:${req.params.username}`, verb: "pin", object: "status:1", status: req.params.status}
    res.redirect(`/user/${req.params.username}`)
})

app.listen(3000, ()=>{console.log('listening')})