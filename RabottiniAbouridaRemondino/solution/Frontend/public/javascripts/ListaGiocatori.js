/* Al caricamento della pagina viene eseguita la funzione del listener che imposta i rispettivi
* listener ai bottoni per la ricerca, le opzioni di profilo utente e funzione per caricare i dati dal database Postgres
*/
document.addEventListener('DOMContentLoaded', function () {
    /**
     * Chiamate Axios per database Postgres
     */
    AxiosCall('/seasons');
    AxiosCall('/country');
    AxiosCall('/list_competitions');
    AxiosCall('/all_teams');
    AxiosCall('/get_role');
    AxiosCall('/get_birth_years');

    const barraRicerca = document.getElementById('barra-ricerca');
    const mostraBarra = document.getElementById('mostra-barra');

    const opzioniLogin = document.getElementById('opzioni-login');
    const mostraOpzioni = document.getElementById('mostra-opzioni');
    document.getElementById('advanced_searchbtn').onclick = AdvancedSearch;


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

    setupClickableRows();
    redirectionPlayerPage();
});

/**
 * Funzione che imposta il riferimento alla pagina specifica di quel giocatore. Dando come input il nome del giocatore
 */
function redirectionPlayerPage(){
    var table = document.querySelector(".table-ris tbody");

    table.addEventListener('click', function(event) {
        var target = event.target;

        while (target !== table && !target.matches("tr.has-text")) {
            target = target.parentNode;
        }

        if (target !== table) {
            var playerName = target.cells[1].textContent; // Ottiene il nome dal secondo <td>
            window.location.href = 'Giocatore.html?player=' + encodeURIComponent(playerName);
        }
    });
}

/**
 * Funzione che fa chiamate Axios alle routes del server Express
 * @param url es. /seasons - /country ecc
 */
function AxiosCall(url) {
    axios.get(url)
        .then(function (response) {
            fillDropMenu(response.data, url);
        })
        .catch(function (error) {
            console.error('Error:', error);
        });
}

/**
 * Funzione che, basata sull'url ricevuto, prende i dati ricevuti in risposta all'axios call e riempie le tendine
 * @param data Data received from the call
 * @param url es.  /seasons - /country ecc
 */
function fillDropMenu(data, url) {
    var menu_id;
    switch (url) {
        case '/seasons':
            menu_id = "seasons_menu";
            break;
        case '/country':
            menu_id = "country_menu";
            break;
        case '/list_competitions':
            menu_id = "championships_menu";
            break;
        case '/all_teams':
            menu_id = "club_menu";
            break;
        case '/get_role':
            menu_id = "role_menu";
            break;
        case '/get_birth_years':
            menu_id = "years_birth_menu";
            break;
        default:
            menu_id = null;
    }
    var menu = document.getElementById(menu_id);

    menu.innerHTML = '';

    data.forEach(function (element) {

        var linkElement = document.createElement("a");
        linkElement.classList.add("dropdown-item");
        if(url === "/list_competitions"){
            linkElement.textContent = element.Name;
        }else{
            linkElement.textContent = element;
        }

        linkElement.addEventListener('click', function () {

            var dropdownParent = this.closest('.dropdown');

            if (dropdownParent) {
                var button = dropdownParent.querySelector('.btn.dropdown-toggle');
                if (button) {
                    button.textContent = this.textContent;
                }
            }
        });
        document.getElementById(menu_id).appendChild(linkElement);
    });
}

/**
 * Funzione che prende i dati dalle tendine e li incapsula in oggetti json e li mandd alla route tramite axios call
 */
function AdvancedSearch() {

    const Season = getSelectedValueOrFallback('seasons_menu', 'Season');
    const Country = getSelectedValueOrFallback('country_menu', 'Country');
    const Competition = getSelectedValueOrFallback('championships_menu', 'Championship');
    const Year_Birth = getSelectedValueOrFallback('years_birth_menu', 'Birth');
    const Team = getSelectedValueOrFallback('club_menu', 'Club');
    const Role = getSelectedValueOrFallback('role_menu', 'Role');

    const searchDTO = {
        season: Season,
        country: Country,
        competition: Competition,
        year_birth: Year_Birth,
        team: Team,
        role: Role
    }

    axios.post('/advanced_search', searchDTO, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(function (response) {
            fillTable(response.data);
        })
        .catch(function (error) {
            console.error('Error calling Axios:', error);
        });

}

/**
 * Funzione che seleziona il valore della tendina
 * @param dropdownId id of the dropdown menu
 * @param defaultValue Default drop-down value before performing a search
 * @returns {string|null}
 * Se il valore è uguale al parametro di default ritorna null, se no il valore selezionato
 */
function getSelectedValueOrFallback(dropdownId, defaultValue) {
    const buttonText = document.querySelector(`.wrap-filtri #${dropdownId}`).closest('.dropdown').querySelector('.btn.dropdown-toggle').textContent.trim();
    return buttonText !== defaultValue ? buttonText : null;
}

/**
 * Funzione che prende i dati ricevuti come risposta dalla ricerca avanzata e popula la tabella con i giocatori corretti
 * @param data List of players received from the axios response.
 */
function fillTable(data) {

    var bodyTable = document.querySelector(".table-ris tbody");

    bodyTable.innerHTML = '';

    data.forEach((player, index) => {

        var row = document.createElement("tr");
        row.classList.add('has-text')

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${player.Name}</td>
            <td>${player.Nationality}</td>
            <td>${player.Birth}</td>
            <td>${player.Team}</td>
            <td>${player.Position}</td>
        `;
        bodyTable.appendChild(row);
    });
}

/**
 * Funzione che controlla se c'è contenuto nella tabella per attivare l'effetto passando sopra col mouse
 */
function setupClickableRows() {
    document.querySelectorAll('.table-ris tbody tr').forEach(row => {
        if (row.textContent.trim().length > 0) {
            row.classList.add('has-text');

        }
    });
}



