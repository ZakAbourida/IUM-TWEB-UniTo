let container1;
let container2;
document.addEventListener('DOMContentLoaded', function() {
    const campionato = localStorage.getItem('campionato');

    alert("Ho RICEVUTO: "+ campionato);

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
            // Handle success
            console.log('Response:', response.data);

            // Trova la tabella
            for (let i = 0; i < response.data.length; i++) {
                document.getElementById(`buttonTable${i + 1}`).innerText = response.data[i];
            }
        })
        .catch(function (error) {
            // Handle errors
            console.error('Error:', error);
        });
}

function aggiungiRiga(num) {
    // Trova la tabella
    let tab = document.getElementById('table');

    // Inserisci una nuova riga alla fine della tabella
    let nuovaRiga = tab.insertRow();

    // Inserisci una cella per il numero
    let cellaNum = nuovaRiga.insertCell();
    cellaNum.textContent = num;

    // Inserisci una cella per il pulsante
    let cellaPulsante = nuovaRiga.insertCell();
    let pulsante = document.createElement('button');
    pulsante.className = 'button-table';
    pulsante.id = `buttonTable${num}`;
    pulsante.textContent = `buttonTable${num}`;
    pulsante.onclick = function () {
        redirectToPage(`buttonTable${num}`);
    };
    cellaPulsante.appendChild(pulsante);
}


