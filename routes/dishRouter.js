const express = require('express');
const bodyParser = require('body-parser');


const dishRouter = express.Router();


dishRouter.use(bodyParser.json());


dishRouter.route('/')
.all((req,res,next) =>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})


.get((req,res) => {
    res.end('will send all the dishes to you!');
})

.post( (req,res) => {
    res.end('will add the dish: ' + req.body.name + 'with details ' + req.body.description);
})

.put( (req,res) => {
    statusCode=403;
    res.end('put operation not supported ');
})

.delete( (req,res) => {
    res.end('deleting all the dishes');
});

module.exports = dishRouter;