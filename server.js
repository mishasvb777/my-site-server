const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000

app.use(cors({ origin: 'https://lm-test-page.ru/' })) // Разрешить все источники

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
  res.json({ message: 'Hello from the API!' })
})

app.listen(PORT, () => {
  console.log(`Server is running on https://lm-test-page.ru:${PORT}`)
})
