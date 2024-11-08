import express from "express";
import { Variables } from "./src/config/variables.js";
import cookieParser from "cookie-parser";
import { connectDB } from "./src/config/database.js";
import { router } from "./src/routes/index.js";

// import dotenv from "dotenv"
// dotenv.config();

const app= express();

//middlewares 
// to parse JSON data in the req.body, exceed the limit of json data to upload large file
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({ extended: true })); // To parse form data in the req.body
app.use(cookieParser());


// make the ROUTES
router(app);

const PORT = Variables.PORT;

app.listen(PORT, () =>{
    connectDB()
    console.log("Server listening on port: ", PORT)
})


