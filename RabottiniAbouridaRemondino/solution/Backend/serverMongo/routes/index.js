var express = require('express');
var router = express.Router();
const gameController = require('../controllers/gamesController');

router.get('/loadHP', async function (req, res, next) {
  try {
    // Chiamata alla nuova funzione getRecentGames nel tuo controller
    const recentGame = await gameController.getGame();

    // Puoi ora utilizzare recentGames come dati da restituire al client
    res.json(recentGame);
  } catch (error) {
    console.error('Errore durante la richiesta dei giochi:', error);
    res.status(500).json({ error: 'Errore durante la richiesta dei giochi' });
  }
});

module.exports = router;
