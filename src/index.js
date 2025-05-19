// require('dotenv').config({ path: './env' });

import connectDB from "./db/mongodb.js";

import dotenv from "dotenv"
dotenv.config({ 
    path: './env'
})

connectDB()
.then( () => { 
    app.listen(process.env.PORT || 8000, () => { 
        console.log(`Server is running at port: ${process.env.PORT}`)
    });
} )
.catch( (err) => {
    console.log("MongoDB connection failed: ", err);
    
} )








/* 1st approach - everything is in index file including database and express backend
import express from 'express'
const app = express()

( async () => { 
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => { 
            console.log("ERR: ", error);
            throw error;
        });

        app.listen(process.env.PORT, () => { 
            console.log(`App is listening on ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.error("ERROR: ", error);
        throw error;
    }
} )()
*/