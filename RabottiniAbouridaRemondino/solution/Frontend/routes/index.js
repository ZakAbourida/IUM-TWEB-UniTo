var express = require('express');
const path = require("path");
var router = express.Router();
const axios = require('axios');
const fs = require('fs');
const cheerio = require('cheerio');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/login.html'));
});

router.get('/loadHP',  async function (req, res, next) {
  try {
    // Esegui la richiesta GET al server del database
    const response = await axios.get('http://localhost:3001/loadHP');

    /* Ottenere i dati desiderati dalla risposta
    const stadio = response.data.stadium;
    const nomeSquadraCasa = response.data.home_club_name;
    const nomeSquadraFuoriCasa = response.data.away_club_name;
    const risultato = response.data.aggregate;*/

    console.log(response.data);

    // Ora puoi passare questi dati alla pagina HTML
    res.json(response.data);


  } catch (error) {
    // Gestisci gli errori qui
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
