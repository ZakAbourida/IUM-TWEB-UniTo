var express = require('express');
const path = require("path");
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/login.html'));
});
router.get('/loadHP',  async function (req, res, next) {
  try {
    // Esegui la richiesta GET al server del database
    const response = await axios.get('http://localhost:3001/loadHP');

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
