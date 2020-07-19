const express=require('express');
const http=require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname='localhost';
const port=3000;


const app=express();
app.use(morgan('dev'));
app.use(bodyParser.json());


app.all('/dishes', (req,res,next) =>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});


app.get('/dishes',(req,res) => {
    res.end('will send all the dishes to you!');
});

app.post('/dishes', (req,res) => {
    res.end('will add the dish: ' + req.body.name + 'with details ' + req.body.description);
});

app.put('/dishes', (req,res) => {
    statusCode=403;
    res.end('put operation not supported ');
});

app.delete('/dishes', (req,res) => {
    res.end('deleting all the dishes');
});

app.get('/dishes/:dishId',(req,res) => {
    res.end('will send the details of the  dishe to you!' + req.params.dishId);
});

app.post('/dishes/:dishId', (req,res) => {
    statusCode=403;
    res.end('put operation not supported ');
});

app.put('/dishes/:dishId', (req,res) => {
    res.write('will update the dish : ' + req.params.dishId );
    res.end('will update the dish: ' + req.body.name + 'with details ' + req.body.description);
});

app.delete('/dishes/:dishId', (req,res) => {
    res.end('deleting the dish:' + req.params.dishId);
});

app.use(express.static(__dirname+'/public'));


app.use((req,res,next) =>{
    
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>this is an express server</h1></body></html>');
});

const server=http.createServer(app);

server.listen(port,hostname, () =>{
    console.log(`server running at http:// ${hostname}:${port}`);
});