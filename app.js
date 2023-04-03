import express from "express"
import mongoose from "mongoose";
import cors from 'cors'
import CompletedController from "./controllers/completed/completed-controller.js";
const app = express()
app.use(express.json());
app.use(cors());
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://127.0.0.1:27017/seniors';
mongoose.connect(CONNECTION_STRING);
app.get('/hello', (req, res) => {res.send('Hello World!')})
CompletedController(app)

app.listen(process.env.PORT || 4000)