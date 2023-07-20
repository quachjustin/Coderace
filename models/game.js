const mongoose = require('mongoose');

//creating schema
const PlayerSchema = new mongoose.Schema({
    currentWordIndex: {
        //array of words; we start at 0;
        type: Number,
        default: 0
    },
    socketID : {type : String},

    //able to start game; partyleader true or false;
    isPartyLeader: {type : Boolean, default : false},

    //words for minute; default at -1 so it doesnt start counting
    WPM: {type: Number, default: -1},

    //usernames type string
    nickName: {type: String}

});