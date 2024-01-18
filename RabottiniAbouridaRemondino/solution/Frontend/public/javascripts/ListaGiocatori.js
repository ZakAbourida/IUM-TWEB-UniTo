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
 *
 * @param url
 * @constructor
 */
function AxiosCall(url) {
    axios.get(url)
        .then(function (response) {
            // Handle success
            console.log('Response:', response.data);
            fillDropMenu(response.data, url);
        })
        .catch(function (error) {
            // Handle errors
            console.error('Error:', error);
        });
}

/**
 *
 * @param data
 * @param url
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

    // Pulisci il contenuto esistente
    menu.innerHTML = '';

    // Loop attraverso l'array di stagioni
    data.forEach(function (season) {
        // Crea un nuovo elemento <a>
        var linkElement = document.createElement("a");
        linkElement.classList.add("dropdown-item"); // Aggiungi la classe 'dropdown-item'

        linkElement.textContent = season;

        // Aggiungi un listener per il click
        linkElement.addEventListener('click', function () {
            // Trova il genitore 'dropdown' più vicino
            var dropdownParent = this.closest('.dropdown');

            // Trova il pulsante all'interno di questo genitore 'dropdown' e aggiorna il suo testo
            if (dropdownParent) {
                var button = dropdownParent.querySelector('.btn.dropdown-toggle');
                if (button) {
                    button.textContent = this.textContent;
                }
            }
        });

        // Aggiungi l'elemento <a> al menu a tendina
        document.getElementById(menu_id).appendChild(linkElement);
    });
}
function AdvancedSearch(){
    // Funzione helper per ottenere il valore o null se non modificato

    const season = getSelectedValueOrFallback('seasons_menu', 'Season');
    const country = getSelectedValueOrFallback('country_menu', 'Country');
    const championship = getSelectedValueOrFallback('championships_menu', 'Championship');
    const birthYear = getSelectedValueOrFallback('years_birth_menu', 'Birth');
    const club = getSelectedValueOrFallback('club_menu', 'Club');
    const role = getSelectedValueOrFallback('role_menu', 'Role');

    // Console log per vedere i valori selezionati (puoi rimuoverlo o sostituirlo con la logica di ricerca)
    console.log('Season:', season);
    console.log('Country:', country);
    console.log('Championship:', championship);
    console.log('Year of Birth:', birthYear);
    console.log('Club:', club);
    console.log('Role:', role);

    // Qui puoi aggiungere la logica pe
}
// Funzione helper per ottenere il valore o null se non modificato
function getSelectedValueOrFallback(dropdownId, defaultValue) {
    const buttonText = document.querySelector(`.wrap-filtri #${dropdownId}`).closest('.dropdown').querySelector('.btn.dropdown-toggle').textContent.trim();
    return buttonText !== defaultValue ? buttonText : null;
}

