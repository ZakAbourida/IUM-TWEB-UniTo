/**
 * Express Router per la gestione delle rotte relative alle collezzioni (partite, club, apparizioni e statistiche delle squadre)
 * all'interno del database MongoDB.
 */
var express = require('express');
var router = express.Router();
const gameController = require('../controllers/gamesController');
const clubGamesController = require("../controllers/club_gamesController");
const appearancesController = require("../controllers/appeareancesController")
const { application } = require("express");

/**
 * Route per caricare le ultime *30 partite.
 * @name GET/loadHP
 * @function
 * @param {string} path - Endpoint della route ("/loadHP").
 * @param {callback} middleware - Funzione middleware asincrona per gestire la richiesta e la risposta.
 * @throws {Error} - Ritorna uno status 500 se si verifica un errore durante la richiesta.
 */
router.get('/loadHP', async function (req, res, next) {
  try {
    // Chiamata alla nuova funzione getRecentGames nel controller
    const recentGame = await gameController.getRecentGames();   //<-- FUNZIONE PER PRENDERE LE ULTIME 30 PARTITE
    //const recentGame = await gameController.getGame();                //<-- FUNZIONE PER PRENDERE UNA SOLA PARTITA

    res.json(recentGame);
  } catch (error) {
    console.error('Errore durante la richiesta dei giochi:', error);
    res.status(500).json({ error: 'Errore durante la richiesta dei giochi' });
  }
});
/**
 * Route per caricare le partite di una squadra specifica.
 * @name POST/loadSq
 * @function
 * @param {string} path - Endpoint della route ("/loadSq").
 * @param {callback} middleware - Funzione middleware asincrona per gestire la richiesta e la risposta.
 * @throws {Error} - Ritorna uno status 500 se si verifica un errore durante la richiesta.
 */
router.post('/loadSq', async function (req, res, next) {
  try {
    const squadName = req.body.squad;
    const squadMatches = await gameController.getHistorySquadMatches(squadName);

    res.json(squadMatches);
  } catch (error) {
    // Gestisci gli errori qui
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

/**
 * Route per ottenere le statistiche di una squadra specifica.
 * @name POST/squad_stats
 * @function
 * @param {string} path - Endpoint della route ("/squad_stats").
 * @param {callback} middleware - Funzione middleware asincrona per gestire la richiesta e la risposta.
 * @throws {Error} - Ritorna uno status 500 se si verifica un errore durante la richiesta.
 */
router.post('/squad_stats', async function (req, res, next) {
  try {
    const squadName = req.body.squad;

    const squad_id = await gameController.getClubIdByClubName(squadName);

    const squad_stats = await clubGamesController.getClubStats(squad_id);

    res.json(squad_stats);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});
/**
 * Route per ottenere le informazioni sulle presenze di un giocatore specifico.
 * @name POST/info_appearances
 * @function
 * @param {string} path - Endpoint della route ("/info_appearances").
 * @param {callback} middleware - Funzione middleware asincrona per gestire la richiesta e la risposta.
 * @throws {Error} - Ritorna uno status 500 se si verifica un errore durante la richiesta.
 */
router.post('/info_appearances', async function (req, res, next) {
  try {
    const player_name = req.body.player_name;

    const infoAppearances = await appearancesController.findPlayerInfoAppearances(player_name);

    res.json(infoAppearances);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Esporta il router per l'utilizzo nell'applicazione
module.exports = router;
