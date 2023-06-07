require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const UserRoute = require("./routes/UserRoute");


const app = express();

const PORT = process.env.PORT || 3000; 
const mongourl = process.env.MONGO_URL;

mongoose.connect(mongourl,{
    useNewUrlParser: true
})
.then((res)=> console.log("db connected"))
.catch((err)=> console.log(err));

app.use("/",UserRoute);




app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})

