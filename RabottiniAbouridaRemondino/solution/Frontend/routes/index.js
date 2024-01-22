var express = require('express');
const path = require("path");
var router = express.Router();
const axios = require('axios');

/**
 * Route that sets the site login as the homepage of localhost:3000
 * Method: GET
 */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/Login.html'));
});
/**
 * Route that handles the request to send to the Springboot server to fill the Homepage.
 * Method: GET
 */
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
/**
 * Route that handles the request to send to the Express server of MongoDB to fill the page Squadra.
 * Method: POST
 */
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
/**
 * Route that handles the request to send to the Springboot server to obtain the list of seasons.
 * Method: GET
 */
router.get('/seasons',  async function (req, res, next) {
  try {

    const response = await axios.get('http://localhost:8081/seasons');

    res.json(response.data);

  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});
/**
 * Route that handles the request to send to the Springboot server to obtain the list of countries.
 * Method: GET
 */
router.get('/country',  async function (req, res, next) {
  try {

    const response = await axios.get('http://localhost:8081/country');

    res.json(response.data);

  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});
/**
 * Route that handles the request to send to the Springboot server to obtain the list of competitions.
 * Method: GET
 */
router.get('/list_competitions',  async function (req, res, next) {
  try {

    const response = await axios.get('http://localhost:8081/list_competitions');

    res.json(response.data);

  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});
/**
 * Route that handles the request to send to the Springboot server to obtain the list of competitions (solo name).
 * Method: GET
 */
router.get('/list_competitions_SoloName',  async function (req, res, next) {
  try {
    // Richiesta GET al server del database
    const response = await axios.get('http://localhost:8081/list_competitions_SoloName');

    // Ora si possono passare i dati alla pagina HTML
    res.json(response.data);

  } catch (error) {
    // Gestisci gli errori qui
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});
/**
 * Route that handles the request to send to the Springboot server to obtain the list of clubs.
 * Method: GET
 */
router.get('/all_teams',  async function (req, res, next) {
  try {
    const response = await axios.get('http://localhost:8081/all_teams');

    res.json(response.data);

  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});
/**
 * Route that handles the request to send to the Springboot server to obtain the list of positioning.
 * Method: GET
 */
router.get('/get_role',  async function (req, res, next) {
  try {
    // Richiesta GET al server del database
    const response = await axios.get('http://localhost:8081/get_role');

    // Ora si possono passare i dati alla pagina HTML
    res.json(response.data);

  } catch (error) {
    // Gestisci gli errori qui
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});
/**
 * Route that handles the request to send to the Springboot server to obtain the list of the players' years.
 * Method: GET
 */
router.get('/get_birth_years',  async function (req, res, next) {
  try {

    const response = await axios.get('http://localhost:8081/get_birth_years');

    res.json(response.data);

  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});
/**
 *
 * Route that takes its input name from the axios call and sends the request to the Spingboot server to obtain the list of teams of a championship.
 * Method: POST
 */
router.post('/list_teamsbycompetition',  async function (req, res, next) {
  try {
    const compName = req.body.comp;

    const response = await axios.post('http://localhost:8081/list_teamsbycompetition', compName);

    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});
/**
 *
 * Route that takes its input name from the axios call and sends the request to the Spingboot server to obtain the stats of a teams.
 * Method: POST
 */
router.post('/list_info_squad',  async function (req, res, next) {
  try {
    const squadName = req.body.squad;

    const params = new URLSearchParams();
    params.append('squadName', squadName);

    const response = await axios.post('http://localhost:8081/list_info_squad', params);

    res.json(response.data);
  } catch (error) {
    // Gestisci gli errori qui
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});
/**
 *
 * Route that takes its input name from the axios call and sends the request to the Spingboot server to obtain the list of players of a championship.
 * Method: POST
 */
router.post('/squad_players',  async function (req, res, next) {
  try {
    const squadName = req.body.squad;

    console.log(squadName);

    const params = new URLSearchParams();
    params.append('squadName', squadName);

    const response = await axios.post('http://localhost:8081/squad_players', params);

    res.json(response.data);
  } catch (error) {
    // Gestisci gli errori qui
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});
/**
 *
 * Route that takes as input a JSON object containing the parameters for advanced search.
 * Send the request to the Springboot server which returns the players based on the parameters.
 * Method: POST
 */
router.post('/advanced_search', async (req, res) => {
  try {

    const searchDTO = req.body;

    const response = await axios.post('http://localhost:8081/advanced_search', searchDTO, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Errore durante la chiamata al server Spring Boot:', error);
    res.status(500).send('Internal Server Error');
  }
});
/**
 * <li>Route that takes the player name string from the Axios call and sends it to the Express server of MongoDB.
 * Returns the JSON object containing the squad's information.</li>
 * Method: POST
 */
router.post('/squad_stats',  async function (req, res, next) {
  try {
    const squadName = req.body.squad;

    // chiamata per per le statistiche della squadra
    const response = await axios.post('http://localhost:3001/squad_stats', { squad: squadName});

    res.json(response.data);
  } catch (error) {
    // Gestisci gli errori qui
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});
/**
 * <li>Route that takes the competition name string from the Axios call and sends it to the Spring server.
 * Returns the JSON object containing the competition's information.</li>
 * Method: POST
 */
router.post('/info_competition',  async function (req, res, next) {
  try {
    const competition = req.body.comp;

    console.log(competition);

    const params = new URLSearchParams();
    params.append('competition', competition);

    const response = await axios.post('http://localhost:8081/info_competition', params);

    res.json(response.data);
  } catch (error) {
    // Gestisci gli errori qui
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});
/**
 * <li>Route that takes the competition name string from the Axios call and sends it to the Spring server.
 * Returns the JSON object containing the competition's players.</li>
 * Method: POST
 */
router.post('/comp_players',  async function (req, res, next) {
  try {
    const compId = req.body.comp;

    const response = await axios.post('http://localhost:8081/comp_players', compId);

    const primi30 = response.data.slice(0, 30);

    res.json(primi30);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});
/**
 * <li>Route that takes the player name string from the Axios call and sends it to the Spring server.
 * Returns the JSON object containing the player's information.</li>
 * Method: POST
 */
router.post('/info_player',  async function (req, res, next) {
  try {

    const Name = req.body.playerName;
    const params = new URLSearchParams();
    params.append('Name', Name);

    const response = await axios.post('http://localhost:8081/info_player', params);
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});
/**
 * <li>Route that takes the player name string from the Axios call and sends it to the Mongo server.
 * Returns the JSON object containing information relating to a player's appearances.</li>
 * Method: POST
 */
router.post('/info_appearances',  async function (req, res, next) {
  try {

    const Name = req.body.playerName;
    const params = new URLSearchParams();
    params.append('player_name', Name);

    const response = await axios.post('http://localhost:3001/info_appearances', params);
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});
/**
 * <li>Route that takes the player name string from the Axios call and sends it to the Flask server.
 * Returns an HTML file with the chart.</li>
 * Method: POST
 */
router.post('/values_player', async (req, res) => {
  try {

    const playerName = req.body.name;

    const response = await axios.post('http://127.0.0.1:5000/values_player', { name: playerName });

    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});



module.exports = router;
