const ClubGames = require('../models/club_games');

// Controller per le operazioni CRUD sui giochi del club

const createClubGame = async (clubGameData) => {
    try {
        const newClubGame = new ClubGames(clubGameData);
        return await newClubGame.save();
    } catch (error) {
        throw error;
    }
};

const getClubGames = async () => {
    try {
        return await ClubGames.find();
    } catch (error) {
        throw error;
    }
};

const getClubGameById = async (clubGameId) => {
    try {
        return await ClubGames.findById(clubGameId);
    } catch (error) {
        throw error;
    }
};

const updateClubGame = async (clubGameId, updatedData) => {
    try {
        return await ClubGames.findByIdAndUpdate(clubGameId, updatedData, { new: true });
    } catch (error) {
        throw error;
    }
};

const deleteClubGame = async (clubGameId) => {
    try {
        return await ClubGames.findByIdAndDelete(clubGameId);
    } catch (error) {
        throw error;
    }
};

// Funzione di query
const findClubGamesByClubId = async (clubId) => {
    try {
        return await ClubGames.find({ club_id: clubId });
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createClubGame,
    getClubGames,
    getClubGameById,
    updateClubGame,
    deleteClubGame,
    findClubGamesByClubId,
};
