const ClubGames = require('../models/club_games');

/**
 * Funzione asincrona per creare una nuova partita del club.
 * @param {Object} clubGameData - Dati della partita del club da creare.
 * @returns {Promise<Object>} - Promise che risolve con l'oggetto della partita del club appena creata.
 * @throws {Error} - Eccezione se si verifica un errore durante la creazione.
 */
const createClubGame = async (clubGameData) => {
    try {
        const newClubGame = new ClubGames(clubGameData);
        return await newClubGame.save();
    } catch (error) {
        throw error;
    }
};

/**
 * Funzione asincrona per ottenere tutte le partite del club nel database.
 * @returns {Promise<Array>} - Promise che risolve con un array di tutte le partite del club nel database.
 * @throws {Error} - Eccezione se si verifica un errore durante la lettura delle partite del club.
 */
const getClubGames = async () => {
    try {
        return await ClubGames.find();
    } catch (error) {
        throw error;
    }
};

/**
 * Funzione asincrona per ottenere una partita del club dato il suo ID.
 * @param {string} clubGameId - ID della partita del club da cercare.
 * @returns {Promise<Object|null>} - Promise che risolve con l'oggetto della partita del club trovata o null se non trovata.
 * @throws {Error} - Eccezione se si verifica un errore durante la lettura della partita del club per ID.
 */
const getClubGameById = async (clubGameId) => {
    try {
        return await ClubGames.findById(clubGameId);
    } catch (error) {
        throw error;
    }
};

/**
 * Funzione asincrona per modificare una partita del club cercandola tramite il suo ID.
 * @param {string} clubGameId - ID della partita del club da modificare.
 * @param {Object} updatedData - Dati aggiornati della partita di club.
 * @returns {Promise<Object|null>} - Promise che risolve con l'oggetto della partita del club aggiornata o null se non trovata.
 * @throws {Error} - Eccezione se si verifica un errore durante l'aggiornamento della partita del club.
 */
const updateClubGame = async (clubGameId, updatedData) => {
    try {
        return await ClubGames.findByIdAndUpdate(clubGameId, updatedData, { new: true });
    } catch (error) {
        throw error;
    }
};

/**
 * Funzione asincrona per eliminare una partita del club dato il suo ID.
 * @param {string} clubGameId - ID della partita del club da eliminare.
 * @returns {Promise<Object|null>} - Promise che risolve con l'oggetto della partita del club eliminata o null se non trovata.
 * @throws {Error} - Eccezione se si verifica un errore durante l'eliminazione della partita del club.
 */
const deleteClubGame = async (clubGameId) => {
    try {
        return await ClubGames.findByIdAndDelete(clubGameId);
    } catch (error) {
        throw error;
    }
};

/**
 * Funzione asincrona per trovare le partite del club dato l'ID del club.
 * @param {string} clubId - ID del club.
 * @returns {Promise<Array>} - Promise che risolve con un array di tutte le partite del club specificato.
 * @throws {Error} - Eccezione se si verifica un errore durante la ricerca delle partite del club.
 */
const findClubGamesByClubId = async (clubId) => {
    try {
        return await ClubGames.find({ club_id: clubId });
    } catch (error) {
        throw error;
    }
};

/**
 * Funzione asincrona per ottenere le statistiche del club dato il suo ID.
 * @param {string} clubId - ID del club.
 * @returns {Promise<Object>} - Promise che risolve con un oggetto contenente le statistiche del club.
 * @throws {Error} - Eccezione se si verifica un errore durante il calcolo delle statistiche del club.
 */
const getClubStats = async (clubId) => {
    try {
        const clubGames = await ClubGames.find({ club_id: clubId });

        const stats = {
            totalMatches: clubGames.length,                                                     // <-- Num. totale partite del club
            goalsScored: clubGames.reduce((total, game) => total + game.own_goals, 0),          // <-- Somma dei gol segnati dal club in tutte le partite
            goalsConceded: clubGames.reduce((total, game) => total + game.opponent_goals, 0),   // <-- Somma dei gol subiti dal club in tutte le partite
            victories: clubGames.filter(game => game.is_win === 1).length,                      // <-- Numero totale di vittorie del club (partite vinte)
            defeats: clubGames.filter(game => game.is_win === 0).length,                        // <-- Numero totale di sconfitte del club (partite perse)
        };

        return stats;
    } catch (error) {
        throw error;
    }
};

// Esporta le funzioni definite per l'utilizzo in altri moduli
module.exports = {
    createClubGame,
    getClubGames,
    getClubGameById,
    updateClubGame,
    deleteClubGame,
    findClubGamesByClubId,
    getClubStats
};