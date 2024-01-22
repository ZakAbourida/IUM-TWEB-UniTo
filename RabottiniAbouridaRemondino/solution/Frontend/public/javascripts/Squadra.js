/* Al caricamento della pagina viene eseguita la funzione del listener che imposta i rispettivi
* listener ai bottoni per la ricerca, le opzioni di profilo utente e i vari content-tomove per le tendine
*/
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn1 = document.getElementById('toggleBtn1');
    const dropdownContent1 = document.getElementById('dropdownContent1');
    const contentToMove1 = document.querySelector('.content-to-move1');

    const toggleBtn2 = document.getElementById('toggleBtn2');
    const dropdownContent2 = document.getElementById('dropdownContent2');
    const contentToMove2 = document.querySelector('.content-to-move2');

    const toggleBtn3 = document.getElementById('toggleBtn3');
    const dropdownContent3 = document.getElementById('dropdownContent3');
    const contentToMove3 = document.querySelector('.content-to-move3');

    const toggleBtn4 = document.getElementById('toggleBtn4');
    const dropdownContent4 = document.getElementById('dropdownContent4');
    const contentToMove4 = document.querySelector('.content-to-move4');

    const barraRicerca = document.getElementById('barra-ricerca');
    const mostraBarra = document.getElementById('mostra-barra');

    const opzioniLogin = document.getElementById('opzioni-login');
    const mostraOpzioni = document.getElementById('mostra-opzioni');

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

    toggleBtn1.addEventListener('click', function() {
        const tendinaAltezza = dropdownContent1.clientHeight;
        const spostamentoDesiderato = tendinaAltezza > 100 ? 50 : tendinaAltezza * 0.5; // Modifica questa parte per regolare l'altezza dello spostamento desiderato
        if (dropdownContent1.style.display === 'block') {
            dropdownContent1.style.display = 'none';
            contentToMove1.style.marginTop = '0';
        } else {
            dropdownContent2.style.display = 'none';
            dropdownContent3.style.display = 'none';
            dropdownContent4.style.display = 'none';

            dropdownContent1.style.display = 'block';
            contentToMove1.style.marginTop = `${spostamentoDesiderato}px`; // Applica il nuovo valore per lo spostamento
        }
    });

    toggleBtn2.addEventListener('click', function() {
        const tendinaAltezza = dropdownContent2.clientHeight;
        const spostamentoDesiderato = tendinaAltezza > 100 ? 50 : tendinaAltezza * 0.5; // Modifica questa parte per regolare l'altezza dello spostamento desiderato
        if (dropdownContent2.style.display === 'block') {
            dropdownContent2.style.display = 'none';
            contentToMove2.style.marginTop = '0';
        } else {
            dropdownContent1.style.display = 'none';
            dropdownContent3.style.display = 'none';
            dropdownContent4.style.display = 'none';

            dropdownContent2.style.display = 'block';
            contentToMove2.style.marginTop = `${spostamentoDesiderato}px`; // Applica il nuovo valore per lo spostamento
        }
    });

    toggleBtn3.addEventListener('click', function() {
        const tendinaAltezza = dropdownContent3.clientHeight;
        const spostamentoDesiderato = tendinaAltezza > 100 ? 50 : tendinaAltezza * 0.5; // Modifica questa parte per regolare l'altezza dello spostamento desiderato
        if (dropdownContent3.style.display === 'block') {
            dropdownContent3.style.display = 'none';
            contentToMove3.style.marginTop = '0';
        } else {
            dropdownContent1.style.display = 'none';
            dropdownContent2.style.display = 'none';
            dropdownContent4.style.display = 'none';

            dropdownContent3.style.display = 'block';
            contentToMove3.style.marginTop = `${spostamentoDesiderato}px`; // Applica il nuovo valore per lo spostamento
        }
    });

    toggleBtn4.addEventListener('click', function() {
        const tendinaAltezza = dropdownContent4.clientHeight;
        const spostamentoDesiderato = tendinaAltezza > 100 ? 50 : tendinaAltezza * 0.5; // Modifica questa parte per regolare l'altezza dello spostamento desiderato
        if (dropdownContent4.style.display === 'block') {
            dropdownContent4.style.display = 'none';
            contentToMove4.style.marginTop = '0';
        } else {
            dropdownContent1.style.display = 'none';
            dropdownContent2.style.display = 'none';
            dropdownContent3.style.display = 'none';

            dropdownContent4.style.display = 'block';
            contentToMove4.style.marginTop = `${spostamentoDesiderato}px`; // Applica il nuovo valore per lo spostamento
        }
    });

    //funzione di inizializzazione con tutti i dati dal database
    onSubmit();
});

