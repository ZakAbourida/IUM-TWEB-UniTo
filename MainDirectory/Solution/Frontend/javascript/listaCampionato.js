let container1;
let container2;
document.addEventListener('DOMContentLoaded', function() {
    container1 = document.getElementById('container-n1');
    container2 = document.getElementById('container-n2');

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
    console.log("MOSTRA ANCORA: Chiamata effettuata");
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