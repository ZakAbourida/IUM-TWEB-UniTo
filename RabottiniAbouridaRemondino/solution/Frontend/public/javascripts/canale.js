const socket = io();
let myName = "";
let mySurname ="";
let currentRoom ="";
let myColor = "";

function init() {

    const messages = document.getElementById('messages');
    const listaUtenti = document.getElementById('listaUtenti');
    const messageInput1 = document.getElementById('messageInput1');
    const messageButton1 = document.getElementById('messageButton1');
    const formButton = document.getElementById("form-btn");



    messageButton1.addEventListener('click', () => {
        socket.emit('chat message', currentRoom, messageInput1.value, getMyFullName(), getMyColor());
        messageInput1.value = '';
    });


    formButton.addEventListener('click', (event) => {
        myName = document.getElementById("name").value;
        mySurname = document.getElementById("surname").value;
        setMyColor();
        document.getElementById("form_container").style.display = 'none';
        document.getElementById("message_container").style.display = 'block';
        document.getElementById("send_container").style.display = 'flex';
        socket.emit('create or join conversation', currentRoom, getMyFullName(), getMyColor());
        localStorage.setItem('my_name', myName);
        localStorage.setItem('my_surname', mySurname);
        localStorage.setItem('room', currentRoom);
        document.getElementById('welcome').innerHTML= "Welcome to room "+currentRoom;
        document.getElementById('logout').style.display='block';
        event.preventDefault()
    });

    let logoutButton = document.getElementById('logout');
    logoutButton.addEventListener('click', (event) => {
        localStorage.clear();
        // or localstorage.removeItem('my_name');
        document.getElementById("form_container").style.display = 'block';
        document.getElementById("message_container").style.display = 'none';
        document.getElementById("send_container").style.display = 'none';
        socket.emit('leave room', currentRoom, getMyFullName(), getMyColor()); // Send a leave room event
        //pulisco lista utenti
        while (listaUtenti.firstChild) {
            listaUtenti.removeChild(listaUtenti.firstChild);
        }
        currentRoom = null;
    })

    let field = document.getElementById('messageInput1');
    field.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            socket.emit('chat message', currentRoom, messageInput1.value, getMyFullName(), getMyColor());
            messageInput1.value = '';
            return false;
        }
    });

    socket.on('chat message', (msg, name, color) => {
        let who = (name === getMyFullName()) ? "Me" : name;
        const li = document.createElement('li');
        li.textContent = who + ": " + msg;
        if(name === getMyFullName()){
            li.style.textAlign = 'left';
        }else{
            li.style.textAlign = 'right';
        }
        li.style.backgroundColor = color;
        messages.appendChild(li);
    });

    socket.on('create or join conversation', (name, color, utenti) => {
        //sono appena entrato
        if (name === getMyFullName()){
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
        const li = document.createElement('li');
        li.textContent = name + ": " + "has joined the conversation";
        li.style.backgroundColor = color;
        messages.appendChild(li);

        //aggiungo il nome di chi è entrato alla lista utenti
        const li1 = document.createElement('li');
        li1.textContent = name;
        li1.id = name;
        listaUtenti.appendChild(li1);
    });

    socket.on('leave room', (name, color) => {
        if (name === getMyFullName()) return;
        const li = document.createElement('li');
        li.textContent = name + ": " + "has left the conversation";
        li.style.backgroundColor = color;
        messages.appendChild(li);
        //dico al server che vado via e che deve levare il mio nome dalla lista utenti
        const li1 = document.getElementById(name);
        listaUtenti.removeChild(li1);
    })


    myName = localStorage.getItem('my_name');
    mySurname = localStorage.getItem('my_surname');
    if (myName) {
        document.getElementById('name').value= myName;
        document.getElementById('surname').value= mySurname;
    }
    document.getElementById("form_container").style.display = 'block';
    document.getElementById("message_container").style.display = 'none';
    document.getElementById("send_container").style.display = 'none';
    document.getElementById('logout').style.display='none';


    window.addEventListener('beforeunload', function (){
        // Send a leave room event quando chiudo direttamente la finestra del browser
        if(currentRoom!== null){
            socket.emit('leave room', currentRoom, getMyFullName(), getMyColor());
        }
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



function getMyFullName(){
    return myName+" "+mySurname
}

function setMyColor(){
    myColor = getRandomLightColor();
}
function getMyColor(){
    return myColor
}

function getRandomLightColor() {
    const minBrightness = 200; // Luminosità minima (0-255) per essere considerato un colore chiaro
    let color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

    const brightness = color.split(',').reduce((acc, val) => acc + parseInt(val), 0) / 3; // Calcolo approssimato della luminosità

    if (brightness < minBrightness) {
        return getRandomLightColor(); // Se il colore non è abbastanza chiaro, genera un nuovo colore
    }

    return color;
}