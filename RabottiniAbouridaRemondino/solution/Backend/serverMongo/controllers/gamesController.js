const Games = require('../models/games');

// Controller per le operazioni CRUD sulle partite

const createGame = async (gameData) => {
    try {
        const newGame = new Games(gameData);
        return await newGame.save();
    } catch (error) {
        throw error;
    }
};

const getGame = async () => {
    try {
        return await Games.findOne();
    } catch (error) {
        throw error;
    }
};

const getGameById = async (gameId) => {
    try {
        return await Games.findById(gameId);
    } catch (error) {
        throw error;
    }
};

const updateGame = async (gameId, updatedData) => {
    try {
        return await Games.findByIdAndUpdate(gameId, updatedData, { new: true });
    } catch (error) {
        throw error;
    }
};

const deleteGame = async (gameId) => {
    try {
        return await Games.findByIdAndDelete(gameId);
    } catch (error) {
        throw error;
    }
};

// Funzione di query
const findGamesByCompetitionId = async (competitionId) => {
    try {
        return await Games.find({ competition_id: competitionId });
    } catch (error) {
        throw error;
    }
};
const getRecentGames = async () => {
    try {
        // Seleziona solo i campi desiderati e filtra le partite con dati inconsistenti
        // $ne              --> (not equal) serve per escludere documenti in cui il campo è nullo o indefinito
        // $exist: true     --> controlla che il campo esista
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

const getHistorySquadMatches = async (squadName) => {
    try {
        // Seleziona solo i campi desiderati
        const squadMatches = await Games.find({
            $or: [
                { home_club_name: squadName },
                { away_club_name: squadName }
            ]
        }).sort({ date: -1 }).limit(5)
            .select('date season home_club_name away_club_name home_club_goals away_club_goals round home_club_position away_club_position stadium referee competition_type');

        return squadMatches;
    } catch (error) {
        throw error;
    }
};



module.exports = {
    createGame,
    getGame,
    getGameById,
    updateGame,
    deleteGame,
    findGamesByCompetitionId,
    getRecentGames,
    getHistorySquadMatches
};
