const Appearances = require('../models/appearances');

/**
 * Funzione asincrona per creare una nuova presenza
 * @param {Object} appearanceData - Dati della presenza da creare
 * @returns {Promise<Object>} - Promise che risolve con l'oggetto dell'apparizione appena creata
 * @throws {Error} - Eccezione se si verifica un errore durante la creazione
 */
const createAppearance = async (appearanceData) => {
    try {
        const newAppearance = new Appearances(appearanceData);

        return await newAppearance.save();
    } catch (error) {
        throw error;
    }
};

/**
 * Funzione asincrona per ottenere tutte le presenze nel database
 * @returns {Promise<Array>} - Promise che risolve con un array di tutte le presenze nel database
 * @throws {Error} - Eccezione se si verifica un errore durante la lettura delle presenze
 */
const getAppearances = async () => {
    try {
        return await Appearances.find();
    } catch (error) {
        throw error;
    }
};

/**
 * Funzione asincrona per ottenere una presenza dato il suo ID
 * @param {string} appearanceId - ID della presenza da cercare
 * @returns {Promise<Object|null>} - Promise che risolve con l'oggetto della presenza trovata o null se non trovata
 * @throws {Error} - Eccezione se si verifica un errore durante la lettura della presenza per ID
 */
const getAppearanceById = async (appearanceId) => {
    try {
        return await Appearances.findById(appearanceId);
    } catch (error) {
        throw error;
    }
};

/**
 * Funzione asincrona per modificare una presenza cercandola tramite il suo ID
 * @param {string} appearanceId - ID della presenza da modificare
 * @param {Object} updatedData - Dati aggiornati della presenza
 * @returns {Promise<Object|null>} - Promise che risolve con l'oggetto della presenza aggiornata o null se non trovata
 * @throws {Error} - Eccezione se si verifica un errore durante l'aggiornamento della presenza
 */
const updateAppearance = async (appearanceId, updatedData) => {
    try {
        return await Appearances.findByIdAndUpdate(appearanceId, updatedData, { new: true });
    } catch (error) {
        throw error;
    }
};

/**
 * Funzione asincrona per eliminare una presenza dato il suo ID
 * @param {string} appearanceId - ID della presenza da eliminare
 * @returns {Promise<Object|null>} - Promise che risolve con l'oggetto della presenza eliminata o null se non trovata
 * @throws {Error} - Eccezione se si verifica un errore durante l'eliminazione della presenza
 */
const deleteAppearance = async (appearanceId) => {
    try {
        return await Appearances.findByIdAndDelete(appearanceId);
    } catch (error) {
        throw error;
    }
};
/**
 * Funzione asincrona per trovare le presenze di un giocatore dato l'ID del giocatore
 * @param {string} playerId - ID del giocatore
 * @returns {Promise<Array>} - Promise che risolve con un array di tutte le presenze del giocatore
 * @throws {Error} - Eccezione se si verifica un errore durante la ricerca delle presenze del giocatore
 */
const findPlayerAppearances = async (playerId) => {
    try {
        return await Appearances.find({ player_id: playerId });
    } catch (error) {
        throw error;
    }
};

/**
 * Funzione asincrona per ottenere le informazioni di una presenza di un giocatore dato il suo nome
 * @param {string} player_name - Nome del giocatore
 * @returns {Promise<Object>} - Promise che risolve con le informazioni aggregate della presenza del giocatore
 * @throws {Error} - Eccezione se si verifica un errore durante la ricerca delle informazioni sulla presenza del giocatore
 */
const findPlayerInfoAppearances = async (player_name) => {
    try {
        // Utilizza l'aggregazione per calcolare statistiche sulle presenze del giocatore
        const result = await Appearances.aggregate([
            { $match: { player_name } },
            {
                $group: {
                    _id: null,
                    totalAppearances: { $sum: 1 },
                    totalYellowCards: { $sum: "$yellow_cards" },
                    totalRedCards: { $sum: "$red_cards" },
                    totalGoals: { $sum: "$goals" },
                    totalAssists: { $sum: "$assists" },
                    totalMinutesPlayed: { $sum: "$minutes_played" }
                }
            }
        ]);
        return result[0] || {
            totalAppearances: 'Nessun Dato',
            totalYellowCards: 'Nessun Dato',
            totalRedCards: 'Nessun Dato',
            totalGoals: 'Nessun Dato',
            totalAssists: 'Nessun Dato',
            totalMinutesPlayed: 'Nessun Dato'
        };
    } catch (error) {
        throw error;
    }
};

// Esporta le funzioni definite per l'utilizzo in altri moduli
module.exports = {
    createAppearance,
    getAppearances,
    getAppearanceById,
    updateAppearance,
    deleteAppearance,
    findPlayerAppearances,
    findPlayerInfoAppearances
};