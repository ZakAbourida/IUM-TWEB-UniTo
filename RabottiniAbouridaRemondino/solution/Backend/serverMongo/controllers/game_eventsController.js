const GameEvents = require('../models/game_events');

/**
 * Funzione asincrona per creare un nuovo evento di gioco.
 * @param {Object} gameEventData - Dati dell'evento di gioco da creare.
 * @returns {Promise<Object>} - Promise che risolve con l'oggetto dell'evento di gioco appena creato.
 * @throws {Error} - Eccezione se si verifica un errore durante la creazione.
 */
const createGameEvent = async (gameEventData) => {
    try {
        const newGameEvent = new GameEvents(gameEventData);
        return await newGameEvent.save();
    } catch (error) {
        throw error;
    }
};

/**
 * Funzione asincrona per ottenere tutti gli eventi di gioco nel database.
 * @returns {Promise<Array>} - Promise che risolve con un array di tutti gli eventi di gioco nel database.
 * @throws {Error} - Eccezione se si verifica un errore durante la lettura degli eventi di gioco.
 */
const getGameEvents = async () => {
    try {
        return await GameEvents.find();
    } catch (error) {
        throw error;
    }
};

/**
 * Funzione asincrona per ottenere un evento di gioco dato il suo ID.
 * @param {string} gameEventId - ID dell'evento di gioco da cercare.
 * @returns {Promise<Object|null>} - Promise che risolve con l'oggetto dell'evento di gioco trovato o null se non trovato.
 * @throws {Error} - Eccezione se si verifica un errore durante la lettura dell'evento di gioco per ID.
 */
const getGameEventById = async (gameEventId) => {
    try {
        return await GameEvents.findById(gameEventId);
    } catch (error) {
        throw error;
    }
};

/**
 * Funzione asincrona per modificare un evento di gioco cercandolo tramite il suo ID.
 * @param {string} gameEventId - ID dell'evento di gioco da modificare.
 * @param {Object} updatedData - Dati aggiornati dell'evento di gioco.
 * @returns {Promise<Object|null>} - Promise che risolve con l'oggetto dell'evento di gioco aggiornato o null se non trovato.
 * @throws {Error} - Eccezione se si verifica un errore durante l'aggiornamento dell'evento di gioco.
 */
const updateGameEvent = async (gameEventId, updatedData) => {
    try {
        return await GameEvents.findByIdAndUpdate(gameEventId, updatedData, { new: true });
    } catch (error) {
        throw error;
    }
};

/**
 * Funzione asincrona per eliminare un evento di gioco dato il suo ID.
 * @param {string} gameEventId - ID dell'evento di gioco da eliminare.
 * @returns {Promise<Object|null>} - Promise che risolve con l'oggetto dell'evento di gioco eliminato o null se non trovato.
 * @throws {Error} - Eccezione se si verifica un errore durante l'eliminazione dell'evento di gioco.
 */
const deleteGameEvent = async (gameEventId) => {
    try {
        return await GameEvents.findByIdAndDelete(gameEventId);
    } catch (error) {
        throw error;
    }
};

/**
 * Funzione asincrona per trovare gli eventi di gioco dato l'ID del club.
 * @param {string} clubId - ID del club.
 * @returns {Promise<Array>} - Promise che risolve con un array di tutti gli eventi di gioco del club specificato.
 * @throws {Error} - Eccezione se si verifica un errore durante la ricerca degli eventi di gioco del club.
 */
const findGameEventsByClubId = async (clubId) => {
    try {
        return await GameEvents.find({ club_id: clubId });
    } catch (error) {
        throw error;
    }
};

// Esporta le funzioni definite per l'utilizzo in altri moduli
module.exports = {
    createGameEvent,
    getGameEvents,
    getGameEventById,
    updateGameEvent,
    deleteGameEvent,
    findGameEventsByClubId,
};
