const express = require('express')
const app = express()
const cors = require('cors')
const http = require('http')
const PORT = process.env.PORT || 3000
const { Server } = require('socket.io') // Модуль для работы с WebSocket

const BASE_URL = `http://194.58.114.13:${PORT}`
const server = http.createServer(app)
const allowedOrigins = ['http://lm-test-page.ru', 'http://localhost:3001']

const userList = []

const corsOptions = {
  origin: '*', // Укажите разрешенный источник
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Укажите разрешенные методы
  credentials: true, // Разрешить отправку куки
}

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})

app.use(cors(corsOptions))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
  res.json({ message: 'Hello from the API!', id: 1 })
})

io.on('connection', (socket) => {
  console.log('user connected')

  socket.on('username', (userName) => {
    userList.push(userName)
    io.emit('username', userList)
  })

  socket.on('chat message', (data) => {
    io.emit('chat message', data)
  })

  socket.on('disconnect', () => {
    console.log('User disconnected')
  })
})

server.listen(PORT, () => {
  console.log(`Server is running on ${BASE_URL}`)
})
