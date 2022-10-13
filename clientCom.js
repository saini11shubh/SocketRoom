const io = require('socket.io-client');
var socket = io.connect('http://localhost:3000', { reconnect: true });
const name="client1";
let textarea = document.getElementById('send-container')
const messageInput=document.getElementById('textarea')
let messageArea = document.querySelector('message_area')            //put message here



socket.emit('message',name)
textarea.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        sendMessage(e.target.value)
    }
})


function sendMessage(message) {
    let msg = {
        client: name,
        message: message.trim()
    }

    //Append

    appendMessage(msg, 'outgoing')

    textarea.value=''
    scrollToBottom()
    //send to server
    socket.emit('message', msg)
}

function appendMessage(msg, type) {
    let mainDiv = document.createElement('div')
    let className = type
    mainDiv.classList.add(className, 'message')
    let markup = `
        <h4>${msg.client}</h4>
        <p>${msg.message}</p>
    `

    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
}

//recieved message 
socket.on('message',(msg)=>{
    appendMessage(msg,'incoming')
    scrollToBottom()
})


function scrollToBottom(){
    messageArea.scrollTop=messageArea.scrollHeight
}