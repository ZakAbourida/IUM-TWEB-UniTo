/**
 * Listener that sets the initial parameters of the page.
 */
document.addEventListener('DOMContentLoaded', function () {
    /**
     * <h2>Call axios to get the data that fills the dropdown menus.<h2>
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
});

/**
 *<li>Function that sends axios calls to Express routes.</li>
 * @param url es. /seasons - /country ecc
 */
function AxiosCall(url) {
    axios.get(url)
        .then(function (response) {
            console.log('Response:', response.data);
            fillDropMenu(response.data, url);
        })
        .catch(function (error) {
            console.error('Error:', error);
        });
}

/**
 * <li>Function which, based on the URL, takes the data received from the response of the Axios call and fills the dropdown menus.</li>
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
 * <li>Function that takes data from the dropdown menus and encapsulates it in a json object and sends it to the route via axios call.</li>
 *
 */
function AdvancedSearch() {

    const Season = getSelectedValueOrFallback('seasons_menu', 'Season');
    const Country = getSelectedValueOrFallback('country_menu', 'Country');
    const Competition = getSelectedValueOrFallback('championships_menu', 'Championship');
    const Year_Birth = getSelectedValueOrFallback('years_birth_menu', 'Birth');
    const Team = getSelectedValueOrFallback('club_menu', 'Club');
    const Role = getSelectedValueOrFallback('role_menu', 'Role');


    console.log('Season:', Season);
    console.log('Country:', Country);
    console.log('Championship:', Competition);
    console.log('Year of Birth:', Year_Birth);
    console.log('Club:', Team);
    console.log('Role:', Role);

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
            console.log('Risposta dal server:', response.data);
            fillTable(response.data);
        })
        .catch(function (error) {
            console.error('Errore durante la chiamata Axios:', error);
        });

}

// Funzione helper per ottenere il valore o null se non modificato
/**
 *<li>
 * Function that selects the value of the dropdown menu</li>
 * @param dropdownId id of the dropdown menu
 * @param defaultValue Default drop-down value before performing a search
 * @returns {string|null}
 * If the value is equal to the default parameter of the dropdown menu it returns null, otherwise the selected value.
 */
function getSelectedValueOrFallback(dropdownId, defaultValue) {
    const buttonText = document.querySelector(`.wrap-filtri #${dropdownId}`).closest('.dropdown').querySelector('.btn.dropdown-toggle').textContent.trim();
    return buttonText !== defaultValue ? buttonText : null;
}

//popola le righe della tabella
/**
 *<li>
 * Function that takes the data received as a response from the axios call for advanced search and populates the table with players.</li>
 * @param data List of players received from the axios response.
 */
function fillTable(data) {

    var bodyTable = document.querySelector(".table-ris tbody");

    bodyTable.innerHTML = '';

    data.forEach((player, index) => {

        var row = document.createElement("tr");

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

