const Appearances = require('../models/appearances');
const createAppearance = async (appearanceData) => {
    try {
        const newAppearance = new Appearances(appearanceData);
        return await newAppearance.save();
    } catch (error) {
        throw error;
    }
};
const getAppearances = async () => {
    try {
        return await Appearances.find();
    } catch (error) {
        throw error;
    }
};
const getAppearanceById = async (appearanceId) => {
    try {
        return await Appearances.findById(appearanceId);
    } catch (error) {
        throw error;
    }
};
const updateAppearance = async (appearanceId, updatedData) => {
    try {
        return await Appearances.findByIdAndUpdate(appearanceId, updatedData, { new: true });
    } catch (error) {
        throw error;
    }
};
const deleteAppearance = async (appearanceId) => {
    try {
        return await Appearances.findByIdAndDelete(appearanceId);
    } catch (error) {
        throw error;
    }
};
const findPlayerAppearances = async (playerId) => {
    try {
        return await Appearances.find({ player_id: playerId });
    } catch (error) {
        throw error;
    }
};

const findPlayerInfoAppearances = async (player_name) => {
    try {
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

module.exports = {
    createAppearance,
    getAppearances,
    getAppearanceById,
    updateAppearance,
    deleteAppearance,
    findPlayerAppearances,
    findPlayerInfoAppearances
};
