/* Al caricamento della pagina viene eseguita la funzione del listener che imposta i rispettivi
* listener ai bottoni per la ricerca, le opzioni di profilo utente e funzione per caricare i dati dal database Postgres
*/
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
    //funzione per caricare i dati dal DB
    fillTable();
});
//funzione chiamata quando si clicca su un campionato per andare alla pagina ListaSquadre con i dati corretti
function redirectToPage(buttonID) {
    let val = document.getElementById(buttonID).value;

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
                document.getElementById(`buttonTable${i + 1}`).value = response.data[i].Value;
            }
        })
        .catch(function (error) {
            // Handle errors
            console.error('Error:', error);
        });
}

