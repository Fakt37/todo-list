import express from 'express';
import cors from 'cors'
import routes from './routes/router.js'

const PORT = 3000;
const app = express()

app.use(express.json())
app.use(cors());
app.use(routes)

app.listen(PORT, () => {
	console.log(`Сервер запущен на порту ${PORT}`);
})