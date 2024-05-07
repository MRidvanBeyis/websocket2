const socket = io.connect("http://localhost:5000")

const sendernameInput = document.getElementById(sendername)
const messageInput = document.getElementById(message)
const submitInput = document.getElementById(submit)
const outputInput = document.getElementById(output)
const feedbackInput = document.getElementById(feedback)

submit.addEventListener("click",()=> {
    socket.emit("texting",{
        message: message.value,
        sendername: sendername.value
    })
})

socket.on("texting", data => {
    feedback.innerHTML = "";
    output.innerHTML += "<p><strong>" + data.sendername + " : </strong>" + data.message + "</p>"
    message.value = "";
})

message.addEventListener("keypress",() =>{
    socket.emit("typing",sendername.value)
})

socket.on("typing",data=>{
    feedback.innerHTML="<p>" + data +""+ " typing...</p>"
})