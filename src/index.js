import express from 'express'

const app = express()
const port = 8000

app.use(express.json())

app.get('/', (req, res) => {
	res.json({ message: 'Hello from Express server!' })
})

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}/`)
})

