let container1;
let container2;
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

    fillTable(campionato);
});

function redirectToPage(buttonID) {
    let val = document.getElementById(buttonID).innerText;

    // Salva il valore nella localStorage
    localStorage.setItem('squadra', val);

    // Reindirizza alla pagina "ListaSquadre.html"
    window.location.href = '../Squadra.html';
}

function fillTable(comp) {
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
                button.textContent = `buttonTable${i+1}`;
                button.onclick = function () {
                    redirectToPage(`buttonTable${i + 1}`);
                };
                cellButton.appendChild(button);
            }

            // Aggiungi righe aggiuntive se necessario
            const rowsToAdd = Math.max(0, 11 - numSq);
            for (let i = numSq; i < numSq + rowsToAdd; i++) {
                aggiungiRiga(i + 1);
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

function aggiungiRiga(num) {
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


