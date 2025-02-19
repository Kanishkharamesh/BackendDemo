/* import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import router from "./Routes/userRoute.js";
const app=express();

//bodypraser is a middleware for parsing the json  data

app.use(bodyParser.json())
dotenv.config();

const PORT =process.env.PORT || 5000;
const MONGO_URL=process.env.MONGO_URL;

app.use('/api/user',router)

//database connection
mongoose
         .connect(MONGO_URL)
         .then(()=>{
            console.log("db connected");
            app.listen(PORT,()=>{
                console.log(`Server is running on port ${PORT}`)
            })
         }) */

/* import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import router from "./Routes/userRoute.js";
const app = express();

//bodypraser is a middleware for parsing the json  data

app.use(bodyParser.json())
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

app.use('/api/user', router)

app.use('/api/user/create', router)

mongoose
    .connect(MONGO_URL)
    .then(() => {
        console.log("db connected");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    }) */

/* import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors';
import router from "./Routes/userRoute.js";
const app = express();

//bodypraser is a middleware for parsing the json  data

app.use(bodyParser.json())
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

app.use('/api/user', router)


mongoose
    .connect(MONGO_URL)
    .then(() => {
        console.log("db connected");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    }) */

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import router from "./Routes/userRoute.js";
import cors from "cors"
const app = express();

//bodypraser is a middleware for parsing the json  data
app.use(cors());
app.use(bodyParser.json())
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

app.use('/api/user', router)


mongoose
    .connect(MONGO_URL)
    .then(() => {
        console.log("db connected");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    })