// funzione che gestisce il reindirizzamento alla pagina del giocatore corretta
function redirectToPage(buttonID) {
    let val = document.getElementById(buttonID).innerText;

    // Salva il valore nella localStorage
    localStorage.setItem('giocatore', val);
    const gioc = localStorage.getItem('giocatore');

    // Reindirizza alla pagina "ListaSquadre.html"
    window.location.href = '../Giocatore.html?player=' + encodeURIComponent(gioc);
}

//funzione che imposta i risultati delle ultime partite della squadra con le relative info
function sendAxiosQuerySq(url, squad){
    // Richiesta POST con annessa la squadra della pagina
    axios.post(url, { squad: squad })
        .then(function (response) {
            const numPartite = response.data.length;
            const tabellaStorico = document.getElementById('table-ris');

            console.log("Numero partite: "+numPartite);

            /* Rimozione di tutte le righe per mantenere i dati aggiornati ed evitare problemi
             * come righe obsolete o dati duplicati. Ciò consente di mantenere la tabella aggiornata
             * con i dati più recenti. */
            while (tabellaStorico.rows.length > 1) {
                tabellaStorico.deleteRow(1);
            }

            for (let i = 0; i < numPartite; i++) {
                aggiungiRigaTabellaStorico(i *10 + 1);
            }
            // Aggiungi una nuova riga per ogni partita
            for (let i = 0; i < numPartite; i++) {
                const match = response.data[i];
                const rowId = `rowTable${i + 1}`;

                const dataDalDatabase = match.date;

                // Crea un oggetto Date dalla stringa della data
                const dataObj = new Date(dataDalDatabase);

                // Ottieni giorno, mese e anno
                const giorno = dataObj.getDate();
                const mese = dataObj.getMonth() + 1; // Mese inizia da 0, quindi aggiungi 1

                // Formatta la data nel formato desiderato (dd/mm/yyyy)
                const dataFormattata = `${giorno}/${mese}`;

                if (squad == match.home_club_name) { // la squadra scelta gioca in casa
                    document.getElementById(`colTable${4 + i * 10}`).innerText = match.away_club_name;
                    document.getElementById(`colTable${5 + i * 10}`).innerText = `${match.home_club_goals}:${match.away_club_goals}`;
                    document.getElementById(`colTable${7 + i * 10}`).innerText = match.away_club_position;
                } else {                             // la squadra scelta gioca fuori casa
                    document.getElementById(`colTable${4 + i * 10}`).innerText = match.home_club_name;
                    document.getElementById(`colTable${5 + i * 10}`).innerText = `${match.away_club_goals}:${match.home_club_goals}`;
                    document.getElementById(`colTable${7 + i * 10}`).innerText = match.home_club_position;
                }
                document.getElementById(`colTable${1 + i * 10}`).innerText = i + 1;
                document.getElementById(`colTable${2 + i * 10}`).innerText = dataFormattata;
                document.getElementById(`colTable${3 + i * 10}`).innerText = match.season;
                document.getElementById(`colTable${6 + i * 10}`).innerText = match.round;
                document.getElementById(`colTable${8 + i * 10}`).innerText = match.stadium;
                document.getElementById(`colTable${9 + i * 10}`).innerText = match.referee;
                document.getElementById(`colTable${10 + i * 10}`).innerText = match.competition_type;
            }
        })
        .catch(function (error) {
            // Gestisci gli errori
            console.error('Error:', error);

            // Puoi aggiornare il DOM con un messaggio di errore
            document.getElementById('results').innerHTML = "Error occurred";
        });
}
//funzione che imposta le informazioni corrette della squadra
function infoSquadra(url, squad) {
    // Richiesta POST con annessa la squadra della pagina
    axios.post(url, { squad: squad })
        .then(function (response) {
            console.log("Info squadra: ", response.data);

            // Supponendo che ci sia solo un elemento nell'array
            const info = response.data[0];

            // Puoi anche aggiornare il DOM con le informazioni
            document.getElementById('Infostadio').innerText = "  " + info.stadium_name;
            document.getElementById('Infoposti_stadio').innerText =  "  " + info.stadium_seats;
            document.getElementById('Infoeta_media').innerText =  "  " + info.average_age;
            document.getElementById('Infodim_squadra').innerText =  "  " + info.squad_size;
            document.getElementById('Infosito_ufficiale').innerText =  "  " + info.url;
        })
        .catch(function (error) {
            // Gestisci gli errori
            console.error('Error:', error);

            // Puoi aggiornare il DOM con un messaggio di errore
            document.getElementById('results').innerHTML = "Error occurred";
        });
}

