document.addEventListener('DOMContentLoaded', function() {
    const barraRicerca = document.getElementById('barra-ricerca');
    const mostraBarra = document.getElementById('mostra-barra');

    const opzioniLogin = document.getElementById('opzioni-login');
    const mostraOpzioni = document.getElementById('mostra-opzioni');

    const containerW1 = document.getElementById('wrap-w-items1');
    const containerW2 = document.getElementById('wrap-w-items2');
    const mostraAltroW = document.getElementById('btn-switch-w');

    const containerN1 = document.getElementById('wrap-n-items1');
    const containerN2 = document.getElementById('wrap-n-items2');
    const mostraAltroN = document.getElementById('btn-switch-n');


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

    mostraAltroW.addEventListener('click', function () {
        if(!containerW2.classList.contains('visible-wn')) {
            containerW1.classList.remove('visible-wn');
            containerW1.classList.add('hidden-wn');
            containerW2.classList.remove('hidden-wn');
            containerW2.classList.add('visible-wn');
        } else {
            containerW2.classList.remove('visible-wn');
            containerW2.classList.add('hidden-wn');
            containerW1.classList.remove('hidden-wn');
            containerW1.classList.add('visible-wn');
        }
    });

    mostraAltroN.addEventListener('click', function () {
        if(!containerN2.classList.contains('visible-wn')) {
            containerN1.classList.remove('visible-wn');
            containerN1.classList.add('hidden-wn');
            containerN2.classList.remove('hidden-wn');
            containerN2.classList.add('visible-wn');
        } else {
            containerN2.classList.remove('visible-wn');
            containerN2.classList.add('hidden-wn');
            containerN1.classList.remove('hidden-wn');
            containerN1.classList.add('visible-wn');
        }
    });

    onSubmit('DOMContentLoaded');
});
function sendAxiosQuery(url, stadio, nome_sq_casa, nome_sq_fuori, risultato, elenco_marcatori) {
    // Costruisci l'URL con i parametri della query
    const queryParameters = {
        stadio,
        nome_sq_casa,
        nome_sq_fuori,
        risultato,
        elenco_marcatori
    };

    axios.get(url, { params: queryParameters })
        .then(function (response) {
            // Gestisci la risposta come necessario
            console.log(response.data);

            // Aggiorna i risultati nel DOM
            document.getElementById('stadio').innerHTML = response.data.stadio;
            document.getElementById('nome_squadra_casa').innerHTML = response.data.nome_sq_casa;
            document.getElementById('nome_squadra_fuori_casa').innerHTML = response.data.nome_sq_fuori;
            document.getElementById('risultato').innerHTML = response.data.risultato;
            document.getElementById('marcatori').innerHTML = response.data.elenco_marcatori;
        })
        .catch(function (error) {
            // Gestisci gli errori
            console.error('Error:', error);

            // Puoi aggiornare il DOM con un messaggio di errore
            document.getElementById('results').innerHTML = "Error occurred";
        });
}
function onSubmit(event) {
    // Ottieni i valori dei campi del modulo HTML
    const stadio = document.getElementById('stadio');
    const nome_sq_casa = document.getElementById('nome_squadra_casa');
    const nome_sq_fuori = document.getElementById('nome_squadra_fuori_casa');
    const risultato = document.getElementById('risultato');
    const elenco_marcatori = document.getElementById('marcatori');

    console.log("Caricamento dati in homepage");
    // Chiamata a sendAxiosQuery con i valori dei campi
    sendAxiosQuery('/loadHP', stadio, nome_sq_casa, nome_sq_fuori, risultato, elenco_marcatori);
    // prevent the form from reloading the page (normal behaviour for forms)
    event.preventDefault()
}

