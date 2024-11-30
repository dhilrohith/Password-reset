import mongoose from "mongoose";
import config from "./utils/config.js";
import app from "./app.js"

mongoose.connect(config.MONGODB_URI)
.then(()=>{
    console.log("database is connected");

    app.listen(3000, ()=>{
        console.log("connected to server @ http://localhost:3000")
    })
})