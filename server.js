const express = require('express')
const http = require('http')
const app = express()
const path = require('path')
const expressPort = 80
// const server = http.createServer(app)
// const io = require('socket.io').listen(server)
// const nodemon = require('nodemon')

app.use(express.static('build'))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'))
})

// server.listen(3001)

// io.on('connect', socket => {
    
// })

app.listen(expressPort, () => {
    console.log("express server running on port " + expressPort)
})