import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

//initialize app
const app = express();
//general app setup - setting up body parser so app can send requests
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

//app database setup
const CONNECTION_URL = 'mongodb+srv://memoriesapp:makingmemories@cluster0.d7txga9.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000
//using mongoose to connect to database
mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));
