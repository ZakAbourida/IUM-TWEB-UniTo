var express = require('express');
const path = require("path");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/login.html'));
});

router.get('/loadHP', async function (req, res, next) {
  try {
    // Esegui la richiesta GET al server del database
    const response = await axios.get('http://localhost:3000/');

    // Ottenere i dati desiderati dalla risposta
    const stadio = response.data.stadio;
    const nomeSquadraCasa = response.data.nome_sq_casa;
    const nomeSquadraFuoriCasa = response.data.nome_sq_fuori;
    const risultato = response.data.risultato;
    const elencoMarcatori = response.data.elenco_marcatori;

    // Ora puoi passare questi dati alla tua pagina HTML
    res.sendFile(path.join(__dirname, '../public/login.html'), {
      stadio,
      nomeSquadraCasa,
      nomeSquadraFuoriCasa,
      risultato,
      elencoMarcatori,
    });
  } catch (error) {
    // Gestisci gli errori qui
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
