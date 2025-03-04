/**
 * Listener that sets the initial parameters of the page.
 */
document.addEventListener('DOMContentLoaded', async function () {

    const barraRicerca = document.getElementById('barra-ricerca');
    const mostraBarra = document.getElementById('mostra-barra');

    const opzioniLogin = document.getElementById('opzioni-login');
    const mostraOpzioni = document.getElementById('mostra-opzioni');

    mostraBarra.addEventListener('click', function () {
        if (!barraRicerca.classList.contains('visible')) {
            barraRicerca.classList.remove('hidden');
            barraRicerca.classList.add('visible');
        } else {
            barraRicerca.classList.remove('visible');
            barraRicerca.classList.add('hidden');
        }
    });

    mostraOpzioni.addEventListener('click', function () {
        if (!opzioniLogin.classList.contains('visible')) {
            opzioniLogin.classList.remove('hidden');
            opzioniLogin.classList.add('visible');
        } else {
            opzioniLogin.classList.remove('visible');
            opzioniLogin.classList.add('hidden');
        }
    });
    var urlParams = new URLSearchParams(window.location.search);
    var playerName = urlParams.get('player');
    getInfoPlayer(playerName, "/info_player");
    getInfoPlayer(playerName, "/info_appearances");
    getChart(playerName);
    const postgresResponse = await getInfoPlayer(playerName, "/info_player");
    const mongoResponse = await getInfoPlayer(playerName, "/info_appearances");
    makeDescription(postgresResponse, mongoResponse);

});

/**
 *<li>Function that takes a player's name as input and sends a call to the Express server route to receive information associated with the player.</li>
 * @param playerName es. 'Bukayo Saka'
 * @param url es. /info_player
 */

function getInfoPlayer(playerName, url) {
    return axios.post(url, { playerName })
        .then(function (response) {
            if (url === "/info_player") {
                updatePlayerProfile(response.data);
            } else {
                fillStats(response.data);
            }
            return response.data;
        })
        .catch(function (error) {
            console.error('Error:', error);
            throw error;
        });
}

/**
 *<li>Function that takes the JSON object containing the information and represents it on the web page. (Fills the determining elements by their id)</li>
 * @param playerData JSON object containing information about a player. es {Name: 'Bukayo Saka', Image: a43rfodwaecfe0gv, ecc}
 */
function updatePlayerProfile(playerData) {

    var titlePlayerElement = document.getElementById('title-player');
    titlePlayerElement.textContent = playerData.Name || 'No name';

    var playerImageElement = document.getElementById('player_img');
    playerImageElement.src = 'data:image/jpeg;base64,' + (playerData.Image || '');

    var boxInfoElement = document.getElementById('box-info');
    boxInfoElement.innerHTML =
        '<h4>' + (playerData.Nationality || 'Nessun dato') + '</h4>' +
        '<h4>' + (playerData.Height ? playerData.Height + ' cm' : 'Nessun dato') + '</h4>' +
        '<h4>' + (playerData.Age ? playerData.Age + ' anni' : 'Nessun dato') + '</h4>' +
        '<h4>' + (playerData.Team || 'Nessun dato') + '</h4>' +
        '<h4>' + (playerData.Position || 'Nessun dato') + '</h4>' +
        '<h4>' + (playerData.MarketValue || 'Nessun dato') + '</h4>';
}
/**
 *<li>Function that takes the JSON object containing the information about the stats and represents it on the web page. (Fills the determining elements by their id)</li>
 * @param statsData JSON object containing stats about a player. es {totalAppearances: 302, totalMinutesPlayed: 4135, totalGoals: 12, ecc}
 */
function fillStats(statsData){
    var statsInfoElement = document.getElementById('stats-info');
    statsInfoElement.innerHTML =
        '<h4>' + (statsData.totalAppearances ) + '</h4>' +
        '<h4>' + (statsData.totalMinutesPlayed ) + '</h4>' +
        '<h4>' + (statsData.totalGoals) + '</h4>' +
        '<h4>' + (statsData.totalAssists) + '</h4>' +
        '<h4>' + (statsData.totalRedCards) + '</h4>' +
        '<h4>' + (statsData.totalYellowCards) + '</h4>';
}

/**
 *<li>Function that takes a player's name as input and sends a call to the Express server route to receive chart associated with the player.</li>
 * @param name es. 'Bukayo Saka'
 */
