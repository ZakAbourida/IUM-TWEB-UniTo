const mongoose = require('mongoose');
/**
 * Schema Mongoose per la collezione "Games".
 * @type {Games}
 * @typedef {Object} Games
 * @property {number} attendance - Numero di spettatori durante la partita (obbligatorio).
 * @property {string} competition_id - Identificativo della competizione associata alla partita (obbligatorio).
 * @property {string} competition_type - Tipo di competizione (obbligatorio).
 * @property {number} game_id - Identificativo univoco della partita (obbligatorio).
 * @property {number} home_club_goals - Numero di gol segnati dal club di casa (obbligatorio).
 * @property {string} referee - Nome dell'arbitro (obbligatorio).
 * @property {string} url - URL associato alla partita (obbligatorio).
 * @property {string} aggregate - Risultato aggregato della partita (obbligatorio).
 * @property {number} away_club_goals - Numero di gol segnati dal club ospite (obbligatorio).
 * @property {Date} date - Data della partita, con un valore massimo pari all'anno corrente (obbligatoria).
 * @property {number} home_club_id - Identificativo del club di casa (obbligatorio).
 * @property {string} round - Turno della competizione (obbligatorio).
 * @property {number} away_club_id - Identificativo del club ospite (obbligatorio).
 * @property {string} home_club_manager_name - Nome del manager del club di casa (obbligatorio).
 * @property {number} season - Stagione della partita (obbligatoria).
 * @property {string} away_club_manager_name - Nome del manager del club ospite (obbligatorio).
 * @property {string} home_club_name - Nome del club di casa (obbligatorio).
 * @property {string} stadium - Nome dello stadio dove si è svolta la partita (obbligatorio).
 * @property {string} away_club_name - Nome del club ospite (obbligatorio).
 * @property {number} home_club_position - Posizione del club di casa (obbligatoria).
 * @property {number} away_club_position - Posizione del club ospite (obbligatoria).
 */
const Games = new mongoose.Schema(
    {
        attendance: {type: Number, required: true},
        competition_id: {type: String, required: true},
        competition_type: {type: String, required: true},
        game_id: {type: Number, required: true},
        home_club_goals: {type: Number, required: true},
        referee: {type: String, required: true},
        url: {type: String, required: true},
        aggregate: {type: String, required: true},
        away_club_goals: {type: Number, required: true},
        date: {type: Date, required: true, max: new Date().getFullYear()},
        home_club_id: {type: Number, required: true},
        round: {type: String, required: true},
        away_club_id: {type: Number, required: true},
        home_club_manager_name: {type: String, required: true},
        season: {type: Number, required: true},
        away_club_manager_name: {type: String, required: true},
        home_club_name: {type: String, required: true},
        stadium: {type: String, required: true},
        away_club_name: {type: String, required: true},
        home_club_position: {type: Number, required: true},
        away_club_position: {type: Number, required: true}
    }
);

// exporting the model
module.exports = mongoose.model('Games', Games);


