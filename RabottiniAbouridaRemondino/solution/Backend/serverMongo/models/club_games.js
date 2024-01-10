const mongoose = require('mongoose');

const Club_Games = new mongoose.Schema(
    {
        club_id: {type: Number, required: true},
        game_id: {type: Number, required: true},
        hosting: {type: String, required: true},
        opponent_goals: {type: Number, required: true},
        is_win: {type: Number, required: true},
        opponent_id:{type: Number , required: true},
        opponent_manager_name: {type: String, required: true},
        opponent_position: {type: Number, required: true},
        own_goals: {type: Number, required: true},
        own_manager_name: {type: String, required: true},
        own_position: {type: Number, required: true}
    }
);

// exporting the model
module.exports = mongoose.model('Club_Games', Club_Games);


