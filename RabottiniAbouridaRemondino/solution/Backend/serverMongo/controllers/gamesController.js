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

const getGames = async () => {
    try {
        return await Games.find();
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

module.exports = {
    createGame,
    getGames,
    getGameById,
    updateGame,
    deleteGame,
    findGamesByCompetitionId,
};
