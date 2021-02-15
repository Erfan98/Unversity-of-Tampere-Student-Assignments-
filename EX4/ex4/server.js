var express = require('express'); 
var app = express(); 
//var PORT = 3000; 

// Without middleware 
app.get('/json', function(req, res){ 
	res.json({ Monday: '0',
              Tuesday: '1',
              Wednesday: '2',
              Thursday: '3',
              Firday: '4',
              Satarday: '5',
              Sunday: '6'
 }); 
}); 

app.get('/html', function(req, res) {
    res.sendFile(__dirname + '/index.html')});


app.get('/html/0', function(req, res) {
    res.sendFile(__dirname + '/days/0.html')});
app.get('/html/1', function(req, res) {
    res.sendFile(__dirname + '/days/1.html')});
app.get('/html/2', function(req, res) {
    res.sendFile(__dirname + '/days/2.html')});
app.get('/html/3', function(req, res) {
    res.sendFile(__dirname + '/days/3.html')});
app.get('/html/4', function(req, res) {
    res.sendFile(__dirname + '/days/4.html')});
app.get('/html/5', function(req, res) {
    res.sendFile(__dirname + '/days/5.html')});
app.get('/html/6', function(req, res) {
    res.sendFile(__dirname + '/days/6.html')});


app.listen(3000, function(err){ 
	if (err) console.log(err); 
	console.log("Server listening on PORT", 3000); 
}); 
