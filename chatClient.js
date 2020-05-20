let websocket;
let nameUser = prompt("donnez votre nom")
websocket = new WebSocket('ws://localhost:12345');

let buttonEnvoyer = document.getElementById("buttonEnvoyer");
let message = document.getElementById("messageToSend");
let textAreaToWrite = document.getElementById("textAreaToWrite");

buttonEnvoyer.onclick = function(event){
    event.preventDefault();
    console.log('Connexion établie');
    websocket.send(nameUser+" : "+message.value+"\n");
    message.value = null;
}

websocket.onmessage = function(event){
    textAreaToWrite.value += event.data;
}

