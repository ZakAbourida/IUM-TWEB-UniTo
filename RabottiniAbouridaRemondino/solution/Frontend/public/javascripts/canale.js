const socket = io();
let currentRoom ="";
let myColor = "";
let myUsername;

function init() {

    const messages = document.getElementById('messages');
    const listaUtenti = document.getElementById('listaUtenti');
    const messageInput1 = document.getElementById('messageInput1');
    const messageButton1 = document.getElementById('messageButton1');
    const princButton = document.getElementById("form-btn1");
    const premierButton = document.getElementById("form-btn2");
    const serieaButton = document.getElementById("form-btn3");
    const ligaButton = document.getElementById("form-btn4");

    //prendo il mio username dalla pagina di login (se null?)
    myUsername = localStorage.getItem(username);

    //entro nella chat principale
    princButton.addEventListener('click', (event) => {
        setMyColor();
        currentRoom = 'Principale';
        document.getElementById("form_container").style.display = 'none';
        document.getElementById("message_container").style.display = 'block';
        document.getElementById("send_container").style.display = 'flex';
        document.getElementById("top-chat").style.display = 'block';
        socket.emit('create or join conversation', currentRoom, getMyUsername(), getMyColor());
        localStorage.setItem('room', currentRoom);
        document.getElementById('welcome').innerHTML= "Welcome to room "+currentRoom;
        event.preventDefault()
    });

    //entro nella chat della premier
    premierButton.addEventListener('click', (event) => {
        setMyColor();
        currentRoom = 'Premier';
        document.getElementById("form_container").style.display = 'none';
        document.getElementById("message_container").style.display = 'block';
        document.getElementById("send_container").style.display = 'flex';
        document.getElementById("top-chat").style.display = 'block';
        socket.emit('create or join conversation', currentRoom, getMyUsername(), getMyColor());
        localStorage.setItem('room', currentRoom);
        document.getElementById('welcome').innerHTML= "Welcome to room "+currentRoom;
        event.preventDefault()
    });

    //entro nella chat della serieA
    serieaButton.addEventListener('click', (event) => {
        setMyColor();
        currentRoom = 'SerieA';
        document.getElementById("form_container").style.display = 'none';
        document.getElementById("message_container").style.display = 'block';
        document.getElementById("send_container").style.display = 'flex';
        document.getElementById("top-chat").style.display = 'block';
        socket.emit('create or join conversation', currentRoom, getMyUsername(), getMyColor());
        localStorage.setItem('room', currentRoom);
        document.getElementById('welcome').innerHTML= "Welcome to room "+currentRoom;
        event.preventDefault()
    });

    //entro nella chat della Liga
    ligaButton.addEventListener('click', (event) => {
        setMyColor();
        currentRoom = 'Liga';
        document.getElementById("form_container").style.display = 'none';
        document.getElementById("message_container").style.display = 'block';
        document.getElementById("send_container").style.display = 'flex';
        document.getElementById("top-chat").style.display = 'block';
        socket.emit('create or join conversation', currentRoom, getMyUsername(), getMyColor());
        localStorage.setItem('room', currentRoom);
        document.getElementById('welcome').innerHTML= "Welcome to room "+currentRoom;
        event.preventDefault()
    });

    //bottone di logout per uscire dalla chat
    let logoutButton = document.getElementById('logout');
    logoutButton.addEventListener('click', (event) => {
        document.getElementById("form_container").style.display = 'block';
        document.getElementById("message_container").style.display = 'none';
        document.getElementById("send_container").style.display = 'none';
        document.getElementById("top-chat").style.display = 'none';
        socket.emit('leave room', currentRoom, getMyUsername(), getMyColor()); // Send a leave room event
        //pulisco lista utenti
        while (listaUtenti.firstChild) {
            listaUtenti.removeChild(listaUtenti.firstChild);
        }
        while (messages.firstChild) {
            messages.firstChild.removeChild(messages.firstChild.firstChild);
            messages.removeChild(messages.firstChild);
        }
        currentRoom = null;
    })

    //quando premo enter invio il messaggio
    let field = document.getElementById('messageInput1');
    field.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            socket.emit('chat message', currentRoom, messageInput1.value, getMyUsername(), getMyColor());
            messageInput1.value = '';
            return false;
        }
    });

    //quando premo il bottone invia verrà inviato il messaggio
    messageButton1.addEventListener('click', () => {
        socket.emit('chat message', currentRoom, messageInput1.value, getMyUsername(), getMyColor());
        messageInput1.value = '';
    });

    //quando arriva un messaggio lo aggiungo alla mia chat
    socket.on('chat message', (msg, username, color) => {
        let who = (username === getMyUsername()) ? "Me" : username;
        const li = document.createElement('p');
        const div = document.createElement('div');
        li.textContent = who + ": " + msg;
        if(username === getMyUsername()){
            div.style.textAlign = 'right';
            div.style.width = '100%';
        }else{
            div.style.textAlign = 'left';
            div.style.width = '100%';
        }
        li.style.backgroundColor = color;
        messages.appendChild(div);
        div.appendChild(li);
    });

    //se sono entrato nella chat aggiorno lista utenti con quelli presenti, se entra qualcun altro
    //aggiorno lista utenti con il nuovo entrato e aggiungo messaggio alla chat
    socket.on('create or join conversation', (username, color, utenti) => {
        //sono appena entrato
        if (username === getMyUsername()){
            //aggiungo il mio nome alla lista utenti insieme a QUELLI GIA DENTRO
            let lista = utenti;
            for(let i=0; i < lista.length; i++){
                let item = lista[i];
                const li1 = document.createElement('li');
                li1.textContent = item;
                li1.id = item;
                listaUtenti.appendChild(li1);
            }
            return;
        }
        //è entrato qualcun altro
        const li = document.createElement('p');
        const div = document.createElement('div');
        li.textContent = username + ": " + "has joined the conversation";
        li.style.backgroundColor = color;
        div.style.textAlign = 'center';
        div.style.width = '100%';
        messages.appendChild(div);
        div.appendChild(li);

        //aggiungo il nome di chi è entrato alla lista utenti
        const li1 = document.createElement('li');
        li1.textContent = username;
        li1.id = username;
        listaUtenti.appendChild(li1);
    });

    //esco dalla chat
    socket.on('leave room', (username, color) => {
        if (username === getMyUsername()) return;
        const li = document.createElement('p');
        const div = document.createElement('div');
        li.textContent = username + ": " + "has left the conversation";
        li.style.backgroundColor = color;
        div.style.textAlign = 'center';
        div.style.width = '100%';
        messages.appendChild(div);
        div.appendChild(li);
        //dico al server che vado via e che deve levare il mio nome dalla lista utenti
        const li1 = document.getElementById(username);
        listaUtenti.removeChild(li1);
    });


    document.getElementById("form_container").style.display = 'block';
    document.getElementById("message_container").style.display = 'none';
    document.getElementById("send_container").style.display = 'none';
    document.getElementById('top-chat').style.display='none';


    //se chiudo la finestra esce dalla chat
    window.addEventListener('beforeunload', function (){
        // Send a leave room event quando chiudo direttamente la finestra del browser
        if(currentRoom!== null){
            socket.emit('leave room', currentRoom, getMyUsername(), getMyColor());
        }
        localStorage.clear();
    });
}



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

});

function getMyUsername(){
    return myUsername
}

function setMyColor(){
    myColor = getRandomLightColor();
}
function getMyColor(){
    return myColor
}

//funzione per settare un colore random all'utente
function getRandomLightColor() {
    const minBrightness = 80; // Luminosità minima (0-255) per essere considerato un colore chiaro
    let color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

    const brightness = color.split(',').reduce((acc, val) => acc + parseInt(val), 0) / 3; // Calcolo approssimato della luminosità

    if (brightness < minBrightness) {
        return getRandomLightColor(); // Se il colore non è abbastanza chiaro, genera un nuovo colore
    }

    return color;
}
