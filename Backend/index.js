import express from "express";
import cors from "cors";
import userRoutes from "./Users.js"
import chatRoutes from "./chats.js"
import mongoose from "mongoose";
import bodyParser from "body-parser";
import serverless from "serverless-http"


const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//     res.setHeader(
//       "Access-Control-Allow-Origin",
//       "https://trustedtalks.vercel.app"
//     );
//     res.setHeader(
//       "Access-Control-Allow-Methods",
//       "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
//     );
//     res.setHeader(
//       "Access-Control-Allow-Headers",
//       "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
//     );
//     res.setHeader("Access-Control-Allow-Credentials", true);
//     res.setHeader("Access-Control-Allow-Private-Network", true);
//     //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
//     res.setHeader("Access-Control-Max-Age", 7200);
  
//     next();
//   });

app.use(cors());


app.use(bodyParser.json());

mongoose.connect("mongodb+srv://krishna:Krishna0870@chat.zimavbi.mongodb.net/")

app.use('/user', userRoutes )
app.use("/chats", chatRoutes);

app.get('/home', (req, res)=>{
    res.send("Database Connected")
})

app.listen(port, ()=>console.log(`Listenting to port on http://localhost:${port}`));

// export const handler = serverless(app)