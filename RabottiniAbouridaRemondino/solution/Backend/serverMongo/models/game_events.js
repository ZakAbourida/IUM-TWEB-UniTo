const mongoose = require('mongoose');

const Game_Events = new mongoose.Schema(
    {
        club_id: {type: Number, required: true},
        date: {type: Date, required: true, max: new Date().getFullYear()},
        description: {type: String, required: true},
        game_id: {type: Number, required: true},
        minute:{type: Number , required: true},
        player_assist_id: {type: Number, required: true},
        player_id: {type: Number, required: true},
        player_in_id: {type: Number, required: true},
        type: {type: String, required: true},
        game_event_id: {type: String, required: true}
    }
);

// exporting the model
module.exports = mongoose.model('Game_Events', Game_Events);


