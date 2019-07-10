const express = require('express');
const app = express()
const port = 3002
const http = require('http').createServer();

const io = require("socket.io")(http);

io  .of("/chat")
    .on("connection", (socket) => {

        socket.on("newMsg", (data) => {
            console.log(`new message recieved from the user: ${data.username}: ${data.msg}`);
              
            //send message to other connected users but not to ourselves 
            socket
            .broadcast
            .emit("newMessage", data)
    
        });
});





http.listen(port, () => {
    console.log("Server is listening on localhost:" + port);
})


// // socket is the connection between you and the user 
// io.on("connection", (socket) => {
//     // emiting the event to the user - name of message and message itself
//     socket.emit("hello", "Welcome to the socket server");


// });

//const gameRooms = ["rocket league", "csgo", "bt1"]; 

// //this is the name of the name space - ie gameroom, and make a connection with the socket between you and the clien t
// io.of("/games")
//     .on("connection", (socket) => {
//     socket.emit("welcome", "Hello and welcome to the game");

//         //joining a room 
//     socket.on("joinRoom", (room) => {
//         //checking if the game he wants to join exists 
//         //adding restrictions 
//         if (gameRooms.includes(room)){
//             socket.join(room);
//            // accessing the socket on this particular namespace - have to use the .of
//             io.of("/games")
//             .in(room)
//             .emit("newUser", "New Player has joined the " + room); //this is key 
//             return socket.emit("success", "You have successfully joined this room")
//         } else {
//             return socket.emit("err", "No Room named " + room);
//         }

//         socket.disconnect();

//     });

// });