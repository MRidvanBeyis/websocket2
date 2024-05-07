const express = require("express")
const socket = require("socket.io")
const app = express()
const server = app.listen(5000)

app.use(express.static("public"))

const io = socket(server)

io.on("connect",(socket)=>{
    console.log(socket.id);
    
    socket.on("texting", data => {
        io.sockets.emit("texting", data)
        
    })
    socket.on("typing",data =>{
        socket.broadcast.emit("typing",data)
    })
})