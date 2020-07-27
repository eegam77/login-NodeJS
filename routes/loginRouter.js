const express = require('express');
const bodyParser = require('body-parser');


const loginRouter = express.Router();

loginRouter.use(bodyParser.json());

loginRouter.route('/')
.all((req,res,next) =>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.post( (req,res) => {
    var name=req.body.username;
    var pword=req.body.password;
    var passw= /^[A-Za-z]\w{7,14}$/; 
    if(pword.length<=6)
    {
        statusCode=201;
        res.end('{\n ' + "status code:" + statusCode + ' \n' + 'password must be greater than 6 digits' + '\n}');
    }
    
    else if(!isNaN(name))
    {
        statusCode=203;
        res.end('{\n ' + '"status code":' + statusCode + ' \n' + '"msg": Failure: Only characters are allowed in username' + '\n}')
    }
    else if(pword.match(passw))
    {
        statusCode=202;
        res.end('{\n ' + "status code:" + statusCode + ' \n' + 'msg: Failure: Passwors to have 1 character and  number' + '\n}');
    }
    else
    {
        statusCode=200;
        res.end('{\n ' + '"status code":' + statusCode + ' \n' + '"msg": "Success"' + '\n}');
    }
})

module.exports = loginRouter;