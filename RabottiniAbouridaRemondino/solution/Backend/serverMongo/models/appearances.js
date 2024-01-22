const mongoose = require('mongoose');
/**
 * Schema Mongoose per la collezione "Appearances".
 * @type {Appearances}
 * @typedef {Object} Appearances
 * @property {string} appearance_id - Identificativo univoco dell'apparizione (obbligatorio).
 * @property {string} competition_id - Identificativo della competizione associata all'apparizione (obbligatorio).
 * @property {Date} date - Data dell'apparizione, con un valore massimo pari all'anno corrente (obbligatoria).
 * @property {number} game_id - Identificativo della partita associata all'apparizione (obbligatorio).
 * @property {number} goals - Numero di gol segnati durante l'apparizione (obbligatorio).
 * @property {number} minutes_played - Minuti giocati durante l'apparizione (obbligatorio).
 * @property {number} player_club_id - Identificativo del club del giocatore (obbligatorio).
 * @property {number} player_id - Identificativo univoco del giocatore (obbligatorio).
 * @property {string} player_name - Nome del giocatore (obbligatorio).
 * @property {number} red_cards - Numero di cartellini rossi ricevuti durante l'apparizione (obbligatorio).
 * @property {number} yellow_cards - Numero di cartellini gialli ricevuti durante l'apparizione (obbligatorio).
 * @property {number} assists - Numero di assist effettuati durante l'apparizione (obbligatorio).
 * @property {number} player_current_club_id - Identificativo del club attuale del giocatore (obbligatorio).
 */
const Appearances = new mongoose.Schema(
    {
        appearance_id: {type: String, required: true},
        competition_id: {type: String, required: true},
        date: {type: Date, required: true, max: new Date().getFullYear()},
        game_id: {type: Number, required: true},
        goals: {type: Number, required: true},
        minutes_played:{type: Number , required: true},
        player_club_id: {type: Number, required: true},
        player_id: {type: Number, required: true},
        player_name: {type: String, required: true},
        red_cards: {type: Number, required: true},
        yellow_cards: {type: Number, required: true},
        assists: {type: Number, required: true},
        player_current_club_id: {type: Number, required: true}
    }
);

// esportazione del modello
module.exports = mongoose.model('Appearances', Appearances);


