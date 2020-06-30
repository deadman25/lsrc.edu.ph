const http = require('http')
const fs = require('fs')
const port = 3000
const path = require('path')
const express = require('express')
const app = express();
import 'bootstrap/dist/css/bootstrap.min.css';


app.use(express.static(path.join(__dirname, '../node_modules'))); // npm
app.use(express.static('assets')); //ajax

app.get('/',function(req,res){
 	 res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.get('/senior',function(req,res){
 	 res.sendFile(path.join(__dirname + '/dist/senior.html'));
});

app.get('/college',function(req,res){
 	 res.sendFile(path.join(__dirname + '/dist/college.html'));
});

app.get('/requirements',function(req,res){
 	 res.sendFile(path.join(__dirname + '/dist/requirements.html'));
});

app.listen(port, () => {
	console.log('server in running on port : ' + port)
})

