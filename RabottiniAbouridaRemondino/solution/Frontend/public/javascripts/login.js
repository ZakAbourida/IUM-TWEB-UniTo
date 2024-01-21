/* Variabile utilizzata per salvare il contenuto inserito nel campo Username del login in modo
*  da avere l'username da utilizzare nella pagina Canale
*/
var username = '';

/* Al caricamento della pagina viene eseguita la funzione del listener che imposta i rispettivi
*  listener a link per impostare il relativo div e il button caricare la pagina homepage.html e salvare
*  l'username inserito dall'utente
 */
document.addEventListener('DOMContentLoaded', function() {

    // Salva un valore di default
    localStorage.setItem('campionato', 'serie-a');

    const mostraDiv2 = document.getElementById('mostra-div-2');
    const div1 = document.getElementById('div-1');
    const div2 = document.getElementById('div-2');
    const mostraDiv3 = document.getElementById('mostra-div-3')
    const div3 = document.getElementById('div-3')
    const mostraDiv1 = document.getElementById('mostra-div-1')
    const accedi = document.getElementById('accedi-btn')

    //Imposta il div di "Hai dimenticato la password?"
    mostraDiv2.addEventListener('click', function(event) {
        event.preventDefault(); // Previeni il comportamento predefinito dell'elemento <a>

        if (!div1.classList.contains('hidden')) {
            div1.classList.add('hidden');
            div1.classList.remove('visible');
            div2.classList.remove('hidden');
            div2.classList.add('visible');
        } else {
            div2.classList.add('hidden');
            div2.classList.remove('visible');
            div1.classList.remove('hidden');
            div1.classList.add('visible');
        }
    });

    //Imposta il div di "Mail inviata"
    mostraDiv3.addEventListener('click', function(event) {
        event.preventDefault(); // Previeni il comportamento predefinito dell'elemento <a>

        if (!div2.classList.contains('hidden')) {
            div2.classList.add('hidden');
            div2.classList.remove('visible');
            div3.classList.remove('hidden');
            div3.classList.add('visible');
        } else {
            div3.classList.add('hidden');
            div3.classList.remove('visible');
            div2.classList.remove('hidden');
            div2.classList.add('visible');
        }
    });

    //Imposta il div di Login
    mostraDiv1.addEventListener('click', function(event) {
        event.preventDefault(); // Previeni il comportamento predefinito dell'elemento <a>

        if (!div3.classList.contains('hidden')) {
            div3.classList.add('hidden');
            div3.classList.remove('visible');
            div1.classList.remove('hidden');
            div1.classList.add('visible');
        } else {
            div1.classList.add('hidden');
            div1.classList.remove('visible');
            div3.classList.remove('hidden');
            div3.classList.add('visible');
        }
    });

    accedi.addEventListener('click', function() {
        //salvo in localStorage il valore del campo input dell'Username del div di login
        localStorage.setItem(username, document.getElementById('username').value);
        window.location.href = 'Homepage.html'; // Cambia 'pagina_di_destinazione.html' con l'URL della pagina a cui desideri collegarti
    });

});