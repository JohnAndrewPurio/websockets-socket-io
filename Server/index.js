// Websocket using ws package
// const webSocket = require('ws')
const PORT = 4000

// const server = new webSocket.Server({
//     port: PORT
// })

// const connectionHandler = (socket) => {
//     socket.on('message', (message) => {
//         socket.send(message)
//     })
// }

// server.on('connection', connectionHandler)

// Websocket using socket.io

const { createServer } = require('http')

const httpServer = createServer()
const socket = require('socket.io')

const io = socket(httpServer, {
    cors: {
        origin: '*'
    }
})

io.on('connection', connectionHandler)

httpServer.listen(PORT, () => {
    console.log('Listening on http://localhost:' + PORT)
})


function connectionHandler(socket) {
    console.log('Client Connected:', socket.id)
    socket.on('message', (data) => {
        io.emit('message', `${socket.id}: ${data}`)
    })
}