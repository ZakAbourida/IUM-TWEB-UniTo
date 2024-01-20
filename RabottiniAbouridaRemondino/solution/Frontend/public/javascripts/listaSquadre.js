let container1;
let container2;
let domestic_cup;
document.addEventListener('DOMContentLoaded', function() {
    const campionato = localStorage.getItem('campionato');

    const barraRicerca = document.getElementById('barra-ricerca');
    const mostraBarra = document.getElementById('mostra-barra');

    const opzioniLogin = document.getElementById('opzioni-login');
    const mostraOpzioni = document.getElementById('mostra-opzioni');

    container1 = document.getElementById('container-n1');
    container2 = document.getElementById('container-n2');

    if (container1) {
        container1.style.display = 'block';
    }
    if (container2) {
        container2.style.display = 'none';
    }

    mostraBarra.addEventListener('click', function() {
        if(!barraRicerca.classList.contains('visible')) {
            barraRicerca.classList.remove('hidden');
            barraRicerca.classList.add('visible');
        } else {
            barraRicerca.classList.remove('visible');
            barraRicerca.classList.add('hidden');
        }
    });

    mostraOpzioni.addEventListener('click', function() {
        if(!opzioniLogin.classList.contains('visible')) {
            opzioniLogin.classList.remove('hidden');
            opzioniLogin.classList.add('visible');
        } else {
            opzioniLogin.classList.remove('visible');
            opzioniLogin.classList.add('hidden');
        }
    });

    fillTableSquad(campionato);
    Info_Competition(campionato);
});


function redirectToPage(buttonID) {
    let val = document.getElementById(buttonID).innerText;

    // Salva il valore nella localStorage
    localStorage.setItem('squadra', val);

    // Reindirizza alla pagina "ListaSquadre.html"
    window.location.href = '../Squadra.html';
}

function redirectToPageGiocatori(buttonID) {
    let val = document.getElementById(buttonID).innerText;

    // Salva il valore nella localStorage
    localStorage.setItem('giocatore', val);

    // Reindirizza alla pagina "ListaSquadre.html"
    window.location.href = '../Giocatore.html';
}

function Info_Competition(comp){
    axios.post('/info_competition', {comp: comp})
        .then(function (response) {
            console.log('Info Campionato: ', response.data);

            document.getElementById('ID_competizione').innerText =response.data.competition_id;
            document.getElementById('Nome_competizione').innerText = response.data.name;
            document.getElementById('country').innerText = "Nazione: " + response.data.country_name;
            document.getElementById('confederazione').innerText = "Confederazione: " + response.data.confederation;
            document.getElementById('url').innerText = "URL: " + response.data.url;
            domestic_cup = response.data.competition_id;

            fillTablePlayers();
        })
        .catch(function (error) {
            // Handle errors
            console.error('Error:', error);
        });
}

function fillTableSquad(comp) {
    axios.post('/list_teamsbycompetition', {comp: comp})
        .then(function (response) {
            console.log('Response:', response.data);

            const numSq = response.data.length;
            const table = document.getElementById('table');

            /*Rimozione di tutte le righe per mantenere i dati aggiornati ed evitare problemi
            *  come righe obsolete o dati duplicati. Ciò consente di mantenere la tabella aggiornata
            *  con i dati più recenti.*/
            while (table.rows.length > 0) {
                table.deleteRow(0);
            }

            // Aggiungi una nuova riga per ogni squadra
            for (let i = 0; i < numSq; i++) {
                const newRow = table.insertRow();
                const cellNum = newRow.insertCell();
                cellNum.textContent = i + 1;

                const cellButton = newRow.insertCell();
                const button = document.createElement('button');
                button.className = 'button-table';
                button.id = `buttonTable${i + 1}`;
                button.textContent = `buttonTable${i}`;
                button.onclick = function () {
                    redirectToPage(`buttonTable${i + 1}`);
                };
                cellButton.appendChild(button);
            }

            // Aggiungi righe aggiuntive se necessario
            const rowsToAdd = Math.max(0, 11 - numSq);
            for (let i = numSq; i < numSq + rowsToAdd; i++) {
                aggiungiRigaTabellaSquadre(i + 1);
            }
            //Sostituzione valore nelle righe della tabella
            for (let i = 0; i < response.data.length; i++) {
                (function (index) {
                    document.getElementById(`buttonTable${index + 1}`).innerText = response.data[index];
                })(i);
            }
        })
        .catch(function (error) {
            // Handle errors
            console.error('Error:', error);
        });
}

