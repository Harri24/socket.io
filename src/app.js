const io = require("socket.io-client");

//connect

let chat = io.connect("http://localhost.3002/chat")


const username = "Harri";

function sendMessage(){
    let input = document 
    .getElementById("chat-input")
    .value;
    let msg = input.value;

    input.value = "";
  
    chat.emit("newMsg", { username, msg });

}

function addMessage(container, data) {
    let elm = document.createElement("p");

    elm.textContent = `${data.username}: ${data.msg}`;

    container.appendChild(elm);

}

//listen for new messages 
chat.on("newMessage", (data) => {
    console.log("new Message: ", data.username, date.msg);

    let container = document.getElementById("container");
    addMessage(container, data)
})

const btn = document.getElementById("submitBtn");
btn.onclick = () => {
    sendMessage();
}






// //the use of the socket is the LINK- same link between server and client 

// let games = io.connect("http://localhost:3002/games");


// games.on("welcome", (msg) => {
//     console.log("Recieved: " + msg);
// })

// //joining the particular user into that room 

// games.emit("joinRoom", "rocket league"); 

// games.on("newUser", (res) => console.log(res));

// games.on("err", (err) => console.log(err));

// games.on("success", (res) => console.log(res))