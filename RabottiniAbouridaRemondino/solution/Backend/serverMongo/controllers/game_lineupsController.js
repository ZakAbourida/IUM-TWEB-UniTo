const GameLineups = require('../models/game_lineups');

// Controller per le operazioni CRUD sulle formazioni di gioco

const createGameLineup = async (gameLineupData) => {
    try {
        const newGameLineup = new GameLineups(gameLineupData);
        return await newGameLineup.save();
    } catch (error) {
        throw error;
    }
};

const getGameLineups = async () => {
    try {
        return await GameLineups.find();
    } catch (error) {
        throw error;
    }
};

const getGameLineupById = async (gameLineupId) => {
    try {
        return await GameLineups.findById(gameLineupId);
    } catch (error) {
        throw error;
    }
};

const updateGameLineup = async (gameLineupId, updatedData) => {
    try {
        return await GameLineups.findByIdAndUpdate(gameLineupId, updatedData, { new: true });
    } catch (error) {
        throw error;
    }
};

const deleteGameLineup = async (gameLineupId) => {
    try {
        return await GameLineups.findByIdAndDelete(gameLineupId);
    } catch (error) {
        throw error;
    }
};

// Funzione di query
const findGameLineupsByClubId = async (clubId) => {
    try {
        return await GameLineups.find({ club_id: clubId });
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createGameLineup,
    getGameLineups,
    getGameLineupById,
    updateGameLineup,
    deleteGameLineup,
    findGameLineupsByClubId,
};
