
// const io = require('socket.io-client');
// var socket = io.connect('http://localhost:3000', { reconnect: true });

// let name=client1
// const textarea = document.getElementById('send-container')
// const messageInput = document.getElementById('textarea')
//let messageArea = document.querySelector('message_area')            //put message here
// var messageInput1;

// function sendData() {
//     messageInput1 = document.getElementById('textarea').value;
//     alert(messageInput1);
//     socket.emit('message', 'messageInput1')
//    appendMessage(messageInput);
//}



// function appendMessage(msg) {
//     let mainDiv = document.createElement('div')
//     mainDiv.classList.add(className, 'message')
//     let markup = `
//          <h4>Rakesh</h4>
//         <p>${msg.message}</p>
//     `

//     mainDiv.innerHTML = markup
//     messageArea.appendChild(mainDiv)
// }


// function addElement () {
//   // create a new div element
//   const newDiv = document.createElement("div");

//   // and give it some content
//   const newContent = document.createTextNode("Hi there and greetings!");

//   // add the text node to the newly created div
//   newDiv.appendChild(newContent);

//   // add the newly created element and its content into the DOM
//   const currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv, currentDiv);
// }