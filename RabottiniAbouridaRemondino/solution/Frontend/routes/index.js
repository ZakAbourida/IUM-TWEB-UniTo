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
    // Richiesta GET al server del database
    const response = await axios.get('http://localhost:3001/loadHP');

    // Ora si possono passare i dati alla pagina HTML
    res.json(response.data);

  } catch (error) {
    // Gestisci gli errori qui
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/loadSq',  async function (req, res, next) {
  try {
    const squadName = req.body.squad;

    const response = await axios.post('http://localhost:3001/loadSq', { squad: squadName });

    res.json(response.data);
  } catch (error) {
    // Gestisci gli errori qui
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
