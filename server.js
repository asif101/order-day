const express = require('express')
const http = require('http')
const app = express()
const fs = require('fs')
const path = require('path')
// const io = require('socket.io').listen(server)
// const nodemon = require('nodemon')

app.use(express.static('build'))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'))
})

// server.listen(3001)

// io.on('connect', socket => {
// })

const httpServer = http.createServer(app)

httpServer.listen(3010, () => {
    console.log('HTTP Server running on port 80')
})