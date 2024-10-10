const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000

const BASE_URL = `http://194.58.114.13:${PORT}`

const corsOptions = {
  origin: 'http://lm-test-page.ru', // Укажите разрешенный источник
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Укажите разрешенные методы
  credentials: true, // Разрешить отправку куки
}

app.use(cors(corsOptions))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
  res.json({ message: 'Hello from the API!', id: 1 })
})

app.listen(PORT, () => {
  console.log(`Server is running on ${BASE_URL}`)
})
