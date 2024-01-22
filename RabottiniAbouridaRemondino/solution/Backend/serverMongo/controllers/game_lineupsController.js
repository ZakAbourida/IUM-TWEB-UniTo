const GameLineups = require('../models/game_lineups');

/**
 * Funzione asincrona per creare una nuova formazione di gioco.
 * @param {Object} gameLineupData - Dati della formazione di gioco da creare.
 * @returns {Promise<Object>} - Promise che risolve con l'oggetto della formazione di gioco appena creata.
 * @throws {Error} - Eccezione se si verifica un errore durante la creazione.
 */
const createGameLineup = async (gameLineupData) => {
    try {
        const newGameLineup = new GameLineups(gameLineupData);
        return await newGameLineup.save();
    } catch (error) {
        throw error;
    }
};

/**
 * Funzione asincrona per ottenere tutte le formazioni di gioco nel database.
 * @returns {Promise<Array>} - Promise che risolve con un array di tutte le formazioni di gioco nel database.
 * @throws {Error} - Eccezione se si verifica un errore durante la lettura delle formazioni di gioco.
 */
const getGameLineups = async () => {
    try {
        return await GameLineups.find();
    } catch (error) {
        throw error;
    }
};

/**
 * Funzione asincrona per ottenere una formazione di gioco dato il suo ID.
 * @param {string} gameLineupId - ID della formazione di gioco da cercare.
 * @returns {Promise<Object|null>} - Promise che risolve con l'oggetto della formazione di gioco trovata o null se non trovata.
 * @throws {Error} - Eccezione se si verifica un errore durante la lettura della formazione di gioco per ID.
 */
const getGameLineupById = async (gameLineupId) => {
    try {
        return await GameLineups.findById(gameLineupId);
    } catch (error) {
        throw error;
    }
};

/**
 * Funzione asincrona per modificare una formazione di gioco cercandola tramite il suo ID.
 * @param {string} gameLineupId - ID della formazione di gioco da modificare.
 * @param {Object} updatedData - Dati aggiornati della formazione di gioco.
 * @returns {Promise<Object|null>} - Promise che risolve con l'oggetto della formazione di gioco aggiornata o null se non trovata.
 * @throws {Error} - Eccezione se si verifica un errore durante l'aggiornamento della formazione di gioco.
 */
const updateGameLineup = async (gameLineupId, updatedData) => {
    try {
        return await GameLineups.findByIdAndUpdate(gameLineupId, updatedData, { new: true });
    } catch (error) {
        throw error;
    }
};

/**
 * Funzione asincrona per eliminare una formazione di gioco dato il suo ID.
 * @param {string} gameLineupId - ID della formazione di gioco da eliminare.
 * @returns {Promise<Object|null>} - Promise che risolve con l'oggetto della formazione di gioco eliminata o null se non trovata.
 * @throws {Error} - Eccezione se si verifica un errore durante l'eliminazione della formazione di gioco.
 */
const deleteGameLineup = async (gameLineupId) => {
    try {
        return await GameLineups.findByIdAndDelete(gameLineupId);
    } catch (error) {
        throw error;
    }
};

/**
 * Funzione asincrona per trovare le formazioni di gioco dato l'ID del club.
 * @param {string} clubId - ID del club.
 * @returns {Promise<Array>} - Promise che risolve con un array di tutte le formazioni di gioco del club specificato.
 * @throws {Error} - Eccezione se si verifica un errore durante la ricerca delle formazioni di gioco del club.
 */
const findGameLineupsByClubId = async (clubId) => {
    try {
        return await GameLineups.find({ club_id: clubId });
    } catch (error) {
        throw error;
    }
};

// Esporta le funzioni definite per l'utilizzo in altri moduli
module.exports = {
    createGameLineup,
    getGameLineups,
    getGameLineupById,
    updateGameLineup,
    deleteGameLineup,
    findGameLineupsByClubId,
};
