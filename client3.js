const io=require('socket.io-client')
const socket=io.connect('http://localhost:3000')


socket.on("joinedroom",(client_id)=>{
    console.log("client3 event triggered",client_id)
})
socket.emit("join")
// setTimeout(()=>{
//     socket.emit("memberConnected")
// },3000)