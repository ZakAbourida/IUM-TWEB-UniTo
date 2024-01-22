const mongoose = require('mongoose');
/**
 * Schema Mongoose per la collezione "Game_Lineups".
 * @type {GameLineups}
 * @typedef {Object} GameLineups
 * @property {number} club_id - Identificativo del club (obbligatorio).
 * @property {number} game_id - Identificativo della partita associata alla formazione (obbligatorio).
 * @property {string} game_lineups_id - Identificativo univoco della formazione (obbligatorio).
 * @property {number} number - Numero del giocatore nella formazione (obbligatorio).
 * @property {number} player_id - Identificativo univoco del giocatore (obbligatorio).
 * @property {string} player_name - Nome del giocatore (obbligatorio).
 * @property {string} position - Posizione in cui gioca il giocatore nella formazione (obbligatoria).
 * @property {number} team_captain - Flag che indica se il giocatore è il capitano della squadra (obbligatorio).
 * @property {string} type - Tipo di formazione (obbligatorio).
 */
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


