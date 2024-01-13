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

    onSubmit();
});
function sendAxiosQuery(url) {
    /* FUNZIONE PER STAMPARE UNA SOLA PARTITA
     axios.get(url)
        .then(function (response) {
            const data = response.data;

            document.getElementById('stadio1').innerText = response.data.stadium.toString();
            document.getElementById('nome_squadra_casa1').innerText = response.data.home_club_name.toString();
            document.getElementById('nome_squadra_fuori_casa1').innerText = response.data.away_club_name.toString();
            document.getElementById('risultato1').innerText = response.data.aggregate.toString();

        })*/

    axios.get(url)
        .then(function (response) {
            console.log(response.data);

            console.log(response.data[9].stadium);

            for (let i = 0; i < response.data.length; i++) {
                document.getElementById(`stadio${1+i}`).innerHTML = response.data[i].stadium.toString();
                document.getElementById(`nome_squadra_casa${1+i}`).innerHTML = response.data[i].home_club_name.toString();
                document.getElementById(`nome_squadra_fuori_casa${1+i}`).innerHTML = response.data[i].away_club_name.toString();
                document.getElementById(`risultato${1+i}`).innerHTML = response.data[i].aggregate.toString();
            }
        })
        .catch(function (error) {
            // Gestisci gli errori
            console.error('Error:', error);

            // Puoi aggiornare il DOM con un messaggio di errore
            document.getElementById('results').innerHTML = "Error occurred";
        });
}
function onSubmit() {
    console.log("Caricamento dati in homepage");
    // Chiamata a sendAxiosQuery con i valori dei campi
    sendAxiosQuery('/loadHP');

}

