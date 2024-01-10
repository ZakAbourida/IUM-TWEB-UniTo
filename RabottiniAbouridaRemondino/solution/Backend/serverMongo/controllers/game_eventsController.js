const GameEvents = require('../models/game_events');
const createGameEvent = async (gameEventData) => {
    try {
        const newGameEvent = new GameEvents(gameEventData);
        return await newGameEvent.save();
    } catch (error) {
        throw error;
    }
};
const getGameEvents = async () => {
    try {
        return await GameEvents.find();
    } catch (error) {
        throw error;
    }
};
const getGameEventById = async (gameEventId) => {
    try {
        return await GameEvents.findById(gameEventId);
    } catch (error) {
        throw error;
    }
};
const updateGameEvent = async (gameEventId, updatedData) => {
    try {
        return await GameEvents.findByIdAndUpdate(gameEventId, updatedData, { new: true });
    } catch (error) {
        throw error;
    }
};
const deleteGameEvent = async (gameEventId) => {
    try {
        return await GameEvents.findByIdAndDelete(gameEventId);
    } catch (error) {
        throw error;
    }
};
const findGameEventsByClubId = async (clubId) => {
    try {
        return await GameEvents.find({ club_id: clubId });
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createGameEvent,
    getGameEvents,
    getGameEventById,
    updateGameEvent,
    deleteGameEvent,
    findGameEventsByClubId,
};
