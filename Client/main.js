// const reply = document.getElementById('message')
const inputMessage = document.getElementById('input-msg')
const button = document.querySelector('button')
const messages = document.querySelector('ul')

// const socket = new WebSocket('ws://localhost:4000')
const socket = io('ws://localhost:4000')

function sendMessage() {
    const message = inputMessage.value

    socket.send(message)
}

socket.on('connect', (e) => {
    console.log('connected')
})

socket.on('message', (data) => {
    const newMessage = document.createElement('li')
    newMessage.innerText = data
    messages.appendChild(newMessage)
})

// socket.onmessage = (e) => {
//     reply.innerText = e.data
// }

// socket.onopen = (e) => {
//     socket.send('User1 connected')
//     button.disabled = false
// }

// socket.onclose = () => {
//     reply.innerText = 'Server shut downed'
//     button.disabled = true
// }