//funzione che imposta i giocatori corretti nella sezione
function giocatoriSquadra(url, squad) {
    // Richiesta POST con annessa la squadra della pagina
    axios.post(url, {squad: squad})
        .then(function (response){
            const numGiocatori = response.data.length;
            const Table = document.getElementById('table');

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
                Button.id = `buttonTable${i + 1}`;
                Button.textContent = `buttonTable${i+1}`;
                Button.onclick = function () {
                    redirectToPage(`buttonTable${i + 1}`);
                };
                CellButton.appendChild(Button);
            }
            // Aggiungi righe aggiuntive se necessario
            const rowsToAdd = Math.max(0, 11 - numGiocatori);
            for (let i = numGiocatori; i < numGiocatori + rowsToAdd; i++) {
                aggiungiRiga(i + 1);
            }
            //Sostituzione valore nelle righe della tabella
            for (let i = 0; i < response.data.length; i++) {
                (function (index) {
                    document.getElementById(`buttonTable${index + 1}`).innerText = response.data[index].first_name + " " +response.data[index].last_name;
                })(i);
            }
        })
        .catch(function (error) {
            // Gestisci gli errori
            console.error('Error:', error);

            // Puoi aggiornare il DOM con un messaggio di errore
            document.getElementById('results').innerHTML = "Error occurred";
        });
}

// funzione ausiliaria di giocatoriSquadra che aggiunge una riga se necessario
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

//funzione ausiliaria di sendAxiosQuereySq che aggiunge una riga se necessario
function aggiungiRigaTabellaStorico(num) {
    // Trova la tabella
    const tab = document.getElementById('table-body-ris');

    // Inserisce una nuova riga alla fine della tabella
    const nuovaRiga = tab.insertRow();

    // Array con l'ID delle colonne nell'intestazione
    const colIds = [
        `colTable${num}`,
        `colTable${num + 1}`,
        `colTable${num + 2}`,
        `colTable${num + 3}`,
        `colTable${num + 4}`,
        `colTable${num + 5}`,
        `colTable${num + 6}`,
        `colTable${num + 7}`,
        `colTable${num + 8}`,
        `colTable${num + 9}`
    ];
    // Imposta la classe sulla riga in base al numero
    if (num % 2 === 0) {
        nuovaRiga.className = 'table-ris tr:nth-child(even)';
    } else {
        nuovaRiga.className = 'table-ris tr:nth-child(odd)';
    }

    // Inserisce le celle nella nuova riga
    for (let i = 0; i < colIds.length; i++) {
        const cella = nuovaRiga.insertCell();
        cella.id = colIds[i];
    }
}

//funzione che imposta i valori delle statistiche della squadra
function squadStats(url, squad){
    axios.post(url, { squad: squad })
        .then(function (response) {
            console.log("Stat squadra: ", response.data);

            document.getElementById('num_partite').innerText = "- Partite: " + response.data.totalMatches;
            document.getElementById('num_vittorie').innerText = "- Vittorie: " + response.data.victories;
            document.getElementById('num_sconfitte').innerText = "- Sconfitte: " + response.data.defeats;
            document.getElementById('num_goal_fatti').innerText = "- Goal fatti: " + response.data.goalsScored;
            document.getElementById('num_goal_concessi').innerText = "- Goal concessi: " + response.data.goalsConceded;
        })
        .catch(function (error) {
            // Gestisci gli errori
            console.error('Error:', error);

            // Puoi aggiornare il DOM con un messaggio di errore
            document.getElementById('results').innerHTML = "Error occurred";
        });
}


function onSubmit(){
    const squadra = localStorage.getItem('squadra');
    document.getElementById('nome_squadra').innerText = squadra;
    // Chiamata a sendAxiosQuery con i valori dei campi
    sendAxiosQuerySq('/loadSq', squadra);
    infoSquadra('/list_info_squad', squadra);
    giocatoriSquadra('/squad_players', squadra);
    squadStats('/squad_stats', squadra);
}



