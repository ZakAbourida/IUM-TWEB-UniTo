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
        // Ordina per data in ordine decrescente (dalla più recente alla meno recente)
        // e limita il risultato alle ultime 20 partite
        return await Games.find().sort({ date: -1 }).limit(20);
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
    getRecentGames
};
