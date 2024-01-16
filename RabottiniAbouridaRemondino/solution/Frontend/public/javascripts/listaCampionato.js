document.addEventListener('DOMContentLoaded', function() {

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
fillTable();
});

function redirectToPage(buttonID) {
    let val = document.getElementById(buttonID).innerText;

    // Salva il valore nella localStorage
    localStorage.setItem('campionato', val);

    // Reindirizza alla pagina "ListaSquadre.html"
    window.location.href = '../ListaSquadre.html';
}

function fillTable() {
    axios.get("/list_competitions")
        .then(function (response) {
            // Handle success
            console.log('Response:', response.data);

            // Trova la tabella
            for (let i = 0; i < response.data.length; i++) {
                document.getElementById(`buttonTable${i + 1}`).innerText = response.data[i].Name;
            }
        })
        .catch(function (error) {
            // Handle errors
            console.error('Error:', error);
        });
}


function aggiungiRiga(numero) {
    // Trova la tabella
    let tabella = document.getElementById('table');

    // Inserisci una nuova riga alla fine della tabella
    let nuovaRiga = tabella.insertRow();

    // Inserisci una cella per il numero
    let cellaNumero = nuovaRiga.insertCell();
    cellaNumero.textContent = numero;

    // Inserisci una cella per il pulsante
    let cellaPulsante = nuovaRiga.insertCell();
    let pulsante = document.createElement('button');
    pulsante.className = 'button-table';
    pulsante.id = `buttonTable${numero}`;
    pulsante.textContent = `buttonTable${numero}`;
    pulsante.onclick = function () {
        redirectToPage(`buttonTable${numero}`);
    };
    cellaPulsante.appendChild(pulsante);
}


