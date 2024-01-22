/* Al caricamento della pagina viene eseguita la funzione del listener che imposta i rispettivi
* listener ai bottoni per la ricerca, le opzioni di profilo utente
*/
document.addEventListener('DOMContentLoaded', function () {

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

    //tramite l'url ricavo il nome del giocatore
    var urlParams = new URLSearchParams(window.location.search);
    var playerName = urlParams.get('player');
    getInfoPlayer(playerName,"/info_player");
    getInfoPlayer(playerName,"/info_appearances");

});

/**
 * Funzione che prende come parametro il nome del giocatore e fa una chiamata axios al server e chiama la funzione updatePlayerProfile
 * @param playerName es. 'Bukayo Saka'
 */
function getInfoPlayer(playerName,url) {
    axios.post(url, {playerName})
        .then(function (response) {
            if(url === "/info_player"){
                updatePlayerProfile(response.data);
            }else{
                fillStats(response.data);
            }
        })
        .catch(function (error) {
            console.error('Error fetching player info:', error);
        });
}

/**
 * Funzione che prende l'oggetto JSON con i dati del giocatore e li inserisce nella sezione correta
 * @param playerData  es {Name: 'Bukayo Saka', Image: a43rfodwaecfe0gv, ecc}
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