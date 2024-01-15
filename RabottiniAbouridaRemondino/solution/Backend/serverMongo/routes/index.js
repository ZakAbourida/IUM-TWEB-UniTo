var express = require('express');
var router = express.Router();
const gameController = require('../controllers/gamesController');

router.get('/loadHP', async function (req, res, next) {
  try {
    // Chiamata alla nuova funzione getRecentGames nel controller
    const recentGame = await gameController.getRecentGames();   //<-- FUNZIONE PER PRENDERE LE ULTIME 10 PARTITE
    //const recentGame = await gameController.getGame();           //<-- FUNZIONE PER PRENDERE UNA SOLA PARTITA

    res.json(recentGame);
  } catch (error) {
    console.error('Errore durante la richiesta dei giochi:', error);
    res.status(500).json({ error: 'Errore durante la richiesta dei giochi' });
  }
});

router.post('/loadSq', async function (req, res, next) {
  try {
    const squadName = req.body.squad;

    // Utilizza la funzione getHistorySquadMatches per ottenere i dati desiderati
    const squadMatches = await gameController.getHistorySquadMatches();

    res.json(squadMatches);
  } catch (error) {
    // Gestisci gli errori qui
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;

