import express from "express"
import cors from 'cors'
import CompletedController from "./controllers/completed/completed-controller.js";

const app = express()
app.use(express.json());
app.use(cors());
app.get('/hello', (req, res) => {res.send('Hello World!')})
CompletedController(app)

app.listen(process.env.PORT || 4000)