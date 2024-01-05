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



});