document.addEventListener('DOMContentLoaded', function () {
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

    changeAnnoNascitatext();

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

    toggleBtn1.addEventListener('click', function () {
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

    toggleBtn2.addEventListener('click', function () {
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

    toggleBtn3.addEventListener('click', function () {
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

    toggleBtn4.addEventListener('click', function () {
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

    toggleBtn5.addEventListener('click', function () {
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

    toggleBtn6.addEventListener('click', function () {
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

    AxiosCall('/seasons');
    AxiosCall('/country');
    AxiosCall('/list_competitions');
    AxiosCall('/all_teams');
    AxiosCall('/get_role');

});

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

function fillDropMenu(data, url) {
    var menu_id;
    var btnMenu;
    switch (url) {
        case '/seasons':
            menu_id = "seasons_menu";
            btnMenu = "btn-stagione";
            break;
        case '/country':
            menu_id = "country_menu";
            btnMenu = "btn-paese";
            break;
        case '/list_competitions':
            menu_id = "championships_menu";
            btnMenu = "btn-campionato";
            break;
        case '/all_teams':
            menu_id = "club_menu";
            btnMenu = "btn-club";
            break;
        case '/get_role':
            menu_id = "role_menu";
            btnMenu = "btn-ruolo";
            break;
        default:
            menu_id = null;
            btnMenu = null;
    }
    var menu = document.getElementById(menu_id);

    // Pulisci il contenuto esistente
    menu.innerHTML = '';

    // Loop attraverso l'array di stagioni
    data.forEach(function (season) {
        // Crea un nuovo elemento <a>
        var linkElement = document.createElement("a");
        if(url === "/list_competitions"){
            linkElement.setAttribute('value', season.Value);  // Imposta il valore dell'elemento
            linkElement.textContent = season.Name;
        }else{
            linkElement.textContent = season;
        }

        linkElement.id = linkElement.textContent;

        document.getElementById(linkElement.id).addEventListener('click', function (){
            btnMenu.innerText = document.getElementById(linkElement.id).innerText;
        });

        // Aggiungi l'elemento <a> al menu
        menu.appendChild(linkElement);
    });
}

function changeAnnoNascitatext(){
    for(let i = 1; i<21; i++){
        document.getElementById('anno'+i).addEventListener('click', function (){
            document.getElementById('btn-annonascita').innerText = document.getElementById('anno'+i).innerText;
        });
    }
}