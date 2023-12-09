import express from "express";
import cors from "cors";
import userRoutes from "./Users.js"
import chatRoutes from "./chats.js"
import mongoose from "mongoose";
import bodyParser from "body-parser";
import serverless from "serverless-http"


const app = express();
// const PORT = 3000;
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://krishna:Krishna0870@chat.zimavbi.mongodb.net/")
app.use(cors())
app.use('/user', userRoutes )
app.use("/chats", chatRoutes);

app.get('/home', (req, res)=>{
    res.send("Database Connected")
})

// app.listen(PORT, ()=>console.log(`Listenting to port on http://localhost:${PORT}`));

export const handler = serverless(app)