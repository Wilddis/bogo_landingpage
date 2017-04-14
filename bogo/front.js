#!/usr/bin/env nodejs
var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();

// home route
app.get('/', function (req, res) {
  return res.render('frontpage');
});

// view setup
app.set('view engine', 'ejs');

// serve static files from /public
app.use(express.static(__dirname + '/public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
