const Games = require('../models/games');

/**
 * Funzione asincrona per creare una nuova partita.
 * @param {Object} gameData - Dati della partita da creare.
 * @returns {Promise<Object>} - Promise che risolve con l'oggetto della partita appena creata.
 * @throws {Error} - Eccezione se si verifica un errore durante la creazione.
 */
const createGame = async (gameData) => {
    try {
        const newGame = new Games(gameData);
        return await newGame.save();
    } catch (error) {
        throw error;
    }
};

/**
 * Funzione asincrona per ottenere una partita nel database.
 * @returns {Promise<Object|null>} - Promise che risolve con l'oggetto della partita trovata o null se non trovata.
 * @throws {Error} - Eccezione se si verifica un errore durante la lettura della partita.
 */
const getGame = async () => {
    try {
        return await Games.findOne();
    } catch (error) {
        throw error;
    }
};

/**
 * Funzione asincrona per ottenere una partita dato il suo ID.
 * @param {string} gameId - ID della partita da cercare.
 * @returns {Promise<Object|null>} - Promise che risolve con l'oggetto della partita trovata o null se non trovata.
 * @throws {Error} - Eccezione se si verifica un errore durante la lettura della partita per ID.
 */
const getGameById = async (gameId) => {
    try {
        return await Games.findById(gameId);
    } catch (error) {
        throw error;
    }
};

/**
 * Funzione asincrona per modificare una partita cercandola tramite il suo ID.
 * @param {string} gameId - ID della partita da modificare.
 * @param {Object} updatedData - Dati aggiornati della partita.
 * @returns {Promise<Object|null>} - Promise che risolve con l'oggetto della partita aggiornata o null se non trovata.
 * @throws {Error} - Eccezione se si verifica un errore durante l'aggiornamento della partita.
 */
const updateGame = async (gameId, updatedData) => {
    try {
        return await Games.findByIdAndUpdate(gameId, updatedData, { new: true });
    } catch (error) {
        throw error;
    }
};

/**
 * Funzione asincrona per eliminare una partita dato il suo ID.
 * @param {string} gameId - ID della partita da eliminare.
 * @returns {Promise<Object|null>} - Promise che risolve con l'oggetto della partita eliminata o null se non trovata.
 * @throws {Error} - Eccezione se si verifica un errore durante l'eliminazione della partita.
 */
const deleteGame = async (gameId) => {
    try {
        return await Games.findByIdAndDelete(gameId);
    } catch (error) {
        throw error;
    }
};

/**
 * Funzione asincrona per trovare le partite dato l'ID della competizione.
 * @param {string} competitionId - ID della competizione.
 * @returns {Promise<Array>} - Promise che risolve con un array di tutte le partite della competizione specificata.
 * @throws {Error} - Eccezione se si verifica un errore durante la ricerca delle partite della competizione.
 */
const findGamesByCompetitionId = async (competitionId) => {
    try {
        return await Games.find({ competition_id: competitionId });
    } catch (error) {
        throw error;
    }
};

/**
 * Funzione asincrona per ottenere le ultime partite.
 * @returns {Promise<Array>} - Promise che risolve con un array delle ultime 10 partite.
 * @throws {Error} - Eccezione se si verifica un errore durante la ricerca delle ultime partite.
 * $ne: null - "not equal to null" - trova i documenti in cui il campo selezionato dev'essere diverso da null
 * $exist: true - verifica se il campo specificato esiste nel documento
 */
const getRecentGames = async () => {
    try {

        const recentGames = await Games.find({
            stadium: { $ne: null, $exists: true },
            home_club_name: { $ne: null, $exists: true },
            away_club_name: { $ne: null, $exists: true },
            aggregate: { $ne: null, $exists: true }
        }).sort({ date: -1 }).limit(10)
            .select('stadium home_club_name away_club_name aggregate');

        return recentGames;
    } catch (error) {
        throw error;
    }
};

/**
 * Funzione asincrona per ottenere le partite recenti di una squadra.
 * @param {string} squadName - Nome della squadra.
 * @returns {Promise<Array>} - Promise che risolve con un array delle ultime 30 partite della squadra.
 * @throws {Error} - Eccezione se si verifica un errore durante la ricerca delle partite della squadra.
 * $ne: null - "not equal to null" - trova i documenti in cui il campo selezionato dev'essere diverso da null
 * $exist: true - verifica se il campo specificato esiste nel documento
 */
const getHistorySquadMatches = async (squadName) => {
    try {
        const squadMatches = await Games.find({
            $or: [
                { home_club_name: squadName },
                { away_club_name: squadName }
            ],
            home_club_name: { $exists: true, $ne: null, $ne: undefined },
            away_club_name: { $exists: true, $ne: null, $ne: undefined },
            date: { $exists: true, $ne: null, $ne: undefined },
            season: { $exists: true, $ne: null, $ne: undefined },
            home_club_goals: { $exists: true, $ne: null, $ne: undefined },
            away_club_goals: { $exists: true, $ne: null, $ne: undefined },
            home_club_position: { $exists: true, $ne: null, $ne: undefined },
            away_club_position: { $exists: true, $ne: null, $ne: undefined },
            round: { $exists: true, $ne: null, $ne: undefined },
            stadium: { $exists: true, $ne: null, $ne: undefined },
            referee: { $exists: true, $ne: null, $ne: undefined },
            competition_type: { $exists: true, $ne: null, $ne: undefined }
        }).sort({ date: -1 }).limit(30)
            .select('date season home_club_name away_club_name home_club_goals away_club_goals away_club_position home_club_position round stadium referee competition_type');

        return squadMatches;
    } catch (error) {
        throw error;
    }
};

/**
 * Funzione asincrona per ottenere l'ID del club dato il nome della squadra.
 * @param {string} clubName - Nome del club/squadra.
 * @returns {Promise<string|null>} - Promise che risolve con l'ID del club corrispondente o null se non trovato.
 * @throws {Error} - Eccezione se si verifica un errore durante la ricerca dell'ID del club.
 */
const getClubIdByClubName = async (clubName) => {
    try {
        const game = await Games.findOne({ $or: [{ home_club_name: clubName }, { away_club_name: clubName }] });

        if (game) {
            return game.home_club_id || game.away_club_id;
        } else {
            return null;
        }
    } catch (error) {
        throw error;
    }
};

// Esporta le funzioni definite per l'utilizzo in altri moduli
module.exports = {
    createGame,
    getGame,
    getGameById,
    updateGame,
    deleteGame,
    findGamesByCompetitionId,
    getRecentGames,
    getHistorySquadMatches,
    getClubIdByClubName
};
