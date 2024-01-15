let container1;
let container2;
document.addEventListener('DOMContentLoaded', function() {
    container1 = document.getElementById('container-n1');
    container2 = document.getElementById('container-n2');

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

    function init() {
        if (container1) {
            container1.style.display = 'block';
        }
        if (container2) {
            container2.style.display = 'none';
        }
    }
    // Chiamata a init() al caricamento del documento
    init();
});

function MostraAncora() {
    if (container1 && container2) {
        if (container1.style.display === 'block') {
            container1.style.display = 'none';
            container2.style.display = 'block';
        } else {
            container1.style.display = 'block';
            container2.style.display = 'none';
        }
    }
}
function redirectToPage(buttonID) {
    let val = document.getElementById(buttonID).innerText;

    // Salva il valore nella localStorage
    localStorage.setItem('campionato', val);

    // Reindirizza alla pagina "ListaSquadre.html"
    window.location.href = '../public/ListaSquadre.html';
}