function fillTablePlayers() {
        console.log(domestic_cup);

        axios.post('/comp_players', {comp: domestic_cup})
            .then(function (response){
                const numGiocatori = response.data.length;
                const Table = document.getElementById('table-giocatori');

                /*Rimozione di tutte le righe per mantenere i dati aggiornati ed evitare problemi
                *  come righe obsolete o dati duplicati. Ciò consente di mantenere la tabella aggiornata
                *  con i dati più recenti.*/
                while (Table.rows.length > 0) {
                    Table.deleteRow(0);
                }

                for (let i = 0; i < numGiocatori; i++) {
                    const NewRow = Table.insertRow();
                    const CellNum = NewRow.insertCell();
                    CellNum.textContent = i + 1;
                    const CellButton = NewRow.insertCell();
                    const Button = document.createElement('button');
                    Button.className = 'button-table';
                    Button.id = `buttonTableG${i + 1}`;
                    Button.textContent = `buttonTableG${i+1}`;
                    Button.onclick = function () {
                        redirectToPage(`buttonTableG${i + 1}`);
                    };
                    CellButton.appendChild(Button);
                }
                // Aggiungi righe aggiuntive se necessario
                const rowsToAdd = Math.max(0, 11 - numGiocatori);
                for (let i = numGiocatori; i < numGiocatori + rowsToAdd; i++) {
                    aggiungiRigaTabellaGiocatori(i + 1);
                }
                //Sostituzione valore nelle righe della tabella
                for (let i = 0; i < response.data.length; i++) {
                    (function (index) {
                        document.getElementById(`buttonTableG${index + 1}`).innerText = response.data[index].first_name + " " +response.data[index].last_name;
                    })(i);
                }
            })
            .catch(function (error) {
                // Handle errors
                console.error('Error:', error);
            });
}

function aggiungiRigaTabellaSquadre(num) {
    // Trova la tabella
    const tab = document.getElementById('table');

    // Inserisce una nuova riga alla fine della tabella
    const nuovaRiga = tab.insertRow();

    // Inserisce una cella per il numero
    const cellaNum = nuovaRiga.insertCell();
    cellaNum.textContent = num;

    // Inserisce una cella per il pulsante
    const cellaPulsante = nuovaRiga.insertCell();
    const pulsante = document.createElement('button');
    pulsante.className = 'button-table';
    pulsante.id = `buttonTable${num}`;
    pulsante.textContent = `buttonTable${num}`;
    pulsante.onclick = function () {
        redirectToPage(`buttonTable${num}`);
    };
    cellaPulsante.appendChild(pulsante);
}
function aggiungiRigaTabellaGiocatori(num) {
    // Trova la tabella
    const tab = document.getElementById('table');

    // Inserisce una nuova riga alla fine della tabella
    const nuovaRiga = tab.insertRow();

    // Inserisce una cella per il numero
    const cellaNum = nuovaRiga.insertCell();
    cellaNum.textContent = num;

    // Inserisce una cella per il pulsante
    const cellaPulsante = nuovaRiga.insertCell();
    const pulsante = document.createElement('button');
    pulsante.className = 'button-table';
    pulsante.id = `buttonTable${num}`;
    pulsante.textContent = `buttonTable${num}`;
    pulsante.onclick = function () {
        redirectToPage(`buttonTable${num}`);
    };
    cellaPulsante.appendChild(pulsante);
}


