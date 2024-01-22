const mongoose = require('mongoose');
/**
 * Schema Mongoose per la collezione "Game_Events".
 * @type {GameEvents}
 * @typedef {Object} GameEvents
 * @property {number} club_id - Identificativo del club (obbligatorio).
 * @property {Date} date - Data dell'evento, con un valore massimo pari all'anno corrente (obbligatoria).
 * @property {string} description - Descrizione dell'evento (obbligatoria).
 * @property {number} game_id - Identificativo della partita associata all'evento (obbligatorio).
 * @property {number} minute - Minuto in cui si è verificato l'evento (obbligatorio).
 * @property {number} player_assist_id - Identificativo del giocatore che ha effettuato l'assist (obbligatorio).
 * @property {number} player_id - Identificativo del giocatore coinvolto nell'evento (obbligatorio).
 * @property {number} player_in_id - Identificativo del giocatore entrato in campo (obbligatorio).
 * @property {string} type - Tipo di evento (obbligatorio).
 * @property {string} game_event_id - Identificativo univoco dell'evento (obbligatorio).
 */
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


