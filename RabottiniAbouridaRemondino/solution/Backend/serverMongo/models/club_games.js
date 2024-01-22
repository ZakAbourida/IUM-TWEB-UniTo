const mongoose = require('mongoose');
/**
 * Schema Mongoose per la collezione "Club_Games".
 * @type {ClubGames}
 * @typedef {Object} ClubGames
 * @property {number} club_id - Identificativo del club (obbligatorio).
 * @property {number} game_id - Identificativo della partita (obbligatorio).
 * @property {string} hosting - Indica se il club è l'ospitante o il visitatore (obbligatorio).
 * @property {number} opponent_goals - Numero di gol segnati dall'avversario (obbligatorio).
 * @property {number} is_win - Indica se il club ha vinto la partita (obbligatorio).
 * @property {number} opponent_id - Identificativo dell'avversario (obbligatorio).
 * @property {string} opponent_manager_name - Nome del manager dell'avversario (obbligatorio).
 * @property {number} opponent_position - Posizione dell'avversario (obbligatorio).
 * @property {number} own_goals - Numero di autogol segnati dal club (obbligatorio).
 * @property {string} own_manager_name - Nome del manager del club (obbligatorio).
 * @property {number} own_position - Posizione del club (obbligatorio).
 */
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


