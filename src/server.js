import express from "express"
import bodyParser from "body-parser"
import viewEngine from "./config/viewEngine"
import initWebRoutes from "./route/web"
import connectDB from "./config/connectDB"
import cors from 'cors'

require('dotenv').config();

let app = express();
const corsOptions ={
    origin:'http://localhost:3000', 
    header:'Access-Control-Allow-Origin',
    credentials:true,      
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions)) 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT ||5001
app.listen(port,function(){
    console.log("Back End Nodejs is runing on the port : "+port)
})