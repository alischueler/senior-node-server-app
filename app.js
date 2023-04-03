import express from "express"
import mongoose from "mongoose";
import cors from 'cors'
import CompletedController from "./controllers/completed/completed-controller.js";

const app = express()
app.use(express.json());
app.use(cors());
mongoose.connect('mongodb://127.0.0.1:27017/seniors');
app.get('/hello', (req, res) => {res.send('Hello World!')})
CompletedController(app)

app.listen(process.env.PORT || 4000)