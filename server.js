const express = require('express')
const https = require('https')
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
const httpsServer = https.createServer({
    key: fs.readFileSync('/etc/letsencrypt/live/orderday.asif.works/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/orderday.asif.works/fullchain.pem'),
}, app)

httpServer.listen(80, () => {
    console.log('HTTP Server running on port 80')
})

httpsServer.listen(443, () => {
    console.log('HTTPS Server running on port 443')
})