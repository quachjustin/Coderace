const express = require('express');
const app = express();
const socketio = require('socket.io');
const mongoose = require('mongoose');

//3000 vs 3001; create react app by default listens to 3000; so pick unused port
const expressServer = app.listen(3001);

//returns http object so we pass that http to our socket io server
const io = socketio(expressServer);

//connect to mongolDb database locally
mongoose.connect('mongodb://localhost:27017/coderace', 
                {useNewUrlParser: true, useUnifiedTopology : true});