function getChart(name){
    axios.post('/values_player', {name})
        .then(function (response) {
            fillChart(response.data)
        })
        .catch(function (error) {
            console.error('Error:', error);
        });
}

/**
 *<li>
 * Function that takes the graph from the axios response and checks the presence of the container for inserting the graph.</li>
 * @param graphHtml
 */
function fillChart(graphHtml) {
    var chartContainer = document.getElementById('chart-box');
    if (chartContainer) {
        insertAndExecuteScript(chartContainer, graphHtml);
    } else {
        console.error('Chart container not found');
    }
}

/**
 *<li>Function that inserts the graph into the container and launches all the scripts to display the graph and make it interactive.</li>
 * @param container id of the container for the chart
 * @param html html chart
 */
function insertAndExecuteScript(container, html) {
    container.innerHTML = html;
    var scripts = Array.from(container.querySelectorAll("script"));
    for (var script of scripts) {
        var newScript = document.createElement("script");
        Array.from(script.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
        if (!script.src) {
            newScript.appendChild(document.createTextNode(script.innerHTML));
        }
        script.parentNode.replaceChild(newScript, script);
    }
}

/**
 * <li>Function that generates a description based on the parameters received from the Axios call. It makes the entire page more complete and more visually appreciable.</li>
 * @param dataPostgres - Data received from the Postgres server relating to a player.
 * @param dataMongo - Data received from the Mongo server relating to a player.
 */
function makeDescription(dataPostgres,dataMongo) {
    const descriptionBox = document.getElementById('box-description');
    const currentYear = new Date().getFullYear();
    let phrase1 = "";
    let phrase2 = "";
    let phrase3 = "";
    let phrase4 = "";



    if (dataPostgres.lastSeason === null) {
        phrase1 = "";
    } else if (dataPostgres.lastSeason < 2023) {
        phrase1 = `, ha lasciato il campo da gioco delle principali competizioni Europee nel  ${dataPostgres.lastSeason}, giocando la sua ultima partita nel ${dataPostgres.Team}.`;
    } else {
        phrase1 = `, attualmente mette in mostra le sue capacità giocando per la squadra ${dataPostgres.Team}.`;
    }

    if(dataPostgres.Foot === null){
        phrase2 = "";
    }else if(dataPostgres.Foot === "right"){
        phrase2 = "E' un giocatore che predilige il controllo del pallone con il piede destro.";
    }else{
        phrase2 = "E' un giocatore che predilige il controllo del pallone con il piede sinistro.";
    }

    if ('MarketValue' in dataPostgres && dataPostgres.MarketValue !== null) {
        phrase3 = `Attualmente, il suo valore di mercato è stimato intorno a ${dataPostgres.MarketValue}£.`;
    } else {
        phrase3 = "";
    }

    if ((dataPostgres.Position != null && (dataPostgres.Position == "Left Winger" || dataPostgres.Position == "Right Winger" || dataPostgres.Position == "Centre-Forward" || dataPostgres.Position == "Second Striker") ) && (dataMongo.totalAppearances != 0 && dataMongo.totalAppearances != "Nessun Dato")) {
        let ratio = (dataMongo.totalGoals / dataMongo.totalAppearances).toFixed(2);

        if (ratio >= 0.5 && dataMongo.totalAppearances >= 100) {
            phrase4 = phrase4 = `Con le sue straordinarie qualità tecniche in attacco, vanta un impressionante rapporto di ${ratio} gol a partita, a testimonianza del suo eccezionale talento offensivo.`;
        } else if (ratio >= 0.20) {
            phrase4 = `Con solide competenze tecniche, questo giocatore mantiene un rispettabile rapporto di ${ratio} gol a partita, dimostrando la sua affidabilità e costanza in campo.`;
        } else if(ratio >= 0.10 && ratio < 0.20 ){
            phrase4 = `Attacante con qualità mediocri che si mantiene con un rapporto  di ${ratio} gol a partita`;
        }else if(ratio < 0.10 && dataMongo.totalAppearances >= 10){
            phrase4 = `Non rientra sicuramente nell'elite degli attaccanti migliori con un rapporto  di ${ratio} gol a partita`;
        }
    }

    let description = `${dataPostgres.Name}, classe ${currentYear - dataPostgres.Age}${phrase1} ${phrase2}\n${phrase3}\n${phrase4}`;

    descriptionBox.innerHTML = `<h4>${description}</h4>`;
}



