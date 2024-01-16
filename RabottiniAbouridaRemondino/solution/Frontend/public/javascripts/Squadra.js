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

    const toggleBtn5 = document.getElementById('toggleBtn5');
    const dropdownContent5 = document.getElementById('dropdownContent5');
    const contentToMove5 = document.querySelector('.content-to-move5');

    const toggleBtn6 = document.getElementById('toggleBtn6');
    const dropdownContent6 = document.getElementById('dropdownContent6');
    /*const contentToMove6 = document.querySelector('.content-to-move6');*/

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
            dropdownContent5.style.display = 'none';
            dropdownContent6.style.display = 'none';

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
            dropdownContent5.style.display = 'none';
            dropdownContent6.style.display = 'none';

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
            dropdownContent5.style.display = 'none';
            dropdownContent6.style.display = 'none';

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
            dropdownContent5.style.display = 'none';
            dropdownContent6.style.display = 'none';

            dropdownContent4.style.display = 'block';
            contentToMove4.style.marginTop = `${spostamentoDesiderato}px`; // Applica il nuovo valore per lo spostamento
        }
    });
    toggleBtn5.addEventListener('click', function() {
        const tendinaAltezza = dropdownContent5.clientHeight;
        const spostamentoDesiderato = tendinaAltezza > 100 ? 50 : tendinaAltezza * 0.5; // Modifica questa parte per regolare l'altezza dello spostamento desiderato
        if (dropdownContent5.style.display === 'block') {
            dropdownContent5.style.display = 'none';
            contentToMove5.style.marginTop = '0';
        } else {
            dropdownContent1.style.display = 'none';
            dropdownContent2.style.display = 'none';
            dropdownContent3.style.display = 'none';
            dropdownContent4.style.display = 'none';
            dropdownContent6.style.display = 'none';
            dropdownContent5.style.display = 'block';
            contentToMove5.style.marginTop = `${spostamentoDesiderato}px`; // Applica il nuovo valore per lo spostamento
        }
    });
    toggleBtn6.addEventListener('click', function() {
        const tendinaAltezza = dropdownContent6.clientHeight;
        const spostamentoDesiderato = tendinaAltezza > 100 ? 50 : tendinaAltezza * 0.5; // Modifica questa parte per regolare l'altezza dello spostamento desiderato
        if (dropdownContent6.style.display === 'block') {
            dropdownContent6.style.display = 'none';
        } else {
            dropdownContent1.style.display = 'none';
            dropdownContent2.style.display = 'none';
            dropdownContent3.style.display = 'none';
            dropdownContent4.style.display = 'none';
            dropdownContent5.style.display = 'none';

            dropdownContent6.style.display = 'block';
        }
    });

    onSubmit();
});

function sendAxiosQuerySq(url, squad){
    // Richiesta POST con annessa la squadra della pagina
    axios.post(url, {squad: squad})
        .then(function (response) {
            const matches = response.data;

            console.log(matches);

            // Loop attraverso le partite ricevute
            for (let i = 0; i < matches.length; i++) {
                const match = matches[i];
                const rowId = `rowTable${i + 1}`;

                const dataDalDatabase = match.date;

                // Crea un oggetto Date dalla stringa della data
                const dataObj = new Date(dataDalDatabase);

                // Ottieni giorno, mese e anno
                const giorno = dataObj.getDate();
                const mese = dataObj.getMonth() + 1; // Mese inizia da 0, quindi aggiungi 1

                // Formatta la data nel formato desiderato (dd/mm/yyyy)
                const dataFormattata = `${giorno}/${mese}`;

                if(squad == match.home_club_name){ // la squadra scelta gioca in casa
                    document.getElementById(`colTable${4 + i * 10}`).innerText = match.away_club_name;
                    document.getElementById(`colTable${5 + i * 10}`).innerText = `${match.home_club_goals}:${match.away_club_goals}`;
                    document.getElementById(`colTable${7 + i * 10}`).innerText = match.away_club_position;
                }else{                             // la squadra scelta gioca fuori casa
                    document.getElementById(`colTable${4 + i * 10}`).innerText = match.home_club_name;
                    document.getElementById(`colTable${5 + i * 10}`).innerText = `${match.away_club_goals}:${match.home_club_goals}`;
                    document.getElementById(`colTable${7 + i * 10}`).innerText = match.home_club_position;
                }
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

function onSubmit(){
    console.log("Caricamento dati in homepage");
    //const squadra = localStorage.getItem('squadra');
    // Chiamata a sendAxiosQuery con i valori dei campi
    const squadra = 'Real Madrid Club de Fútbol';
    sendAxiosQuerySq('/loadSq', squadra);
}



