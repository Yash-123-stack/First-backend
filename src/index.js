// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db";

dotenv.config({
    path: './env'
})
connectDB()

// import express from "express"
// const app = express()
// first approach to connect database with the server 

// ( async () => {
//     try {

//        await  mongoose.connect(`${process.env.MONGODB_URI}/${
//             DB_NAME 
//         }`)
//         app.on("error", (error) => {
//             console.log("Oops something went wrong", error);
//             throw error
//         })
        
//         app.listen(process.env.PORT, ()=> {
//             console.log(`App is listening on PORT ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("ERROR:", error)
//         throw err
//     }

// }) ()