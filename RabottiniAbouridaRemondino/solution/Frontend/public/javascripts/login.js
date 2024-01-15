var username = '';
document.addEventListener('DOMContentLoaded', function() {
    const mostraDiv2 = document.getElementById('mostra-div-2');
    const div1 = document.getElementById('div-1');
    const div2 = document.getElementById('div-2');
    const mostraDiv3 = document.getElementById('mostra-div-3')
    const div3 = document.getElementById('div-3')
    const mostraDiv1 = document.getElementById('mostra-div-1')
    const accedi = document.getElementById('accedi-btn')


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
        localStorage.setItem(username, document.getElementById('username').value);
        window.location.href = 'homepage.html'; // Cambia 'pagina_di_destinazione.html' con l'URL della pagina a cui desideri collegarti
    });

});