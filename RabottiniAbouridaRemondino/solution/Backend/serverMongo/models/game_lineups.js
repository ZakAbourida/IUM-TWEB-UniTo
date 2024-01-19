const mongoose = require('mongoose');

const Game_Lineups = new mongoose.Schema(
    {
        club_id: {type: Number, required: true},
        game_id: {type: Number, required: true},
        game_linenups_id: {type: String, required: true},
        number: {type: Number, required: true},
        player_id: {type: Number, required: true},
        player_name: {type: String, required: true},
        position: {type: String, required: true},
        team_captain: {type: Number, required: true},
        type: {type: String, required: true}
    }
);

// exporting the model
module.exports = mongoose.model('Game_Lineups', Game_Lineups);


